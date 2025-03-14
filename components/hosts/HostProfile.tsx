"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Globe, Edit, Activity, Star } from "lucide-react";

const HostProfileComponent = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="rounded-2xl shadow-xl border-0 overflow-hidden bg-gradient-to-br from-white to-gray-50">
        {/* Profile Header with Gradient Background */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Avatar className="w-24 h-24 border-4 border-white shadow-lg hover:scale-105 transition-transform">
                <AvatarImage src="/profile.jpeg" alt="Amadou Jamanka" />
                <AvatarFallback className="text-2xl font-bold bg-white text-yellow-600">
                  AJ
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold text-white">Amadou Jamanka</h1>
                  <span className="flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-white">
                    <Star size={16} className="fill-yellow-400" />
                    <span className="text-sm">Pro Host</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span className="flex items-center gap-1">
                    <MapPin size={18} />
                    <span className="font-medium">New York, USA</span>
                  </span>
                  <span className="h-4 w-px bg-white/40"></span>
                  <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
                    <Globe size={18} />
                    <span className="font-medium underline decoration-transparent hover:decoration-white">
                      hostwebsite.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <Button className="bg-white text-yellow-600 hover:bg-gray-50 hover:text-yellow-700 shadow-md gap-2">
              <Edit size={18} />
              Edit Profile
            </Button>
          </div>
        </div>

        <CardContent className="p-6 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 py-4">
            {[
              { label: "Events Hosted", value: "127" },
              { label: "Experience", value: "5yrs" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-white rounded-xl border border-gray-100 cursor-pointer shadow-sm hover:shadow-md">
                <div className="text-2xl font-bold text-[#711854]">{stat.value}</div>
                <div className="text-sm text-[#711854] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* About Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-yellow-400 rounded-full"></span>
              About Me
            </h3>
            <p className="text-gray-600 leading-relaxed">
              🎉 Event Architect & Experience Curator
              <br />
              Specializing in creating unforgettable moments through meticulously planned events. 
              From intimate gatherings to large-scale festivals, I blend creativity with precision 
              to deliver seamless experiences. Certified Event Planner with a passion for innovative 
              tech integrations.
            </p>
          </section>

          {/* Interests Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-yellow-400 rounded-full"></span>
              Expertise & Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Event Planning", "Music Festivals", "Tech Conferences", "VIP Experiences", 
                "Logistics Management", "Stage Design"].map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-full 
                             hover:bg-yellow-200 transition-colors cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </section>

          {/* Activity Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Activity size={20} className="text-yellow-500" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {[
                { date: "2024-03-15", event: "Tech Innovators Summit 2024 - Published" },
                { date: "2024-03-12", event: "Updated venue details for Summer Music Fest" },
                { date: "2024-03-10", event: "Received 25 new registrations for AI Conference" },
              ].map((activity) => (
                <div key={activity.date} className="flex items-center gap-4 p-3 bg-white rounded-lg 
                                                   shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-sm font-medium text-yellow-600">{activity.date}</div>
                  <div className="h-px flex-1 bg-gray-100"></div>
                  <div className="text-gray-600">{activity.event}</div>
                </div>
              ))}
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default HostProfileComponent;