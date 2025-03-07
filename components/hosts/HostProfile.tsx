"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Globe, Edit, Activity } from "lucide-react";
import Image from "next/image";

const events = [
  {
    name: "Music Festival",
    location: "New York",
    date: "12 March 2023",
    image: "/two.png",
  },
  {
    name: "Tech Conference",
    location: "San Francisco",
    date: "5 July 2023",
    image: "/three.png",
  },
  {
    name: "Art Exhibition",
    location: "Paris",
    date: "20 September 2023",
    image: "/two.png",
  },
  {
    name: "Food Carnival",
    location: "Tokyo",
    date: "10 November 2023",
    image: "/three.png",
  },
  {
    name: "Beach Party",
    location: "Miami",
    date: "31 December 2023",
    image: "/one.png",
  },
];

const HostProfileComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Host Profile Section */}
      <Card className="md:col-span-2 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/profile.jpeg" alt="Host Name" />
              <AvatarFallback>HN</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">Amadou Jamanka</h2>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <MapPin size={16} /> Location: New York, USA
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <Globe size={16} />{" "}
                <a href="#" className="text-blue-500">
                  www.hostwebsite.com
                </a>
              </p>
              <p className="text-sm text-gray-500">Language: English</p>
            </div>
          </div>
          <Button variant="outline">
            <Edit size={16} className="mr-2" /> Edit
          </Button>
        </div>

        {/* About Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">About</h3>
          <p className="text-sm text-gray-600 mt-2">
            Welcome to my event management profile! I specialize in organizing and hosting unforgettable events.
            From music festivals to tech conferences, I ensure that every event is a success.
          </p>
        </div>

        {/* Interests Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Interests</h3>
          <div className="flex gap-2 mt-2 flex-wrap">
            {["Event Planning", "Music", "Technology", "Networking"].map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 text-sm bg-gray-200 rounded-full"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Activity Section */}
        <div className="mt-6 flex items-center text-red-500">
          <Activity size={16} className="mr-2" /> Recent Activity
        </div>
      </Card>

      {/* Upcoming Events Section */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border-b pb-4 last:border-none"
            >
              <Image
                src={event.image}
                alt={event.name}
                className="w-16 h-16 rounded-md object-cover"
                width={64} // Ensure you provide width and height
                height={64}
              />
              <div>
                <h4 className="text-sm font-medium">{event.name}</h4>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <MapPin size={14} /> {event.location}
                </p>
                <p className="text-xs text-gray-500">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HostProfileComponent;
