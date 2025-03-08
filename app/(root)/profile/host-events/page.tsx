import EventCards from "@/components/HostEvents/EventCards";
import Sponsors from "@/components/HostEvents/Sponsors";
import React from "react";

const page = () => {
  return (
    <div className=" px-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2 md:border-r">
          {/* image listing */}
          <EventCards />
        </div>

        <div className="col-span-1">
          {/* top sponsors and  categories */}
          <Sponsors />
        </div>
      </div>
    </div>
  );
};

export default page;
