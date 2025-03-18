"use client";
import DeleteEvent from "@/components/event/DeleteEvent";
import EditEvent from "@/components/event/EditEvent";
import Loader from "@/components/Layout/Loader";
import { Badge } from "@/components/ui/badge";
import { GetUserRegisteredEvents } from "@/lib/actions/user/getAllUser";
import { EventInterfaceType } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CheckoutDrawer from "./event/CheckoutDrawer";

interface AttendeeProfileProps {
  userId: string;
}

const AttendeeProfile: React.FC<AttendeeProfileProps> = ({ userId }) => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [hasPreviousPage, setHasPreviousPage] = useState<boolean>(false);
  const [showCheckoutDrawer, setShowCheckoutDrawer] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await GetUserRegisteredEvents(userId);
        console.log("API Response:", response); // Debugging
        console.log("User ID:", userId);

        if (response.status === 200 && response.data) {
          setEvents(Array.isArray(response?.data) ? response.data : []);
          setHasPreviousPage(page > 1);
          setHasNextPage(response.data.length > 0); // Adjust based on pagination logic
        } else {
          setEvents([]); // Ensure events state is always an array
          setError(response.message || "Failed to load events.");
        }
      } catch (err) {
        setEvents([]);
        setError("An error occurred while fetching events.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [userId, page]);

  return (
    <div className="xl:border-r">
      {loading && <Loader />}

      {error && <p className="text-center py-5 text-red-500">Error: {error}</p>}

      {!loading && !error && events.length === 0 && (
        <p className="text-center py-5 text-gray-500">
          No registered events here.
        </p>
      )}

      {!loading && !error && events.length > 0 && (
        <div className="bg-transparent max-w-7xl mx-auto p-4 font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {events.map((event) => (
              <div
                key={event._id}
                className="relative w-72 hover:shadow-2xl rounded-2xl overflow-hidden shadow-lg border"
              >
                <Link
                  href={`/events/${event._id}`}
                  className="relative w-full h-96 block"
                >
                  <Image
                    src={
                      event.image ||
                      "https://img.freepik.com/free-psd/kitschy-colors-youtube-cover-template_23-2150544102.jpg"
                    }
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </Link>

                <Badge
                  className={`
                    absolute top-3 right-3 shadow-md
                    ${
                      event.status === "cancelled"
                        ? "bg-red-600"
                        : event.status === "upcoming"
                        ? "bg-yellow-600"
                        : event.status === "ongoing"
                        ? "bg-lime-500"
                        : "bg-green-600"
                    }
                  `}
                >
                  {event.status}
                </Badge>

                <div className="absolute bottom-0 left-0 right-0 bg-white m-2 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold truncate">{event.title}</h3>
                  <p className="text-gray-500 font-medium text-sm">
                    {formatDate(event.schedule?.start)}
                  </p>
                  <p className="text-gray-500 font-medium text-sm truncate">
                    {event.location}
                  </p>
                  <span className="text-[#D942D6] font-bold">
                    ${event.price ?? "Free"}
                  </span>
                  <div className="flex justify-between items-center bg-blue-200 rounded-lg p-4 mt-4">
                    <div className="flex justify-between items-center bg-blue-200 rounded-lg p-4 mt-4 cursor-pointer hover:bg-blue-300 transition duration-300 shadow-md">
                      <span className="font-semibold text-blue-800">
                        <CheckoutDrawer
                          title={true}
                          open={showCheckoutDrawer} // Replace with appropriate state or value
                          onClose={() =>
                            setShowCheckoutDrawer(!showCheckoutDrawer)
                          } // Replace with actual handler
                          event={event} // Pass the current event object
                        />
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 text-blue-800"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v12m0 0l-4-4m4 4l4-4M4 16h16"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
      )}
    </div>
  );
};

export default AttendeeProfile;
