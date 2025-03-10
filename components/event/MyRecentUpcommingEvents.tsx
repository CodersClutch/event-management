import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Timer } from "lucide-react";
import { Label } from "../ui/label";
import CountDown from "../common/CountDown";
import { StatiEventByUser } from "@/lib/actions/event/GetAllEvent";
import { EventInterfaceType } from "@/lib/types";
import Link from "next/link";

const MyRecentUpcomingEvents = async () => {
  const response = await StatiEventByUser("upcoming", 6);

  if (
    response.status !== 200 ||
    !Array.isArray(response.data?.completedEvents)
  ) {
    console.error("Failed to fetch events", response);
    return (
      <div className="text-center text-gray-500 py-4">
        Failed to load events.
      </div>
    );
  }

  const data: EventInterfaceType[] = response.data.completedEvents || [];

  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <Timer className="w-5 h-5 text-yellow-600" />
          <CardTitle className="text-2xl">Upcoming Deadlines</CardTitle>
          <Button variant={"link"}>View all</Button>
        </CardHeader>
        <Separator />

        <CardContent>
          {data.length > 0 ? (
            data.map((item: EventInterfaceType) => (
              <Link
                href={`/dashboard/event/${item._id}`}
                key={item._id}
                className="-mx-1 flex justify-between items-start space-x-4 rounded-md p-3 transition-all hover:bg-accent bg-accent/50 hover:text-accent-foreground mt-3"
              >
                <div className="flex md:flex-row flex-col">
                  <div className="pr-2">
                    <p className="font-semibold text-sm">{item?.title}</p>
                    <p className="font-semibold text-sm text-muted-foreground">
                      Attendees: {item?.registeredUsers?.length}
                    </p>
                  </div>
                  <div>
                    <Label className="text-sm font-thin mr-2">Time Left</Label>
                    <CountDown
                      registrationDeadline={item.registrationDeadline}
                      status={
                        item.status as
                          | "upcoming"
                          | "ongoing"
                          | "completed"
                          | "cancelled"
                      }
                      eventStart={item.schedule.start}
                    />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center text-gray-500 py-4">
              No upcoming events found.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MyRecentUpcomingEvents;
