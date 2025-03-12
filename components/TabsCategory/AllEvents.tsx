"use client";

import React, { useEffect, useState } from "react";
import Common from "./Common";
import { GetAllEventForWeb } from "@/lib/actions/event/GetAllEvent";

const EventCard = () => {
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

        console.log(response);

        if (response.status === 200) {
          setEvents(response.data || []);
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
    <div className="min-h-screen py-8">
      {loading && (
        <p className="text-center py-5 text-gray-500">Loading events...</p>
      )}

      {error && <p className="text-center py-5 text-red-500">Error: {error}</p>}

      {!loading && !error && events.length === 0 && (
        <p className="text-center py-5 text-gray-500">No events available.</p>
      )}

      {!loading && !error && events.length > 0 && <Common events={events} />}

      {/* Pagination Controls */}
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
  );
};

export default EventCard;
