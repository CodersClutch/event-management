"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavUser } from "../nav-user";
import WebUserNavBar from "./WebUserNavBar";
import { useSession } from "next-auth/react";
import AddEvent from "../event/AddEvent";

const navLink = [
  {
    title: "Contact Sales",
    href: "/contact-sales",
  },
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Help Center",
    href: "/help-center",
  },
  {
    title: "Parenting Tips",
    href: "/parenting-tips",
  },
];

const Navbar = () => {
  const { data: session } = useSession();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState("");

  return (
    <nav className="fixed mt-4 z-20 w-full">
      <div className=" bg-white rounded-lg shadow-xl  mx-[5%] px-4 md:px-12">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between py-3">
          {/* Left Navigation Items */}
          <div className="flex-1 flex items-center space-x-5">
            {navLink.map((navLinks) => (
              <Link
                key={navLinks.title}
                href={navLinks.href}
                className="text-black font-medium text-sm hover:text-[#D942D6]"
              >
                {navLinks.title}
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <Link href="/" className="flex-shrink-0 mx-8">
            <Image
              src="https://cdn.prod.website-files.com/66b50719acb232f6e3081f63/66d2a8417f39672a5117ed01_logoo.png"
              height={100}
              width={100}
              alt="Event Management"
            />
          </Link>

          {/* Right Section - Search and Auth */}
          <div className="flex-1 flex items-center justify-end space-x-5">
            {/* Search Container */}
            <div className="max-w-[25rem] flex-1">
              <div className="relative flex items-center border border-[#D942D6] rounded-full focus-within:border-[#D942D6]">
                <input
                  type="text"
                  placeholder="Search events"
                  className="w-full py-2 pl-6 pr-4 rounded-l-full border-none focus:ring-0"
                />
                <div className="h-6 w-px bg-gray-300" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-48 py-2 pl-4 pr-10 border-none focus:ring-0 bg-transparent"
                  placeholder="Location"
                />
                <button className="absolute right-1 top-1/2  -translate-y-1/2 bg-gradient-to-b hover:bg-gradient-to-t from-[#A22D9E] hover:from-[#A22D9E] hover:to-[#F34CF1] to-[#F34CF1]  shadow-md transition text-white rounded-full p-2 hover:bg-[#D942D6]">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Auth Links */}

            {/* check if the session if avelable  */}
            <>
              {
                // if session is available show the user profile
                session?.user ? (
                  <div className="flex items-center gap-5">
                    {/* <AddEvent /> */}
                    {/* <WebUserNavBar /> */}
                    {session?.user.role.name === "Attendees" ? null : (
                      <AddEvent />
                    )}

                    <div>
                      <WebUserNavBar />
                    </div>
                  </div>
                ) : (
                  // if not session available show the login and signup links
                  <div className="flex items-center space-x-5">
                    <Link
                      href="/auth"
                      className="text-black font-medium px-4 py-3 border-2 border-[#a927a7] rounded-full text-sm hover:text-[#D942D6]"
                    >
                      Log In
                    </Link>
                    <Link
                      href="/auth/signup"
                      className="px-2 py-2 text-lg bg-gradient-to-b hover:bg-gradient-to-t from-[#A22D9E] hover:from-[#A22D9E] hover:to-[#F34CF1] to-[#F34CF1] rounded-full shadow-md transition"
                    >
                      Sign Up
                    </Link>
                  </div>
                )
              }
            </>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex justify-between items-center py-3">
          {/* Logo on left */}
          <Link href="/">
            <Image
              src="https://cdn.prod.website-files.com/66b50719acb232f6e3081f63/66d2a8417f39672a5117ed01_logoo.png"
              height={100}
              width={100}
              alt="Event Management"
            />
          </Link>

          {/* Burger menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 py-4 border-t border-gray-200">
            {navLink.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block text-black font-medium text-sm hover:text-[#D942D6]"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="#"
              className="block px-4 py-2 bg-gradient-to-b hover:bg-gradient-to-t from-[#A22D9E] hover:from-[#A22D9E] hover:to-[#F34CF1] to-[#F34CF1]  shadow-md transition text-white rounded-full hover:bg-[#D942D6] text-center"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
