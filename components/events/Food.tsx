import React from "react";
import { eventsAll } from "@/constants";
import Common from "./Common";

const Food = () => {
  return (
    <div>
      <Common events={eventsAll} />
    </div>
  );
};

export default Food;
