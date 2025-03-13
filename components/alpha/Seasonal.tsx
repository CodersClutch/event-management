"use client";
import React, { useEffect, useState } from "react";
import { BiSad } from "react-icons/bi";
import Common from "../TabsCategory/Common";
import { GetAllEventForWeb } from "@/lib/actions/event/GetAllEvent";
import Loader from "../Layout/Loader";

const Seasonal = () => {
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
        const response = await GetAllEventForWeb({ page, limit: 10 });

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

  const filteredEvent = events.filter((event) =>
    event.category.includes("holiday")
  );

  return (
    <div className="max-w-7xl mx-auto p-6 text-center">
      <p className="uppercase text-4xl font-bold text-start text-black ml-3 pb-4">
        Seasonal & Holidays
      </p>
      {loading && <Loader />}

      {filteredEvent.length > 0 ? (
        <Common events={filteredEvent} />
      ) : (
        !loading &&
        !error &&
        filteredEvent.length === 0 && (
          <div className="flex flex-col items-center justify-center bg-gray-100 p-10 rounded-xl shadow-lg">
            <BiSad className="text-gray-400 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700">
              No events found in this category
            </h2>
            <p className="text-gray-500 mt-2">
              We&apos;re always updating our event list. Check back later for
              more!
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default Seasonal;
