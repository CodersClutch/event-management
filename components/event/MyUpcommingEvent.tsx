import React from "react";
import StatsCard from "../StatsCard";
import { completedEventByUser } from "@/lib/actions/event/GetAllEvent";
import { Timer } from "lucide-react";

const MyUpcommingEvent = async () => {
  const response = await completedEventByUser("upcoming", 6);

  return (
    <div>
      <StatsCard
        icon={<Timer className="w-7 h-7 text-primary" />}
        title={"Upcomming Events"}
        value={response?.data?.completedEvents?.length ?? 0}
        percentage={"+20.1% from last month"}
      />
    </div>
  );
};

export default MyUpcommingEvent;
