"use client";

import Image from "next/image";
import { Bookmark } from "lucide-react";
import { eventsAll } from "@/constants";
import Common from "./Common";

const EventCard = () => {
  return (
    <>
      <Common events={eventsAll} />
    </>
  );
};

export default EventCard;
