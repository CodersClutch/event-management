import React from "react";
import Common from "./Common";
import { BiSad } from "react-icons/bi";
import { events } from "@/constants/events";

const Food = () => {
  const filteredEvents = events.filter((event) =>
    event.category.includes("food and drink")
  );

  return (
    <div className="max-w-7xl mx-auto p-6 text-center">
      {filteredEvents.length < 0 ? (
        <Common events={[]} />
      ) : (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-10 rounded-xl shadow-lg">
          <BiSad className="text-gray-400 text-6xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700">
            No food and drink events found
          </h2>
          <p className="text-gray-500 mt-2">
            Check back later or explore other categories!
          </p>
        </div>
      )}
    </div>
  );
};

export default Food;
