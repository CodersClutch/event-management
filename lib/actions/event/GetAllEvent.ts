"use server";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import { User } from "@/lib/models/auth.model";
import Event from "@/lib/models/event.model";
import { EventInterfaceType } from "@/lib/types";
import { deepConvertToPlainObject } from "@/lib/utils";
import { PipelineStage } from "mongoose";

export const GetAllEvent = async ({
  query,
  page = 1,
  limit = 10,
}: {
  query?: string;
  page?: number;
  limit?: number;
}) => {
  try {
    const skip = (page - 1) * limit;

    const pipeline: PipelineStage[] = [
      //   {
      //     $match: {
      //       ...(startDate &&
      //         endDate && {
      //           "schedule.start": {
      //             $gte: new Date(startDate),
      //             $lte: new Date(endDate),
      //           },
      //         }),
      //     },
      //   },
      { $skip: skip },
      { $limit: limit },
      // sort by latest
      { $sort: { createdAt: -1 } },
      {
        $lookup: {
          from: "users",
          localField: "createdBy",
          foreignField: "_id",
          as: "creator",
          pipeline: [
            {
              $project: {
                firstName: 1,
                lastName: 1,
                email: 1,
              },
            },
          ],
        },
      },
      { $unwind: { path: "$creator", preserveNullAndEmptyArrays: true } },
      {
        $project: {
          title: 1,
          description: 1,
          location: 1,
          eventId: 1,
          schedule: 1,
          registrationDeadline: 1,
          maxParticipants: 1,
          registeredUsers: 1,
          waitlist: 1,
          status: 1,
          isPublished: 1,
          notifications: 1,
          createdAt: 1,
          "creator.firstName": 1,
          "creator.lastName": 1,
          "creator.email": 1,
        },
      },
    ];

    if (query) {
      pipeline.unshift({
        $search: {
          index: "event",
          text: {
            query,
            fuzzy: { maxEdits: 1, prefixLength: 3, maxExpansions: 50 },
            path: { wildcard: "*" },
          },
        },
      });
    }

    const EventData = await Event.aggregate(pipeline);
    const Events = deepConvertToPlainObject(EventData);
    const totalCount = await Event.countDocuments();

    return {
      status: 200,
      data: Events as unknown as EventInterfaceType,
      isPreviousPage: page > 1,
      isNextPage: totalCount > skip + EventData.length,
      totalCount,
    };
  } catch {
    return { status: 500, message: "Failed to get events" };
  }
};

// get single event by id
export const GetSingleEvent = async (eventId: string) => {
  try {
    const event = await Event.findById(eventId).populate({
      path: "createdBy",
      select: "firstName lastName email initial",
    });
    if (!event) {
      return { status: 404, message: "Event not found" };
    }
    return { status: 200, data: deepConvertToPlainObject(event) };
  } catch {
    return { status: 500, message: "Error getting event" };
  }
};

// know the total number of upcomming event
export const GetTotalUpcomingEvent = async () => {
  try {
    const total = await Event.countDocuments({ status: "upcoming" });
    return { status: 200, data: total };
  } catch {
    return { status: 500, message: "Error getting total upcoming event" };
  }
};

// get 5 lates upcomming event
export const GetLatestUpcomingEvent = async (
  status: string,
  length: number
) => {
  try {
    const events = await Event.find({ status: status })
      .sort({ createdAt: -1 })
      .limit(length);
    return { status: 200, data: deepConvertToPlainObject(events) };
  } catch {
    return { status: 500, message: "Error getting latest upcoming event" };
  }
};

// fetch the total number of ongoingEvent, upcominEvent and compleatedEvent
export const Eventstatus = async () => {
  try {
    const upcommingEventLength = await Event.countDocuments({
      status: "upcoming",
    });
    return { status: 200, upcommingEventLength: upcommingEventLength };
  } catch (error) {
    return { status: 500, message: "Error getting data" };
  }
};

// get the total number of ongoingEvent,
export const ongoingEventLength = async () => {
  try {
    const ongoingEvent = await Event.countDocuments({
      status: "ongoing",
      // $or: [{ registrationDeadline: { $gte: new Date() } }, { waitlist: { $ne: [] } }],
    });
    return { status: 200, ongoingEvent };
  } catch {
    return { status: 500, message: "Error getting data" };
  }
};

// get the total number of completed event
export const completedEventLength = async () => {
  try {
    const completedEvent = await Event.countDocuments({ status: "completed" });
    return { status: 200, completedEvent };
  } catch {
    return { status: 500, message: "Error getting data" };
  }
};

// get the total number of canceled event
export const canceledEventLength = async () => {
  try {
    const canceledEvent = await Event.countDocuments({ status: "canceled" });
    return { status: 200, canceledEvent };
  } catch {
    return { status: 500, message: "Error getting data" };
  }
};

// get the total number of upcoming event
export const upcomingEventLength = async () => {
  try {
    await connectDB();

    const upcomingEvent = await Event.countDocuments({ status: "upcoming" });
    return { status: 200, upcomingEvent };
  } catch {
    return { status: 500, message: "Error getting data" };
  }
};

// upcommingEvent by user id

// completedEvent by user id
export const completedEventByUser = async (status: string, limit: number) => {
  const session = await auth();

  try {
    await connectDB();

    // Find the user and populate all registered event details
    const user = await User.findById(session?.user._id).populate({
      path: "registeredEvents.eventId",
      model: "Event", // Ensure this matches your Event model name
    });

    if (!user) {
      return { status: 404, message: "User not found" };
    }

    if (!user.registeredEvents.length) {
      return {
        status: 200,
        data: { completedEvents: [], message: "No registered events" },
      };
    }

    // Filter only completed events from the user's registered events
    const completedEvents = user.registeredEvents
      .map((event: any) => event.eventId) // Extract event objects
      .filter((event: any) => event.status === status); // Keep only completed ones

    return {
      status: 200,
      data: {
        completedEvents,
      },
    };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Error getting data" };
  }
};

export const StatiEventByUser = async (status: string, limit: number) => {
  const session = await auth();

  try {
    await connectDB();

    // Find the user and populate all registered event details
    const user = await User.findById(session?.user._id).populate({
      path: "registeredEvents.eventId",
      model: "Event", // Ensure this matches your Event model name
    });

    if (!user) {
      return { status: 404, message: "User not found" };
    }

    if (!user.registeredEvents.length) {
      return {
        status: 200,
        data: { completedEvents: [], message: "No registered events" },
      };
    }

    // Filter only completed events from the user's registered events
    const completedEvents = user.registeredEvents
      .map((event: any) => event.eventId) // Extract event objects
      .filter((event: any) => event.status === status) // Keep only completed ones
      .slice(0, limit); // Get only the most recent 5

    return {
      status: 200,
      data: {
        completedEvents,
      },
    };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Error getting data" };
  }
};

// if i am login in as hosts fetch event i created else if am login as an Attendies fetch event i am register to

export const getEventsByUserId = async (organizer?: string) => {
  const session = await auth();

  try {
    const events = await Event.find({
      createdBy: session?.user._id || organizer,
    });
    // .limit(limit)
    // .sort({ createdAt: -1 }); // Sort by newest first

    if (!events) {
      return { status: 404, message: "No events found" };
    }

    // console.log(events.length);

    return { status: 200, data: deepConvertToPlainObject(events) };
  } catch (error) {
    console.error("Error fetching events:", error);
    return { status: 500, message: "Error getting data" };
  }
};

export const getEventsForProfileDashboard = async ({
  page = 1,
  limit = 10,
  organizer,
}: {
  page?: number;
  limit?: number;
  organizer?: string;
}) => {
  const session = await auth();

  try {
    const skip = (page - 1) * limit;

    const events = await Event.find({
      createdBy: session?.user._id || organizer,
    })
      .sort({ createdAt: -1 }) // Sorting by latest
      .skip(skip)
      .limit(limit)
      .lean(); // Converts Mongoose documents to plain objects

    const totalCount = await Event.countDocuments();

    if (!events) {
      return { status: 404, message: "No events found" };
    }

    // console.log(events.length);

    return {
      status: 200,
      data: deepConvertToPlainObject(events),
      isPreviousPage: page > 1,
      isNextPage: totalCount > skip + events.length,
      totalCount,
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    return { status: 500, message: "Error getting data" };
  }
};

export const GetAllEventForWeb = async ({
  // query,
  page = 1,
  limit = 10,
}: {
  // query?: string;
  page?: number;
  limit?: number;
}) => {
  try {
    const skip = (page - 1) * limit;

    // Build query object
    // const filter: any = {};
    // if (query) {
    //   filter.title = { $regex: query, $options: "i" }; // Case-insensitive search
    // }

    // Fetch events using find()
    const events = await Event.find({})
      .populate({
        path: "createdBy",
        select: "firstName lastName email",
        model: "User",
        options: { strictPopulate: false }, // Ensures no error if createdBy is missing
      })
      .sort({ createdAt: -1 }) // Sorting by latest
      .skip(skip)
      .limit(limit)
      .lean(); // Converts Mongoose documents to plain objects

    const totalCount = await Event.countDocuments();

    return {
      status: 200,
      data: deepConvertToPlainObject(events),
      isPreviousPage: page > 1,
      isNextPage: totalCount > skip + events.length,
      totalCount,
    };
  } catch (error) {
    return { status: 500, message: "Failed to get events" };
  }
};
