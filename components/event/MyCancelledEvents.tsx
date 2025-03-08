import React from "react";
import StatsCard from "../StatsCard";
import { completedEventByUser } from "@/lib/actions/event/GetAllEvent";
import { StopCircle, Timer } from "lucide-react";

const MyCancelledEvents = async () => {
  const response = await completedEventByUser("cancell", 6);

  return (
    <div>
      <StatsCard
        icon={<StopCircle className="w-7 h-7 text-destructive" />}
        title={"Cancell Events"}
        value={response?.data?.completedEvents?.length ?? 0}
        percentage={"+20.1% from last month"}
      />
    </div>
  );
};

export default MyCancelledEvents;
