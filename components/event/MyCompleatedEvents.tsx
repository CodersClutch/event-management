import React from "react";
import StatsCard from "../StatsCard";
import { completedEventByUser } from "@/lib/actions/event/GetAllEvent";
import { Timer } from "lucide-react";

const MyCompleatedEvents = async () => {
  const response = await completedEventByUser("completed", 6);

  return (
    <div>
      <StatsCard
        icon={<Timer className="w-7 h-7 text-primary" />}
        title={"Compleated Events"}
        value={response?.data?.completedEvents?.length ?? 0}
        percentage={" from all time"}
      />
    </div>
  );
};

export default MyCompleatedEvents;
