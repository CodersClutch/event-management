import { Online } from '@/constants'
import React from 'react'
import Image from "next/image";
import { BiDislike, BiLike, BiShare } from "react-icons/bi";

const OnlineEvents = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto p-4 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Online.map((event) => (
          <div
            key={event.id}
            className="group relative rounded-lg overflow-hidden"
          >
            {/* Image Container with Hover Effects */}
            <div className="relative aspect-video">
              <Image
                src={event.imageSrc}
                alt={`${event.title} Event Image`}
                fill
                className="object-cover"
              />

              {/* Age Badge */}
              <div className="absolute top-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {event.age}+
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
                <h3 className="text-[16px] font-semibold">{event.title}</h3>
              </div>
              <p className="text-[14px] text-gray-500 mb-1">{event.date}</p>
              <p className="text-[16px] font-semibold mb-2">{event.price}</p>
              <p className="text-[14px] text-gray-700 mb-1">
                {event.organizer}
              </p>
              <p className="text-[14px] text-gray-500">
                <span className="font-semibold text-black">
                  {event.likes}
                </span>{" "}
                likes
              </p>
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
  )
}

export default OnlineEvents
