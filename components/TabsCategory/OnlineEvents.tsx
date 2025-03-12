import React from "react";
import Common from "./Common";
import { events } from "@/constants/events";
import { BiSad } from "react-icons/bi";

const OnlineEvents = () => {
  const allowedCategories = [
    "education",
    "STEM & coding",
    "academic",
    "tutoring",
  ];

  const filteredEvents = events.filter((event) =>
    event.category.some((cat) => allowedCategories.includes(cat))
  );

  return (
    <div className="max-w-7xl mx-auto p-6 text-center">
      {filteredEvents.length < 0 ? (
        <Common events={[]} />
      ) : (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-10 rounded-xl shadow-lg">
          <BiSad className="text-gray-400 text-6xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700">
            No events found in this category
          </h2>
          <p className="text-gray-500 mt-2">
            We&apos;re always updating our event list. Check back later for
            more!
          </p>
        </div>
      )}
    </div>
  );
};

export default OnlineEvents;
