import React from "react";
import Image from "next/image";
import { BsHeartFill, BsShareFill } from "react-icons/bs";
import Link from "next/link";
import { getEventsByUserId } from "@/lib/actions/event/GetAllEvent";
import { EventInterfaceType } from "@/lib/types";
import CountDown from "../common/CountDown";
import { formatReadableDate } from "@/lib/utils";
import { ListStart, Timer, Underline } from "lucide-react";

const MoreEventsFromOrganizer = async ({
  organizer,
}: {
  organizer: string;
}) => {
  const response = await getEventsByUserId(organizer);
  if (!response || response.status !== 200) {
    return <p className="text-center py-10 text-gray-500">No events found.</p>;
  }

  const events = response.data;
  return (
    <>
      <p className="text-2xl font-bold">More events from this organizer</p>
      <div className="grid grid-cols-1 max-w-2xl gap-10">
        {events?.map((event) => (
          <Link
            href="#"
            className="flex flex-row p-4 hover:border hover:shadow-md shadow-sm rounded-xl transition-all duration-500  justify-between"
            key={event?._id}
          >
            <div className="flex flex-col space-y-2">
              <p className="text-lg font-medium text-gray-800">
                {event?.title}
              </p>
              <div>
                <div className="flex items-center justify-between gap-10">
                  <div className="flex  md:flex-row md:items-center gap-2 mt-3">
                    <ListStart className="w-4 h-4 text-gray-500" />
                    <span className="font-medium">Start Date:</span>
                    {formatReadableDate(event?.schedule?.start)}
                  </div>
                  <div className="flex  md:flex-row md:items-center gap-2 mt-3 mr-10">
                    <ListStart className="w-4 h-4 text-gray-500" />
                    <span className="font-medium">End Date:</span>
                    {formatReadableDate(event?.schedule?.end)}
                  </div>
                </div>

                {/* Maximum Participants */}
                <div className="flex  md:flex-row md:items-center gap-2 mt-3">
                  <Underline className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">Max Participants:</span>
                  {event?.maxParticipants}
                </div>

                {/* Registration Deadline */}
                <div className="flex  md:flex-row md:items-center gap-2 mt-3">
                  <Timer className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">Registration Deadline:</span>
                  {formatReadableDate(event?.registrationDeadline)}
                </div>

                {/* Countdown Timer */}
                <div className="mt-3">
                  <CountDown
                    registrationDeadline={event?.registrationDeadline}
                    eventStart={event?.schedule?.start}
                    status={event?.status}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end space-y-5 ">
              <div className=" ">
                <Image
                  src={
                    event?.image ||
                    "https://img.freepik.com/free-psd/kitschy-colors-youtube-cover-template_23-2150544102.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid"
                  }
                  alt="poster card"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex flex-row space-x-4 justify-end items-end">
                <button>
                  <BsHeartFill />
                </button>
                <button>
                  <BsShareFill />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MoreEventsFromOrganizer;
