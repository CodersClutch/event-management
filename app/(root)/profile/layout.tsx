"use client";
import { ReactNode } from "react";
import {
  HomeIcon,
  CalendarIcon,
  CogIcon,
  ChartBarIcon,
  User2,
  Bell,
} from "lucide-react"; // Import icons from Heroicons
import { useSession } from "next-auth/react";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  const { data: session } = useSession();

  // Navigation links with icons
  const navigationLinks = [
    { label: "Dashboard", href: "#", icon: <HomeIcon className="w-5 h-5" /> },
    {
      label: "Events",
      href: "/profile/host-events",
      icon: <CalendarIcon className="w-5 h-5" />,
    },
    { label: "Report", href: "#", icon: <ChartBarIcon className="w-5 h-5" /> },
    {
      label: "Notifications",
      href: `/profile/notifications`,
      icon: <Bell className="w-5 h-5" />,
    },
    {
      label: "Info",
      href: `/profile/${session?.user._id}`,
      icon: <User2 className="w-5 h" />,
    },
  ];

  return (
    <div className="p-4 md:mx-[4.5%] pt-[6%] ">
      {/* Navigation Bar */}
      <div className="bg-gradient-to-r from-pink-900 to-purple-900 w-full rounded-lg shadow-lg sticky top-0 z-10">
        <div className="flex justify-center items-center py-4 ">
          {/* Navigation Links with Icons */}
          <nav className="flex items-center space-x-8">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex flex-col items-center text-white font-medium text-sm hover:text-[#FFBD1E] transition-all duration-700 ease-in-out"
              >
                <span className="mb-1">{link.icon}</span> {/* Icon */}
                <span>{link.label}</span> {/* Label */}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mt-6 h-[80vh] overflow-y-auto rounded-lg bg-white shadow-sm">
        {children}
      </div>
    </div>
  );
}
