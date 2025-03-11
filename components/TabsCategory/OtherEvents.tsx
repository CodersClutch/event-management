import React from "react";
import Common from "./Common";
import { eventsAll } from "@/constants";

const OtherEvents = () => {
  return (
    <div className="p-6 bg-[#F8F7FA]">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-2xl font-bold">Other Events You May Like</p>
        <Common events={eventsAll} />
      </div>
    </div>
  );
};

export default OtherEvents;
