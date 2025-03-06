'use client';

import { useState } from 'react';

import AllEvents from '../events/AllEvents';
import OnlineEvents from '../events/OnlineEvents';
import ForYouEvents from '../events/ForYouEvents';
import TodayEvents from '../events/TodayEvents';
import WeekendEvents from '../events/WeekendEvents';

const tabNames = ['All', 'For you', 'Online', 'Today', 'This weekend'] as const;
type TabName = (typeof tabNames)[number];

const tabComponents: Record<TabName, React.FC> = {
  'All': AllEvents,
  'For you': ForYouEvents,
  'Online': OnlineEvents,
  'Today': TodayEvents,
  'This weekend': WeekendEvents,
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<TabName>('All');
  const ActiveComponent = tabComponents[activeTab]; 

  return (
    <div className="w-full border-b mt-[70px]" >
            <h2 className="text-4xl max-w-7xl md:mx-[130px]  font-semibold mb-4">Browse Activities</h2>

      <div className="flex space-x-4 overflow-x-auto p-2 max-w-7xl mx-auto">
        {tabNames.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-[16px] font-medium whitespace-nowrap pb-2 ${
              activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600 font-semibold' : 'text-gray-600 hover:border-b-2 hover:border-black '
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
