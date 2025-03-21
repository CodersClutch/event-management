import { auth } from "@/auth";
import HostNetSale from "@/components/dashboard-v2/HostNetSale";
import TicketsCard from "@/components/dashboard-v2/TicketsCard";
import TotalSeat from "@/components/dashboard-v2/TotalSeat";
import CancelledEventsLength from "@/components/event/CancelledEventsLength";
import CompletedEventLength from "@/components/event/CompletedEventLength";
import RecentCompleatedEvents from "@/components/event/RecentCompleatedEvents";
import UpcommingEvents from "@/components/event/UpcommingEvents";
import UpcommingEventsLength from "@/components/event/UpcommingEventsLength";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

// Reusable Skeleton Loader Component
const SkeletonLoader = ({
  count = 1,
  className = "w-[300px] p-6 h-10 mt-2",
}) => {
  return Array.from({ length: count }).map((_, index) => (
    <Skeleton className={className} key={index} />
  ));
};

const Home = async () => {
  const session = await auth();

  return (
    <div className="p-4 flex justify-center">
      {/* Main Container with Centered Content */}
      <div className="w-full max-w-7xl">
        {" "}
        {/* Adjust max-width as needed */}
        {/* Main Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-10">
            {/* Event Stats Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Suspense fallback={<SkeletonLoader count={3} />}>
                <UpcommingEventsLength />
                <CancelledEventsLength />
                <CompletedEventLength />
              </Suspense>
            </div>

            {/* Host Net Sale Grid */}

            {session?.user.role.name === "Attendees" ? null : (
              <>
                <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-1">
                  {[1].map((_, index) => (
                    <Suspense key={index} fallback={<SkeletonLoader />}>
                      <HostNetSale />
                    </Suspense>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-1">
                  <Suspense fallback={<SkeletonLoader />}>
                    <TicketsCard />
                  </Suspense>
                  <Suspense fallback={<SkeletonLoader />}>
                    {/* <TotalSeat /> */}
                  </Suspense>
                </div>
              </>
            )}

            {/* Tickets and Seats Grid */}
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 space-y-3">
            <Suspense fallback={<SkeletonLoader count={7} />}>
              <UpcommingEvents />
              <RecentCompleatedEvents />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
