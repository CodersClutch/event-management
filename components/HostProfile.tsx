"use client";
import { auth } from "@/auth";
import DeleteEvent from "@/components/event/DeleteEvent";
import EditEvent from "@/components/event/EditEvent";
import Loader from "@/components/Layout/Loader";
import { Badge } from "@/components/ui/badge";
import {
  getEventsByUserId,
  getEventsForProfileDashboard,
} from "@/lib/actions/event/GetAllEvent";
import { EventInterfaceType } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HostProfile = () => {
  // const session = await auth();

  // const response = await getEventsByUserId(session?.user._id);
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [hasPreviousPage, setHasPreviousPage] = useState<boolean>(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getEventsForProfileDashboard({
          page,
          limit: 10,
        });

        if (response.status === 200) {
          setEvents(Array.isArray(response?.data) ? response.data : []);
          setHasNextPage(response.isNextPage || false);
          setHasPreviousPage(response.isPreviousPage || false);
        } else {
          throw new Error(response.message || "Failed to fetch events.");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [page]);
  return (
    <div className="xl:border-r">
      {loading && <Loader />}

      {error && <p className="text-center py-5 text-red-500">Error: {error}</p>}
      {!loading && !error && events.length === 0 && (
        <p className="text-center py-5 text-gray-500">No events available.</p>
      )}
      {!loading && !error && events.length > 0 && (
        <>
          <div className="bg-transparent max-w-7xl mx-auto p-4 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {events?.map((event: EventInterfaceType) => (
                <div
                  key={event?._id}
                  className="relative w-72 hover:shadow-2xl rounded-2xl overflow-hidden shadow-lg border"
                >
                  <Link
                    href={`/events/${event?._id}`}
                    className="relative w-full h-96 block"
                  >
                    <Image
                      src={
                        event?.image ||
                        "https://img.freepik.com/free-psd/kitschy-colors-youtube-cover-template_23-2150544102.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid"
                      }
                      alt={event?.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Link>

                  {/* <button className=" bg-white p-2 rounded-full shadow-md"> */}
                  <Badge
                    className={`
                        absolute top-3 right-3  shadow-md
                        ${
                          event?.status === "cancelled"
                            ? "bg-red-600"
                            : event?.status === "upcoming"
                            ? "bg-yellow-600"
                            : event?.status === "ongoing"
                            ? "bg-lime-500"
                            : "bg-green-600"
                        } `}
                  >
                    {event?.status}
                  </Badge>
                  {/* </button> */}

                  <div className="absolute bottom-0 left-0 right-0 bg-white m-2 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold truncate">
                      {event?.title}
                    </h3>
                    <p className="text-gray-500 font-medium text-sm">
                      {formatDate(event?.schedule?.start)}
                    </p>
                    <p className="text-gray-500 font-medium text-sm truncate">
                      {event?.location}
                    </p>

                    <span className="text-[#D942D6] font-bold">
                      ${event.price}
                    </span>
                    <div className="flex justify-between items-center bg-blue-200 rounded-lg p-4 mt-4">
                      <EditEvent event={event} />
                      <DeleteEvent event={event} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={!hasPreviousPage || loading}
                className={`px-4 py-2 rounded-lg ${
                  hasPreviousPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Previous
              </button>
              <button
                onClick={() => setPage((prev) => prev + 1)}
                disabled={!hasNextPage || loading}
                className={`px-4 py-2 rounded-lg ${
                  hasNextPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}

      {/* <EventCards />
      <EditEvent event={event} />
      <DeleteEvent event={event} /> */}
    </div>
  );
};

export default HostProfile;
