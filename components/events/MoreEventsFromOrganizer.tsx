import React from "react";
import Image from "next/image";
import { BsHeartFill, BsShareFill } from "react-icons/bs";
import Link from "next/link";

interface Props {
  title: string;
  date: string;
  price: number;
  organizer: string;
  imageUrl: string;
}

const MoreEventsFromOrganizer = ({ events }: { events: Props[] }) => {
  return (
    <>
    <p className="text-2xl font-bold">More events from this organizer</p>
      <div className="grid grid-cols-1 max-w-2xl gap-10">
        {events.map((event, index) => (
          <Link href ='#'
            className="flex flex-row p-4 hover:border hover:shadow-md shadow-sm rounded-xl transition-all duration-500  justify-between"
            key={index}
          >
            <div className="flex flex-col space-y-2">
              <p className="text-lg font-medium text-gray-800">{event.title}</p>
              <p className="font-medium text-[#D942D6]">{event.date}</p>
              <p className="text-sm text-gray-400">Starts at ${event.price}</p>
              <p className="font-medium mt-2">{event.organizer}</p>
            </div>

            <div className="flex flex-col items-end space-y-5 ">
              <div className=" ">
                <Image
                  src={event.imageUrl}
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
