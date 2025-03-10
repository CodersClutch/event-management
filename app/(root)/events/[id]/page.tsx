"use client";
import { CiHeart } from "react-icons/ci";
import { notFound } from "next/navigation";
import Image from "next/image";
// <<<<<<< feature/web-event
// import { allEvents } from "@/lib/events";
import { MdShare, MdTimerOff } from "react-icons/md";
import { BsBookmarksFill, BsPeople } from "react-icons/bs";
import { FaCalendarCheck } from "react-icons/fa6";
import { BsCollectionPlayFill } from "react-icons/bs";
import { BiChevronRight, BiCloset, BiX } from "react-icons/bi";
import { MdOutlineTimer } from "react-icons/md";
import { IoGlobeSharp } from "react-icons/io5";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import OrganizerCard from "@/components/TabsCategory/OrganizerCard";
import MoreEventsFromOrganizer from "@/components/TabsCategory/MoreEventsFromOrganizer";
import OtherEvents from "@/components/TabsCategory/OtherEvents";
import { Locate, MapPinCheck } from "lucide-react";
import { MdOutlineLocationOn, MdLocationCity } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { BiCurrentLocation } from "react-icons/bi";
import { events } from "@/constants/events";
interface PageProps {
  params: {
    id: string;
  };
}

const EventPage = () => {
  const event = events.find((e) => e.id === "AAE-001");

  if (!event) {
    notFound();
  }

  return (
    <>
      <div className="max-w-[1200px] mx-auto pt-20 md:pt-[150px] pb-16 px-4 md:px-6">
        <div className="relative h-[300px] md:h-[400px] mb-8">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="mx-auto font-sans">
          {/* Date */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
            <p className="text-gray-900 text-lg font-medium mb-2 md:mb-0">
              Tuesday, March 18
            </p>
            <div className="flex space-x-3">
              <CiHeart className="text-2xl" />
              <MdShare className="text-2xl" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="space-y-8 md:space-y-14 w-full lg:w-auto">
              {/* Title */}
              <h1 className="text-3xl md:text-[40px] font-extrabold text-gray-900 leading-tight">
                Get Paid to Talk-Intro to Voice Overs- Live Online Workshop
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-base md:text-lg mt-2 md:mt-4 max-w-3xl">
                Want to learn how to make money using just your voice? Join our
                Live Online Workshop &quot;Get Paid to Talk-Intro to Voice
                Overs&quot;.
              </p>

              {/* Organizer Section */}
              <div className="flex items-center bg-gray-100 p-4 rounded-lg mt-4 md:mt-6 w-full md:w-96">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-2xl">V</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-base md:text-lg">
                    By <span className="text-[#D942D6]">{event.organizer}</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Ticket and Pricing */}
            <div className="lg:sticky lg:top-[150px] mt-8 lg:mt-0 w-full lg:w-64 self-start">
              <div className="flex flex-col items-end w-full transition-transform duration-300">
                <div className="bg-[#d942d678] p-1 rounded-t-xl font-medium w-full text-center">
                  <p className="flex space-x-3 items-center justify-center">
                    <BsBookmarksFill /> 2 for 1 deal
                  </p>
                </div>
                <div className="bg-gray-100 p-4 md:p-6 rounded-lg text-center w-full">
                  <p className="text-xl md:text-2xl font-semibold whitespace-nowrap">
                    Price Starts at ${event.price}
                  </p>
                  <button className="mt-3 bg-[#D942D6] text-white px-4 md:px-10 py-2 rounded-lg hover:bg-red-700 w-full">
                    Get tickets
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>

          {/* Date and Time */}
          <div className="border-t pt-6 mt-6 flex flex-col space-y-8 md:space-y-10">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Date and time
              </h3>
              <div className="flex items-center text-black font-medium mt-2 text-sm">
                <FaCalendarCheck className="mr-2" />
                <p>{event.date}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Location</h3>
              <div className="flex items-center text-black font-medium mt-2 text-sm">
                <MapPinCheck className="mr-2" />
                <p>{event.location}</p>
              </div>

              <div className="flex items-center text-black font-medium mt-2 text-sm">
                <BsCollectionPlayFill className="mr-2" />
                <p>{event.mode}</p>
              </div>
            </div>

            <div className="max-w-3xl w-full">
              <div className="flex flex-row items-center justify-between">
                <p className="text-xl md:text-2xl font-semibold">
                  Good to Know
                </p>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <span className="flex flex-row items-center justify-center">
                      View all <BiChevronRight />
                    </span>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="">
                    <AlertDialogHeader className="flex justify-end items-end">
                      <AlertDialogCancel>
                        <BiX />
                      </AlertDialogCancel>
                    </AlertDialogHeader>
                    <div className="space-y-9">
                      <div className="px-4 md:px-6">
                        <span className="text-base md:text-lg font-bold">
                          Highlights
                        </span>
                        <div className="flex flex-col space-y-2 px-2 pt-1">
                          <p className="flex text-gray-500 items-center justify-start">
                            <MdOutlineTimer className="mr-3 text-black" />
                            {event.duration}
                          </p>
                          <p className="flex text-gray-500 items-center justify-start">
                            <IoGlobeSharp className="mr-3 text-black" />
                            {event.mode}
                          </p>
                        </div>
                      </div>

                      <div className="px-4 md:px-6">
                        <span className="text-base md:text-lg font-bold">
                          Refund Policy
                        </span>
                        <p className="flex text-gray-500 items-center justify-start">
                          <MdOutlineTimer className="mr-3 text-black" />
                          {event.refundPolicy}
                        </p>
                      </div>
                      <div className=" p-4 md:p-6">
                        <span className="text-sm md:text-base font-bold">
                          Location
                        </span>
                        <div className="mt-2 text-gray-500 space-y-1">
                          <p className="flex items-center">
                            <MdOutlineLocationOn className="mr-2 text-black" />
                            <span>{event.geolocation?.address}</span>
                          </p>
                          <p className="flex items-center">
                            <MdLocationCity className="mr-2 text-black" />
                            <span>
                              {event.geolocation?.city},{" "}
                              {event.geolocation?.state}
                            </span>
                          </p>
                          <p className="flex items-center">
                            <FaGlobeAmericas className="mr-2 text-black" />
                            <span>{event.geolocation?.country}</span>
                          </p>
                          <p className="flex items-center text-sm text-gray-400">
                            <GiPositionMarker className="mr-2 text-black" />
                            <span>{event.geolocation?.coordinates}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>

              <div className="mt-8 md:mt-10 flex flex-col md:flex-row gap-4 md:gap-10">
                <div className="h-auto md:h-[250px] w-full md:w-[250px] shadow-xl rounded-xl p-4 md:p-6">
                  <span className="text-sm md:text-base font-bold">
                    Highlights
                  </span>
                  <div className="flex flex-col space-y-2 px-2 pt-1">
                    <p className="flex text-gray-500 items-center justify-start">
                      <MdOutlineTimer className="mr-3 text-black" />
                      {event.duration}
                    </p>
                    <p className="flex text-gray-500 items-center justify-start">
                      <IoGlobeSharp className="mr-3 text-black" />
                      {event.mode}
                    </p>
                    <p className="flex text-gray-500 whitespace-nowrap items-center justify-start">
                      <MdTimerOff className="mr-3 text-black" /> Deadline{"  "}
                      {event.registrationDeadline}
                    </p>
                    <p className="flex text-gray-500 items-center justify-start">
                      <BsPeople className="mr-3 text-black" /> Capacity{" "}
                      {event.capacity}
                    </p>
                  </div>
                </div>
                <div className="h-auto md:h-[250px] w-full md:w-[250px] shadow-xl rounded-xl p-4 md:p-6">
                  <span className="text-sm md:text-base font-bold">
                    Refund Policy
                  </span>
                  <p className="flex text-gray-500 items-center justify-start">
                    <MdOutlineTimer className="mr-3 text-black" />
                    {event.refundPolicy}
                  </p>
                </div>

                {/* Geolocation */}
                <div className="h-auto md:h-[250px] w-full md:w-[250px] shadow-xl rounded-xl p-4 md:p-6">
                  <span className="text-sm md:text-base font-bold">
                    Location
                  </span>
                  <div className="mt-2 text-gray-500 space-y-1">
                    <p className="flex items-center">
                      <MdOutlineLocationOn className="mr-2 text-black" />
                      <span>{event.geolocation?.address}</span>
                    </p>
                    <p className="flex items-center">
                      <MdLocationCity className="mr-2 text-black" />
                      <span>
                        {event.geolocation?.city}, {event.geolocation?.state}
                      </span>
                    </p>
                    <p className="flex items-center">
                      <FaGlobeAmericas className="mr-2 text-black" />
                      <span>{event.geolocation?.country}</span>
                    </p>
                    <p className="flex items-center text-sm text-gray-400">
                      <GiPositionMarker className="mr-2 text-black" />
                      <span>{event.geolocation?.coordinates}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* description section */}
            <div className="space-y-6 md:space-y-8">
              <p className="font-bold text-xl md:text-2xl">About this event</p>
              <p className="text-base md:text-lg font-medium">{event.title}</p>
              <p className="text-gray-500 max-w-3xl w-full">
                {event.description}
              </p>
            </div>

            <OrganizerCard organizer={event.organizer} />
            <MoreEventsFromOrganizer events={event.moreEvents} />
          </div>
        </div>
      </div>
      <OtherEvents />
    </>
  );
};

export default EventPage;
