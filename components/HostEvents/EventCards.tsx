import React from "react";
import Image from "next/image";
import { Share, BarChart } from "lucide-react";
import { eventList } from "@/constants";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
            <div className="p-4 text-sm text-gray-500">
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
                      <button className="bg-red-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm md:text-base">
                        CREATE
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
                            By {event.author}
                          </span>
                          <p className="text-xs md:text-sm text-gray-500">
                            {event.time}
                          </p>
                        </div>
                        <button className="ml-auto text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-sm md:text-[1.06rem] text-gray-500 mb-3 md:mb-4">
                        Sed egestas mauris sit amet orci dignissim, vel
                        pulvinar nisi faucibus. Duis gravida sem eu magna
                        ornare, quis elementum lacus accumsan.
                      </p>
                    </div>

                    <div className="px-4 md:px-6 py-2 md:py-3 border-b grid grid-cols-3 gap-2">
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

                    <div className="flex items-center px-4 md:px-6 py-2 md:py-4 border-b bg-[#F9F9F9]">
                      <span className="text-base md:text-lg font-semibold mr-2">
                        Sponsor by
                      </span>
                      <div className="flex gap-1 overflow-x-auto">
                        {event.sponsors.map((src, index) => (
                          <div
                            key={index}
                            className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shrink-0"
                          >
                            <Image
                              src={src}
                              alt={`Sponsor ${index + 1}`}
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                        ))}
                      </div>
                      <span className="ml-auto text-[#E63632] text-sm md:text-base px-2 py-1">
                      {event.price}
                      </span>
                    </div>

                    <div className="flex flex-wrap justify-between px-4 md:px-6 py-3 md:py-4 items-center gap-2">
                      <div className="flex items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 fill-current text-gray-400 hover:text-red-500"
                          viewBox="0 0 20 20"
                        >
                          <path d="M3.172 5.172a4.004 4.004 0 015.656 0L10 6.343l1.172-1.171a4.004 4.004 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                        <span>126</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 fill-current text-gray-400 hover:text-blue-500"
                          viewBox="0 0 20 20"
                        >
                          <path d="M18 10c0 3.866-3.582 7-8 7-1.15 0-2.256-.216-3.253-.6L3.814 17l1.125-2.996C4.342 13.089 4 11.58 4 10c0-3.866 3.134-7 7-7s7 3.134 7 7z" />
                        </svg>
                        <span>03</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share className="h-5 w-5 fill-current text-gray-400 hover:text-blue-500" />
                      </div>
                      <button className="flex items-center space-x-1 hover:text-gray-700">
                        <BarChart className="h-5 w-5 fill-current text-gray-400 hover:text-blue-500" />
                        <span className="text-sm md:text-base">Insights</span>
                      </button>
                    </div>

                    <div className="container overflow-y-auto">
                      <div className="border-b px-4 md:px-6">
                        <div className="flex items-center mb-3 md:mb-4">
                          <Image
                            src="https://tyovent-html.tortoizthemes.com/tyovent/assets/images/modal/author1.png"
                            alt="John Doe"
                            width={40}
                            height={40}
                            className="rounded-full mr-3"
                          />
                          <div>
                            <span className="text-base md:text-[1.08rem] font-semibold">
                              By John Doe
                            </span>
                            <p className="text-xs md:text-sm text-gray-500">5 min ago</p>
                          </div>
                          <button className="ml-auto text-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                          Integer id elementum tortor. Mauris quis. I don&apos;t know what this means.
                        </p>
                      </div>
                      <div className="border-b px-4 md:px-6 pt-2 md:pt-3">
                        <div className="flex items-center mb-3 md:mb-4">
                          <Image
                            src="https://tyovent-html.tortoizthemes.com/tyovent/assets/images/modal/author1.png"
                            alt="John Doe"
                            width={40}
                            height={40}
                            className="rounded-full mr-3"
                          />
                          <div>
                            <span className="text-base md:text-[1.08rem] font-semibold">
                              By John Doe
                            </span>
                            <p className="text-xs md:text-sm text-gray-500">5 min ago</p>
                          </div>
                          <button className="ml-auto text-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                          I don&apos;t know what this means. Integer id elementum tortor. Mauris quis.
                        </p>
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
                  <span className="text-[#212529] text-[1.08rem] font-semibold">
                    Sponsor by
                  </span>
                  <div className="flex">
                    {event.sponsors.map((src, index) => (
                      <div
                        key={index}
                        className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden first:ml-0"
                      >
                        <Image
                          src={src}
                          alt={`Sponsor ${index + 1}`}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[#E63632] text-[1.04rem] ">{event.price}</p>
              </div>
            </div>

            {/* Footer: Likes, Comments, Insights */}
            <div className="px-4 py-3 mt-1 mb-2 flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-current text-gray-400 hover:text-red-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M3.172 5.172a4.004 4.004 0 015.656 0L10 6.343l1.172-1.171a4.004 4.004 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                <span className="text-[.9rem] text-gray-800">{event.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-current text-gray-400 hover:text-blue-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 10c0 3.866-3.582 7-8 7-1.15 0-2.256-.216-3.253-.6L3.814 17l1.125-2.996C4.342 13.089 4 11.58 4 10c0-3.866 3.134-7 7-7s7 3.134 7 7z" />
                </svg>
                <span className="text-[.9rem] text-gray-800">{event.comments}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Share className="h-5 w-5 fill-current text-gray-400 hover:text-blue-500" />
              </div>
              <button className="flex flex-row hover:text-gray-700">
                <BarChart className="h-4 w-4 fill-current text-gray-400 text-[.9rem]  hover:text-blue-500" />
                <span className="text-gray-800"> Insights</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCards;
