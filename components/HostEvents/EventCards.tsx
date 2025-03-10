import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Share2,
  Pencil,
  Heart,
  AlarmClockCheck,
  Ticket,
  BarChart,
} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getEventsByUserId } from "@/lib/actions/event/GetAllEvent";

const EventCards = async () => {
  // Fetch events from the server
  const response = await getEventsByUserId();

  if (!response || response.status !== 200) {
    return <p className="text-center py-10 text-gray-500">No events found.</p>;
  }

  const events = response.data;

  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-8">
        {events?.map((event: any) => (
          <div
            key={event?._id}
            className="bg-white rounded-lg border border-gray-100 shadow-md overflow-hidden w-full lg:w-[370px] mx-auto"
          >
            {/* Top Section: Author Info */}
            <div className="p-4 flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="relative w-9 h-9 rounded-full overflow-hidden">
                  <Image
                    src="https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-main.jpg" // Replace with actual user profile image
                    alt="User Profile"
                    width={36}
                    height={36}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#18212C] text-[1rem]">
                    By You
                  </span>
                  <span className="block text-[.95rem]">
                    {new Date(event?.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <Link href="#">
                <Pencil className="w-[20px] h-[20px] hover:text-[#FCC628] transition-all duration-500 ease-in-out" />
              </Link>
            </div>

            {/* Event Image */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative w-full h-52 overflow-hidden group cursor-pointer">
                  <Image
                    src="https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-main.jpg" // Replace with event image URL if available
                    alt={event?.title}
                    fill
                    className="object-cover cursor-pointer transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 pl-5 pb-4 w-full text-white text-lg font-semibold p-2 text-left">
                    {event?.title}
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="w-[95%] sm:max-w-[90%] lg:max-w-[72%] p-0 max-h-[90vh] overflow-y-auto">
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Event Details */}
                  <div className="w-full lg:w-3/5 relative h-64 lg:h-[660px]">
                    <Image
                      src="https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-main.jpg"
                      alt={event?.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent flex justify-between items-center">
                      <span className="text-white text-lg md:text-xl font-semibold">
                        {event?.title}
                      </span>
                      <button className="bg-red-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm md:text-base">
                        CREATE
                      </button>
                    </div>
                  </div>

                  {/* Additional Event Info */}
                  <div className="w-full lg:w-2/5 flex flex-col p-4">
                    <h3 className="text-lg font-semibold">{event?.title}</h3>
                    <p className="text-sm text-gray-500">
                      {event?.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Date:</strong>{" "}
                      {new Date(event?.schedule.start).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Location:</strong> {event?.location}
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Max Participants:</strong>{" "}
                      {event?.maxParticipants}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Event Details Below */}
            <div className="py-4 px-4">
              <div className="grid grid-cols-3 gap-2 mb-2">
                <div className="flex flex-col">
                  <span className="font-semibold text-[#18212C] text-[1.08rem]">
                    Date
                  </span>
                  <span className="text-[.9rem] text-[#84759E]">
                    {new Date(event?.schedule.start).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#18212C] text-[1.08rem]">
                    Location
                  </span>
                  <span className="text-[.9rem] text-[#84759E]">
                    {event?.location}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#18212C] text-[1.08rem]">
                    Tickets
                  </span>
                  <span className="text-[.9rem] text-[#84759E]">
                    {event?.maxParticipants}
                  </span>
                </div>
              </div>
            </div>

            {/* Footer: Likes and Share */}
            <div className="px-4 py-3 mt-1 mb-2 flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Heart className="h-5 w-5  cursor-pointer text-gray-800 hover:text-[#FCC628] transition-all duration-500 ease-in-out" />
                <span className="text-[.9rem] text-gray-800">0</span>
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
