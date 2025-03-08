"use client";

import { useState } from "react";

import AllEvents from "../TabsCategory/AllEvents";
import OnlineEvents from "../TabsCategory/OnlineEvents";
import ForYouEvents from "../TabsCategory/ForYouEvents";
import TodayEvents from "../TabsCategory/TodayEvents";
import WeekendEvents from "../TabsCategory/WeekendEvents";
import VisualArt from "../TabsCategory/VisualArt";
import Food from "../TabsCategory/Food";
import Fitness from "../TabsCategory/Fitness";

const tabNames = [
  "All",
  "Activities & Attraction",
  "Classes & Workshops",
  "Birthday & Party Venues",
  "Special Deals & Discounts",
  "Food & Drink",
  "Performing & Visual Arts",
  "Sports & Fitness",
] as const;
type TabName = (typeof tabNames)[number];

const tabComponents: Record<TabName, React.FC> = {
  All: AllEvents,
  "Activities & Attraction": ForYouEvents,
  "Classes & Workshops": OnlineEvents,
  "Birthday & Party Venues": TodayEvents,
  "Special Deals & Discounts": WeekendEvents,
  "Food & Drink": Food,
  "Performing & Visual Arts": VisualArt,
  "Sports & Fitness": Fitness,
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<TabName>("All");
  const ActiveComponent = tabComponents[activeTab];

  return (
    <div className="w-full border-b mt-[70px]">
      <h2 className="text-4xl max-w-7xl md:mx-[130px]  font-semibold mb-4">
        Browse Activities
      </h2>

      <div className="flex space-x-4 overflow-x-auto p-2 max-w-7xl mx-auto">
        {tabNames.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-[16px] font-medium whitespace-nowrap pb-2 ${
              activeTab === tab
                ? "text-[#D942D6] border-b-2 border-[#D942D6] font-semibold"
                : "text-gray-600 hover:border-b-2 hover:border-black "
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4 text-gray-700">
        <ActiveComponent />
      </div>
    </div>
  );
}
