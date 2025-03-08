import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ClipboardCheck } from "lucide-react";
import { StatiEventByUser } from "@/lib/actions/event/GetAllEvent";
import { EventInterfaceType } from "@/lib/types";
import Link from "next/link";
import { Badge } from "../ui/badge";

const MyRecentCompletedEvents = async () => {
  const response = await StatiEventByUser("completed", 4);
  const data: EventInterfaceType[] = response?.data?.completedEvents || [];

  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <ClipboardCheck className="w-5 h-5 text-green-600" />
          <CardTitle className="text-2xl">Recently Completed Events</CardTitle>
          <Button className="text-green-600" variant={"link"}>
            View all
          </Button>
        </CardHeader>
        <Separator />
        <CardContent>
          {data.length > 0 ? (
            data.map((item: EventInterfaceType) => (
              <Link
                href={`dashboard/event/${item._id}`}
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
                </div>
                <Badge
                  className={
                    item.status === "cancelled"
                      ? "bg-red-600"
                      : item.status === "upcoming"
                      ? "bg-yellow-600"
                      : item.status === "ongoing"
                      ? "bg-lime-500"
                      : "bg-green-600"
                  }
                >
                  {item.status}
                </Badge>
              </Link>
            ))
          ) : (
            <div className="text-center text-gray-500 py-4">
              No completed events found.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MyRecentCompletedEvents;
