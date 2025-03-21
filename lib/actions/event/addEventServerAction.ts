"use server";

import { User } from "@/lib/models/auth.model";
import Event from "@/lib/models/event.model";
import { EventInterfaceType } from "@/lib/types";
import { revalidatePath } from "next/cache";

export const addEventServerAction = async (eventData: EventInterfaceType) => {
  try {
    // Ensure schedule has start and end dates
    if (!eventData.schedule.start || !eventData.schedule.end) {
      return {
        ststus: 404,
        message: "Schedule must have both start and end dates",
      };
    }

    // check if user adding the event exist
    // and that the user is authorized to add events
    // const user = await User.findById(eventData.createdBy).populate("role");
    // console.log(user);

    // if (!user || user.role.permissions.manage_events.level === "off") {
    //   return {
    //     status: 403,
    //     message: "User not authorized to add events",
    //   };
    // }

    // Ensure start date is before end date
    if (
      new Date(eventData.schedule.start) >= new Date(eventData.schedule.end)
    ) {
      return {
        status: 403,
        message: "Start date must be before the end date",
      };
    }

    // Ensure registration deadline is before the event start date
    if (
      new Date(eventData.registrationDeadline) >=
      new Date(eventData.schedule.start)
    ) {
      return {
        status: 403,
        message: "Registration deadline must be before the event start date",
      };
    }

    // Ensure maxParticipants is a positive number
    if (
      eventData.maxParticipants !== undefined &&
      typeof eventData.maxParticipants === "number" &&
      eventData.maxParticipants <= 0
    ) {
      return {
        status: 403,
        message: "Max participants must be greater than zero",
      };
    }

    // Create and save the event
    revalidatePath("/event");

    const newEvent = new Event(eventData);
    await newEvent.save();

    return {
      status: 200,
      message: "Event created statusfully",
      // event: newEvent,
    };
  } catch (error) {
    console.error("Error creating event:", error);
    return {
      status: 500,
      message: "Failed to create event",
    };
  }
};
