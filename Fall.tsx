'use client';

import Image from 'next/image';
import { Bookmark } from 'lucide-react';

const events = [
  {
    image: "/path-to-image1.jpg",
    title: "Andante & Allegro Event",
    date: "Aug 1, 2025 at 8:00 AM",
    location: "1 American Dream Wy, East Rutherford, NJ",
  },
  {
    image: "/path-to-image2.jpg",
    title: "Triple Time Event",
    date: "Aug 15, 2025 at 8:00 AM",
    location: "999 Canada Pl, Vancouver, BC",
  },
  {
    image: "/path-to-image3.jpg",
    title: "Sterling Forest Event Planners",
    date: "Sep 1, 2025 at 8:00 AM",
    location: "42 Marine Parade, Southport QLD",
  },
  {
    image: "/path-to-image4.jpg",
    title: "Highwood Terrace Event",
    date: "Sep 19, 2025 at 8:00 AM",
    location: "14900 Beck Rd, Plymouth, MI",
  },
  {
    image: "/path-to-image5.jpg",
    title: "Ocean Breeze Festival",
    date: "Oct 5, 2025 at 9:00 AM",
    location: "55 Seaside Blvd, Miami, FL",
  },
  {
    image: "/path-to-image6.jpg",
    title: "Mountain Peaks Summit",
    date: "Nov 10, 2025 at 7:30 AM",
    location: "789 Alpine Rd, Denver, CO",
  },
  {
    image: "/path-to-image7.jpg",
    title: "City Lights Gala",
    date: "Dec 15, 2025 at 6:00 PM",
    location: "100 Downtown St, New York, NY",
  },
  {
    image: "/path-to-image8.jpg",
    title: "Winter Wonderland Expo",
    date: "Jan 20, 2026 at 10:00 AM",
    location: "250 Ice Park Ave, Chicago, IL",
  },
];

const EventCard = ({ image, title, date, location }) => {
  return (
    <div className="relative w-72 rounded-2xl overflow-hidden shadow-lg border">
      <div className="relative w-full h-80">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
        <Bookmark className="h-5 w-5 text-gray-600" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 bg-white m-4 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold truncate">{title}</h3>
        <p className="text-gray-500 text-sm">{date}</p>
        <p className="text-gray-500 text-sm truncate">{location}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-red-500 font-bold">Free</span>
          <button className="text-red-500 font-bold">Buy Now</button>
        </div>
      </div>
    </div>
  );\};

export default EventCard;