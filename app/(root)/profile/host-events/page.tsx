import EventCards from "@/components/HostEvents/EventCards";
import Sponsors from "@/components/HostEvents/Sponsors";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 xl:grid-cols-3">
        <div className="col-span-2 xl:border-r">
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
