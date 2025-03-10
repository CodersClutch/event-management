import EventCards from "@/components/HostEvents/EventCards";
import Sponsors from "@/components/HostEvents/Sponsors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 xl:grid-cols-3">
        <div className="col-span-2 xl:border-r">
          <Card>
            <CardHeader>
              <CardTitle>My Event List</CardTitle>
            </CardHeader>
            <CardContent>
              <EventCards />
            </CardContent>
          </Card>
          {/* image listing */}
        </div>

        <div className="col-span-1">
          {/* top sponsors and  categories */}
          <Sponsors />
        </div>
      </div>
    </div>
  );
};

export default page;
