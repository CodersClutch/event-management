import React from "react";
import Image from "next/image";
import { BarChart, Pencil, Share2, Heart, AlarmClockCheck, Ticket } from "lucide-react";
import { eventList } from "@/constants";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

const EventCards = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-8">
        {eventList.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg border border-gray-100 shadow-md overflow-hidden w-full lg:w-[370px] mx-auto"
          >
            {/* Top row: Author profile, name, and time below */}
            <div className="p-4 flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="relative w-9 h-9 rounded-full overflow-hidden">
                  <Image
                    src={event.profileImage}
                    alt="User Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#18212C] text-[1rem]">
                    By You
                  </span>
                  <span className="block text-[.95rem]">{event.time}</span>
                </div>
              </div>
              <div>
                <Link href="#" >
                  <Pencil className="w-[20px] h-[20px] hover:text-[#FCC628] transition-all duration-500 ease-in-out" />
                </Link>
              </div>
            </div>

            {/* Card Image with Event Name Overlay */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative w-full h-52 overflow-hidden group cursor-pointer">
                  <Image
                    src={event.eventImage}
                    alt={event.eventName}
                    fill
                    className="object-cover cursor-pointer transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 pl-5 pb-4 w-full text-white text-lg font-semibold p-2 text-left">
                    {event.eventName}
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="w-[95%] sm:max-w-[90%] lg:max-w-[72%] p-0 max-h-[90vh] overflow-y-auto">
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="w-full lg:w-3/5 relative h-64 lg:h-[660px]">
                    <Image
                      src={event.eventImage}
                      alt="Music Awards"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent flex justify-between items-center">
                      <span className="text-white text-lg md:text-xl font-semibold">
                        {event.eventName}
                      </span>
                      <button className="bg-yellow-300 text-[#631B72] px-3  md:px-4  rounded-xl py-1 text-sm md:text-base">
                        {event.category}
                      </button>
                    </div>
                  </div>

                  <div className="w-full lg:w-2/5 flex flex-col">
                    <div className="px-4 md:px-6 pt-4 md:pt-6 border-b">
                      <div className="flex items-center mb-3 md:mb-4">
                        <Image
                          src={event.profileImage}
                          alt="John Doe"
                          width={40}
                          height={40}
                          className="rounded-full mr-3"
                        />
                        <div>
                          <span className="text-base md:text-[1.08rem] font-semibold text-[#050305]">
                            By You
                          </span>
                          <p className="text-xs md:text-sm text-gray-500">
                            {event.time}
                          </p>
                        </div>
                        <button className="ml-auto text-gray-500">
                          <Link href="#" >
                            <Pencil className="w-[20px] h-[20px]" />
                          </Link>
                        </button>
                      </div>
                      <p className="text-sm md:text-[1.06rem] text-gray-500 mb-3 md:mb-4">
                        {event.description}
                      </p>
                    </div>

                    <div className="px-4 md:px-6 py-2 md:py-4 border-b grid grid-cols-3 gap-2">
                      <div>
                        <span className="text-base md:text-lg text-[#050305] font-semibold">
                          Date
                        </span>
                        <p className="text-xs md:text-sm text-gray-500">{event.date}</p>
                      </div>
                      <div>
                        <span className="text-base md:text-lg text-[#050305] font-semibold">
                          Location
                        </span>
                        <p className="text-xs md:text-sm text-gray-500">
                          {event.location}
                        </p>
                      </div>
                      <div>
                        <span className="text-base md:text-lg text-[#050305] font-semibold">
                          Tickets
                        </span>
                        <p className="text-xs md:text-sm text-gray-500">
                          {event.tickets}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between px-4 md:px-6 py-2 md:py-5 border-b bg-[#F9F9F9]">
                      <div className="flex flex-row items-center justify-center gap-3">
                        <AlarmClockCheck className="w-5 h-5 text-gray-800 cursor-pointer hover:text-[#FCC628] transition-all duration-500 ease-in-out" />
                        <div className="flex">
                          <span className="text-[#E63632]">{event.eventTime}</span>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center gap-3">
                        <Ticket className="w-5 h-5 text-gray-800 cursor-pointer hover:text-[#FCC628] transition-all duration-500 ease-in-out" />
                        <div className="flex">
                          <p className="text-[#E63632] text-[1rem] ">{event.price}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-between px-4 md:px-6 py-3 md:py-6 items-center gap-2">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-5 w-5  cursor-pointer text-gray-800 hover:text-[#FCC628] transition-all duration-500 ease-in-out" />
                        <span className="text-[.9rem] text-gray-800">{event.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share2 className="h-5 w-5 cursor-pointer text-gray-800 hover:text-[#FCC628] transition-all duration-500 ease-in-out" />
                      </div>
                    </div>

                    <div className="container overflow-y-auto bg-[#F9F9F9] px-4 md:px-6 py-7">
                      {/* analytics of total tickets sold for the particular event */}
                      <div className="">
                        <div className="flex flex-col space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold text-[#18212C]">
                              Tickets Sold
                            </span>
                            <BarChart className="w-6 h-6 text-[#FCC628]" />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-[#050305]">
                              {event.ticketsSold}
                            </span>
                            <span className="text-sm md:text-base text-gray-500">
                              out of {event.totalTickets}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-[#FCC628] h-2.5 rounded-full"
                              style={{ width: `${(event.ticketsSold / event.totalTickets) * 100}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="flex flex-col space-y-4 mt-6">
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold text-[#18212C]">
                              Revenue Generated
                            </span>
                            <BarChart className="w-6 h-6 text-[#FCC628]" />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-[#050305]">
                              ${event.revenue.toLocaleString()}
                            </span>
                            <span className="text-sm md:text-base text-gray-500">
                              from ticket sales
                            </span>
                          </div>
                        </div>
                      </div>
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
                  <span className="font-semibold text-[#18212C] text-[1.08rem]">Date</span>
                  <span className="text-[.9rem] text-[#84759E]">{event.date}</span>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="font-semibold text-[#18212C] text-[1.08rem]">Location</span>
                  <span className="text-[.9rem] text-[#84759E]">
                    {event.location}
                  </span>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="font-semibold text-[#18212C] text-[1.08rem]">Tickets</span>
                  <span className="text-[.9rem] text-[#84759E]">
                    {event.tickets}
                  </span>
                </div>
              </div>

              {/* Sponsor */}
              <div className="flex items-center justify-between mt-5 text-sm bg-[#F9F9F9] px-4 py-4">
                <div className="flex flex-row items-center justify-center gap-3">
                  <AlarmClockCheck className="w-5 h-5 text-gray-800 cursor-pointer hover:text-[#FCC628] transition-all duration-500 ease-in-out" />
                  <div className="flex">
                    <span className="text-[#E63632]">{event.eventTime}</span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-3">
                  <Ticket className="w-5 h-5 text-gray-800 cursor-pointer hover:text-[#FCC628] transition-all duration-500 ease-in-out" />
                  <div className="flex">
                    <p className="text-[#E63632] text-[1rem] ">{event.price}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer: Likes, Comments, Insights */}
            <div className="px-4 py-3 mt-1 mb-2 flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Heart className="h-5 w-5  cursor-pointer text-gray-800 hover:text-[#FCC628] transition-all duration-500 ease-in-out" />
                <span className="text-[.9rem] text-gray-800">{event.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Share2 className="h-5 w-5 cursor-pointer text-gray-800 hover:text-[#FCC628] transition-all duration-500 ease-in-out" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCards;
