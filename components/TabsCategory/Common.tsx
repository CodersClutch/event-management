"use client";

import Image from "next/image";
import { Bookmark } from "lucide-react";
import Link from "next/link";
import { EventInterfaceType } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import TicketDrawer from "../event/TicketDrawer";


const Common = ({ events }: { events: EventInterfaceType[] }) => {
  return (
    <>
      <div className="bg-transparent max-w-7xl mx-auto p-4 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((event, idx) => (
            <div
              key={event._id}
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

              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                <Bookmark className="h-5 w-5 text-gray-600" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-white m-2 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold truncate">{event?.title}</h3>
                <p className="text-gray-500 font-medium text-sm">
                  {formatDate(event?.schedule?.start)}
                </p>
                <p className="text-gray-500 font-medium text-sm truncate">
                  {event?.location}
                </p>
                <div className="flex justify-between items-center bg-blue-200 rounded-lg p-4 mt-4">
                  <span className="text-[#D942D6] font-bold">
                    ${event.price}
                  </span>
                  <TicketDrawer />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Common;
