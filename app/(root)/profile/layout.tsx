import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  CalendarIcon,
  CogIcon,
  ChartBarIcon,
  User2,
  Bell,
  TicketIcon,
} from "lucide-react"; // Import icons from Heroicons
import { useSession } from "next-auth/react";
import { auth } from "@/auth";

export default async function ProfileLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  const pathname = usePathname();
  // Navigation links with icons
  const navigationLinks = [
    {
      label: "Dashboard",
      href: "/profile",
      icon: <HomeIcon className="w-5 h-5" />,
    },
    {
      label: "Events",
      href: "/profile/host-events",
      icon: <CalendarIcon className="w-5 h-5" />,
    },
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
    // my-tickets
    session?.user.role.name === "Hosts"
      ? null
      : {
          label: "My Tickets",
          href: "/profile/my-tickets",
          icon: <TicketIcon className="w-5 h-5" />,
        },
  ].filter(Boolean);

  return (
    <div className="p-4 mx-[5%] pt-20 md:px-12">
      {/* Navigation Bar */}
      <div className="bg-gradient-to-r from-pink-900 to-purple-900 w-full rounded-lg shadow-lg sticky top-0 z-10">
        <div className="flex justify-center items-center py-4 px-6">
          {/* Navigation Links with Icons */}
          <nav className="flex items-center space-x-8">
            {navigationLinks.map((link, index) => {
              if (!link) return null;
              const isActive = pathname === link.href;
              return (
                <a
                  key={index}
                  href={link.href}
                  className={`flex flex-col items-center text-white font-medium text-sm transition-all duration-700 ease-in-out ${
                    isActive ? "text-[#FFBD1E]" : "hover:text-[#FFBD1E]"
                  }`}
                >
                  <span className="mb-1">{link.icon}</span> {/* Icon */}
                  <span>{link.label}</span> {/* Label */}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mt-6 h-[80vh] overflow-y-auto rounded-lg bg-white shadow-sm p-6">
        {children}
      </div>
    </div>
  );
}
