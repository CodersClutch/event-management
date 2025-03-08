"use client"
import React, { useState } from "react";
import Image from "next/image";
import { eventList } from "@/constants";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const MyTickets = () => {
  const [scanResult, setScanResult] = useState(""); // State to store the scanned result

  return (
    <div className="min-h-screen py-8 px-4 sm:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#18212C]">My Tickets</h1>
      </div>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {eventList.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Top row: Author profile, name, and time below */}
            <div className="p-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="relative w-9 h-9 rounded-full overflow-hidden">
                  <Image
                    src={event.profileImage || "/default-profile.png"} // Fallback image
                    alt={`${event.author}'s profile`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#18212C] text-[1rem]">
                    By {event.author}
                  </span>
                  <span className="block text-[.95rem]">{event.time}</span>
                </div>
              </div>
            </div>

            {/* Card Image with Event Name Overlay */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative w-full h-52 overflow-hidden group cursor-pointer">
                  <Image
                    src={event.eventImage || "/default-event.png"} // Fallback image
                    alt={event.eventName}
                    fill
                    className="object-cover cursor-pointer transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 pl-5 pb-4 w-full text-white text-lg font-semibold p-2 text-left bg-gradient-to-t from-black/70 to-transparent">
                    {event.eventName}
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[25%] p-0 rounded-lg overflow-hidden">
                {/* Event Image */}
                <div className="relative w-full h-52">
                  <Image
                    src={event.eventImage || "/default-event.png"} // Fallback image
                    alt={event.eventName}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h2 className="text-2xl font-bold text-white">
                      {event.eventName}
                    </h2>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#18212C] mb-4">
                    Event Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="font-medium text-[#18212C] w-24">
                        Date:
                      </span>
                      <span className="text-[#84759E]">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-[#18212C] w-24">
                        Location:
                      </span>
                      <span className="text-[#84759E]">{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-[#18212C] w-24">
                        Tickets:
                      </span>
                      <span className="text-[#84759E]">{event.tickets}</span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            

            {/* Card Content */}
            <div className="py-4">
              {/* Date, Location, Tickets in a single row */}
              <div className="grid grid-cols-3 gap-2 mb-2 px-4 mt-1">
                <div className="flex flex-col space-y-2">
                  <span className="font-semibold text-[#18212C] text-[1.08rem]">
                    Date
                  </span>
                  <span className="text-[.9rem] text-[#84759E]">
                    {event.date}
                  </span>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="font-semibold text-[#18212C] text-[1.08rem]">
                    Location
                  </span>
                  <span className="text-[.9rem] text-[#84759E]">
                    {event.location}
                  </span>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="font-semibold text-[#18212C] text-[1.08rem]">
                    Tickets
                  </span>
                  <span className="text-[.9rem] text-[#84759E]">
                    {event.tickets}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTickets;