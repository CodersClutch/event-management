import EventCards from "@/components/HostEvents/EventCards";
import { categories2 } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div className="xl:border-r">
      {/* image listing */}
      <EventCards />
    </div>
  );
};

export default page;
