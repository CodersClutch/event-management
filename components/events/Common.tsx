"use client";

import Image from "next/image";
import { Bookmark } from "lucide-react";

interface Event {
  image: string;
  title: string;
  date: string;
  location: string;
}

const Common = ({ events }: { events: Event[] }) => {
  return (
    <>
      <div className="bg-white max-w-7xl mx-auto p-4 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="relative w-72 hover:shadow-2xl rounded-2xl overflow-hidden shadow-lg border"
            >
              <div className="relative w-full h-96">
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                <Bookmark className="h-5 w-5 text-gray-600" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-white m-2 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold truncate">{event.title}</h3>
                <p className="text-gray-500 font-medium text-sm">{event.date}</p>
                <p className="text-gray-500 font-medium text-sm truncate">
                  {event.location}
                </p>
                <div className="flex justify-between items-center bg-blue-200 rounded-lg p-4 mt-4">
                  <span className="text-[#D942D6] font-bold">Free</span>
                  <button className="text-[#D942D6] font-bold border-l-2 pl-2 border-[#D942D6]">
                    Buy Now
                  </button>
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
