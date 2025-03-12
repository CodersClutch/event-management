import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getEventsByUserId } from "@/lib/actions/event/GetAllEvent";
import { formatDate } from "@/lib/utils";
import EditEvent from "../event/EditEvent";
import DeleteEvent from "../event/DeleteEvent";
import { auth } from "@/auth";
const EventCards = async () => {
  // Fetch events from the server
  const response = await getEventsByUserId();
  const session = await auth();

  if (!response || response.status !== 200) {
    return <p className="text-center py-10 text-gray-500">No events found.</p>;
  }

  const events = response.data;

  return (
    <div className=" py-8">
      <div className="mx-auto p-4 font-sans">
        <div className="flex items-center gap-5 flex-wrap">
          {events?.map((event, idx) => (
            <div
              key={idx}
              className="relative w-72 hover:shadow-2xl rounded-2xl overflow-hidden shadow-lg border"
            >
              <Link
                href={`/events/${event._id}`}
                className="relative w-full h-96 block"
              >
                <Image
                  src={
                    event?.image ||
                    "https://img.freepik.com/free-psd/kitschy-colors-youtube-cover-template_23-2150544102.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid"
                  }
                  alt={event?.title}
                  layout="fill"
                  objectFit="cover"
                />
              </Link>

              <div className="absolute bottom-0 left-0 right-0 bg-white m-2 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold truncate">{event?.title}</h3>
                <p className="text-gray-500 font-medium text-sm">
                  {formatDate(event?.createdAt)}
                </p>
                <p className="text-gray-500 font-medium text-sm truncate">
                  {event?.location}
                </p>

                {session?.user.role.name === "Hosts" ? (
                  <div className="flex justify-between items-center bg-blue-200 rounded-lg p-4 mt-4">
                    <EditEvent event={event} />
                    {/* Delete Button */}
                    <DeleteEvent event={event} />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCards;
