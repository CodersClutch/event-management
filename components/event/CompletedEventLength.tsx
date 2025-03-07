import React from "react";
import StatsCard from "../StatsCard";
import { completedEventLength } from "@/lib/actions/event/GetAllEvent";
import { ClipboardCheck } from "lucide-react";

const CompletedEventLength = async () => {
  const upcomingEventsLength = await completedEventLength();
  return (
    <div>
      <StatsCard
        icon={<ClipboardCheck className="w-7 h-7 text-green-600" />}
        title={"Compleated Events"}
        value={upcomingEventsLength.completedEvent ?? 0}
        percentage={"+20.1% from last month"}
      />
    </div>
  );
};

export default CompletedEventLength;
