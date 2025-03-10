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
      <Card className="md:col-span-2 p-6 border-yellow-500 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20 border-2 border-primary">
              <AvatarImage src="/profile.jpeg" alt="Amadou Jamanka" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">Amadou Jamanka</h2>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <MapPin size={16} className="text-gray-500" /> New York, USA
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <Globe size={16} className="text-gray-500" />
                <a href="#" className="text-blue-600 hover:underline">
                  www.hostwebsite.com
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-1">Language: English</p>
            </div>
          </div>
          <Button variant="outline" className="flex items-center border-yellow-500 gap-2">
            <Edit size={16} /> Edit Profile
          </Button>
        </div>

        {/* About Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">About Me</h3>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            Welcome to my event management profile! I specialize in organizing and hosting unforgettable events.
            From music festivals to tech conferences, I ensure every event is a seamless and memorable experience.
          </p>
        </div>

        {/* Interests Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Interests</h3>
          <div className="flex gap-2 mt-2 flex-wrap">
            {["Event Planning", "Music", "Technology", "Networking"].map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-800"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Activity Section */}
        <div className="mt-8 flex items-center text-red-600">
          <Activity size={16} className="mr-2" /> Recent Activity
        </div>
      </Card>

      {/* Upcoming Events Section */}
      <Card className="p-6 shadow-lg border-yellow-500">
        <h3 className="text-xl font-semibold mb-6">Upcoming Events</h3>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border-b pb-4 last:border-none"
            >
              <Image
                src={event.image}
                alt={event.name}
                className="w-16 h-16 rounded-lg object-cover"
                width={64}
                height={64}
              />
              <div>
                <h4 className="text-sm font-medium">{event.name}</h4>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <MapPin size={14} className="text-gray-500" /> {event.location}
                </p>
                <p className="text-xs text-gray-500 mt-1">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HostProfileComponent;