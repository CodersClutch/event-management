import { ReactNode } from "react";
import { HomeIcon, CalendarIcon, CogIcon, ChartBarIcon } from "lucide-react"; // Import icons from Heroicons

export default function ProfileLayout({ children }: { children: ReactNode }) {
  // Navigation links with icons
  const navigationLinks = [
    { label: "Dashboard", href: "#", icon: <HomeIcon className="w-5 h-5" /> },
    { label: "Events", href: "#", icon: <CalendarIcon className="w-5 h-5" /> },
    { label: "Settings", href: "#", icon: <CogIcon className="w-5 h-5" /> },
    { label: "Report", href: "#", icon: <ChartBarIcon className="w-5 h-5" /> },
  ];

  return (
    <div className="p-4 mx-[5%] pt-20 md:px-12">
      {/* Navigation Bar */}
      <div className="bg-gradient-to-r from-pink-900 to-purple-900 w-full rounded-lg shadow-lg sticky top-0 z-10">
        <div className="flex justify-center items-center py-4 px-6">
          {/* Navigation Links with Icons */}
          <nav className="flex items-center space-x-8">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex flex-col items-center text-white font-medium text-sm hover:text-[#D942D6] transition-colors duration-200"
              >
                <span className="mb-1">{link.icon}</span> {/* Icon */}
                <span>{link.label}</span> {/* Label */}
              </a>
            ))}
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
