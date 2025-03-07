"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TicketsCard = () => {
  const totalSeats = 5500;
  const soldSeats = 6550;
  const progress = 90;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <Card className="text-center p-4">
      <CardHeader>
        <CardTitle>TICKETS</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <div className="relative flex flex-col items-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="rotate-[-90deg]"
          >
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#ef4444"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-semibold">{progress}</span>
          </div>
          <p className="text-gray-500">Sold Seats</p>
        </div>
        <div className="flex justify-between w-full text-lg font-semibold">
          <div className="text-center w-1/2">
            <p className="text-gray-500">Total Seats</p>
            <p className="text-red-500 text-2xl">${totalSeats.toFixed(2)}</p>
          </div>
          <div className="text-center w-1/2">
            <p className="text-gray-500">Sold Seats</p>
            <p className="text-red-500 text-2xl">${soldSeats.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TicketsCard;
