"use client";
import { CiHeart } from "react-icons/ci";
import { notFound } from "next/navigation";
import Image from "next/image";
import { allEvents, Event } from "@/lib/events";
import { FaCalendarAlt } from "react-icons/fa";
import { MdShare } from "react-icons/md";
import { BsBookmarksFill } from "react-icons/bs";
import { FaCalendarCheck } from "react-icons/fa6";
interface PageProps {
  params: {
    id: string;
  };
}

export default function EventPage({ params }: PageProps) {
  const event = allEvents.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  return (
    <>
      <div className="max-w-[1200px] mx-auto pt-[150px] pb-16">
        <div className="relative h-[400px] mb-8">
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
          <div className=" flex items-center justify-between">
            <p className="text-gray-900 text-lg font-medium">
              Tuesday, March 18
            </p>
            <div className=" flex space-x-3">
              <CiHeart className="text-2xl" />
              <MdShare className="text-2xl" />
            </div>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="space-y-14">
              {/* Title */}
              <h1 className="text-[40px] font-extrabold text-gray-900 leading-tight mt-2">
                Get Paid to Talk-Intro to Voice <br /> Overs- Live Online
                Workshop
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-lg mt-4 max-w-3xl">
                Want to learn how to make money using just your voice? Join our
                Live Online Workshop &quot;Get Paid to Talk-Intro to Voice
                Overs&quot;.
              </p>

              {/* Organizer Section */}
              <div className="flex items-center bg-gray-100 p-4 rounded-lg mt-6 w-96">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-2xl">V</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-lg">
                    By{" "}
                    <span className="text-[#D942D6]">Voice Coaches CVDG</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Ticket and Pricing */}
            <div className="flex flex-col items-end justify-end">
              <div className="bg-[#d942d678] p-1 rounded-t-xl font-medium">
                <p className="flex space-x-3 items-center justify-center">
                  <BsBookmarksFill /> 2 for 1 deal
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center w-64">
                <p className="text-2xl font-semibold">$15 - $30</p>
                <button className="mt-3 bg-[#D942D6] text-white px-10 py-2 rounded-lg hover:bg-red-700 w-full">
                  Get tickets
                </button>
              </div>
            </div>
          </div>

          {/* Date and Time */}
          <div className="border-t pt-6 mt-6">
            <h3 className="text-2xl font-semibold">Date and time</h3>
            <div className="flex items-center text-black font-medium mt-2 text-sm">
              <FaCalendarCheck className="mr-2" />
              <p>{event.date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
