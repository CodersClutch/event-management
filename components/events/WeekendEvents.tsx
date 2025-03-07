import { Weekend } from "@/constants";
import React from "react";
import Image from "next/image";
import { BiDislike, BiLike, BiShare } from "react-icons/bi";
type Event = {
  id: number;
  title: string;
  date: string;
  price: string;
  organizer: string;
  likes: string;
  imageSrc: string;
  promoted: boolean;
  age: string;
};
const WeekendEvents = () => {
  return (
    <div>
      {Weekend.length < 1 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-6">
            <svg
              className="w-32 h-32 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
              <path
                className="text-gray-400"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 11v1m0 0v1m0-1h-1m1 0h1"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No Events Found
          </h3>
          <p className="text-gray-500 max-w-md mb-4">
            It looks like there are no upcoming events in right now. Check back
            later or explore events in other tabs
          </p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Explore Nearby Events
          </button>
        </div>
      ) : (
        <div className="bg-white max-w-7xl mx-auto p-4 font-sans">
          <h2 className="text-2xl font-semibold mb-4">Events in North Bank</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Weekend.map((event: Event) => (
              <div
                key={event.id}
                className="group relative rounded-lg overflow-hidden"
              >
                {/* Image Container with Hover Effects */}
                <div className="relative aspect-video">
                  <Image
                    src={event?.imageSrc}
                    alt={`${event?.title} Event Image`}
                    fill
                    className="object-cover"
                  />

                  {/* Age Badge */}
                  <div className="absolute top-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {event?.age}+
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end pr-3 pb-3 justify-end gap-4">
                    <button className="text-black bg-white p-2  text-sm rounded-full  hover:scale-110 transition-transform">
                      <BiLike />
                    </button>
                    <button className="text-black bg-white p-2  text-sm rounded-full hover:scale-110 transition-transform">
                      <BiDislike />
                    </button>
                    <button className="text-black bg-white p-2  text-sm rounded-full hover:scale-110 transition-transform">
                      <BiShare />
                    </button>
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-[16px] font-semibold">
                      {event?.title}
                    </h3>
                  </div>
                  <p className="text-[14px] text-gray-500 mb-1">{event.date}</p>
                  <p className="text-[16px] font-semibold mb-2">
                    {event?.price}
                  </p>
                  <p className="text-[14px] text-gray-700 mb-1">
                    {event?.organizer}
                  </p>
                  {/* <p className="text-[14px] text-gray-500">
                    <span className="font-semibold text-black">
                      {event?.f}
                    </span>{" "}
                    followers
                  </p> */}
                  <div className="mt-2">
                    <p className="text-[14px] text-gray-500 font-semibold uppercase">
                      Promoted
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeekendEvents;
