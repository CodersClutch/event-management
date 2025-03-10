import EventCards from "@/components/HostEvents/EventCards";
import { categories2 } from "@/constants";
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
          {/* categories */}
          <div className="py-6 px-8 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-800 uppercase mb-4">
                Categories
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories2.map((category, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 hover:bg-yellow-300 hover:text-gray-900 transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
