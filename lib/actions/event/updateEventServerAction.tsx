"use server";

import { revalidatePath } from "next/cache"; // For revalidating the cache
import Event from "@/lib/models/event.model";
import { User } from "@/lib/models/user.model"; // Import the User model
import { SendEmailWhenEventDateUpdate } from "@/lib/mail"; // Resend email service
import { EventInterfaceType } from "@/lib/types";
import mongoose from "mongoose";

export async function updateEventServerAction(
  eventId: string,
  updatedData: EventInterfaceType
) {
  try {
    // Fetch the existing event
    const existingEvent = await Event.findById(eventId);
    if (!existingEvent) return { status: 404, message: "Event not found" };

    // Check if start or end date changed
    const startChanged =
      existingEvent.schedule.start.toISOString() !==
      new Date(updatedData.schedule.start).toISOString();
    const endChanged =
      existingEvent.schedule.end.toISOString() !==
      new Date(updatedData.schedule.end).toISOString();

    // Update the event
    const updatedEvent = await Event.findByIdAndUpdate(eventId, updatedData, {
      new: true,
    });

    // Notify registered users if date changed
    if (startChanged || endChanged) {
      const registeredUsers = existingEvent.registeredUsers || []; // Assuming you store registered users
      const emails = registeredUsers.map(
        (user: { email: string }) => user.email
      );

      const subject = "Event Date Updated";
      const body = `The event "${existingEvent.title}" has been rescheduled.\n\nNew Start Date: ${updatedEvent.schedule.start}\nNew End Date: ${updatedEvent.schedule.end}`;

      await SendEmailWhenEventDateUpdate(emails, subject, body);
    }

    // Revalidate cache for fresh data
    revalidatePath("/events"); // Adjust the path based on your routing

    return {
      status: 200,
      message: "Event updated successfully",
    };
  } catch (error) {
    return { status: 500, message: "Error updating event", error };
  }
}

// register to events

interface RegisterEventParams {
  eventId: string;
  userId: string;
}

export const registerEvents = async ({
  eventId,
  userId,
}: RegisterEventParams) => {
  try {
    // Convert userId and eventId to ObjectId
    const userObjectId = new mongoose.Types.ObjectId(userId);
    const eventObjectId = new mongoose.Types.ObjectId(eventId);

    // Fetch the event
    const event = await Event.findById(eventId);
    if (!event) return { status: 404, message: "Event not found" };

    // You cannot register for your own event
    if (event.createdBy.toString() === userId) {
      return {
        status: 403,
        message:
          "Seriously? You’re trying to register for your own event? Nice hustle, but no. 😂",
      };
    }

    // Ensure registration deadline hasn't passed
    if (new Date(event.registrationDeadline) < new Date()) {
      return {
        status: 403,
        message: "Registration failed: Deadline has passed.",
      };
    }

    // Ensure user is not already registered
    interface RegisteredUser {
      userId: mongoose.Types.ObjectId;
      registeredAt: Date;
      checkInStatus: boolean;
    }

    if (
      event.registeredUsers.some(
        (user: RegisteredUser) => user.userId.toString() === userId
      )
    ) {
      return {
        status: 400,
        message: "Registration failed: User is already registered.",
      };
    }

    // Ensure event hasn't reached max capacity
    if (event.registeredUsers.length >= event.maxParticipants) {
      return {
        status: 400,
        message: "Registration failed: Event has reached full capacity.",
      };
    }

    // Register the user in the event
    await Event.findByIdAndUpdate(eventId, {
      $push: {
        registeredUsers: {
          userId: userObjectId,
          registeredAt: new Date(),
          checkInStatus: false,
        },
      },
    });

    // Add the event ID to the user's registeredEvents array
    await User.findByIdAndUpdate(userId, {
      $push: {
        registeredEvents: {
          eventId: eventObjectId,
          registeredAt: new Date(),
        },
      },
    });

    // Revalidate cache for fresh data
    revalidatePath("/events");

    return {
      status: 200,
      message: "User successfully registered for the event.",
    };
  } catch (error) {
    console.error("Error during event registration:", error);
    return {
      status: 500,
      message: "Internal server error. Please try again.",
      error,
    };
  }
};