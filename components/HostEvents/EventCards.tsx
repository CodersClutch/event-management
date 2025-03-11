import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getEventsByUserId } from "@/lib/actions/event/GetAllEvent";
import { formatDate } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
const EventCards = async () => {
  // Fetch events from the server
  const response = await getEventsByUserId();

  if (!response || response.status !== 200) {
    return <p className="text-center py-10 text-gray-500">No events found.</p>;
  }

  const events = response.data;

  return (
    <div className="min-h-screen py-8">
      <div className="bg-transparent max-w-7xl mx-auto p-4 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {events?.map((event) => (
            <Link
              href={`/events/${event._id}`}
              key={event?._id}
              className="relative w-72 hover:shadow-2xl rounded-2xl overflow-hidden shadow-lg border"
            >
              <div className="relative w-full h-96">
                <Image
                  src={
                    event?.image ||
                    "https://img.freepik.com/free-psd/kitschy-colors-youtube-cover-template_23-2150544102.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid"
                  }
                  alt={event?.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                <Bookmark className="h-5 w-5 text-gray-600" />
              </button> */}
              <div className="absolute bottom-0 left-0 right-0 bg-white m-2 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold truncate">{event?.title}</h3>
                <p className="text-gray-500 font-medium text-sm">
                  {formatDate(event?.createdAt)}
                </p>
                <p className="text-gray-500 font-medium text-sm truncate">
                  {event?.location}
                </p>
                <div className="flex justify-between items-center bg-blue-200 rounded-lg p-4 mt-4">
                  <span className="text-[#D942D6] font-bold">Edit</span>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant={"destructive"}>Delete Event</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCards;
