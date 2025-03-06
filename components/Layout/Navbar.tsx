'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Avatar, AvatarImage } from '../ui/avatar';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState('North Bank');

  return (
    <nav  className=" shadow-md fixed lg:mt-4 left-0 w-full z-20">
      <div  className="container mr-5 px-4 md:px-12 bg-white rounded-lg">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center  justify-between py-3 relative">
          {/* Left Navigation Links */}
          <div className="flex items-center space-x-5">
            {['Contact Sales', 'Create Events', 'Help Center', 'Find my tickets'].map((item) => (
              <Link key={item} href="#" className="text-black font-medium text-sm hover:text-[#FDCA2D]">
                {item}
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image 
              src='https://cdn.prod.website-files.com/66b50719acb232f6e3081f63/66d2a8417f39672a5117ed01_logoo.png'
              height={100}
              width={100}
              alt='Event Management' 
            />
          </Link>

          {/* Right Section - Search and Auth */}
          <div className="flex items-center space-x-5">
            {/* Search Container */}
            <div className="flex-1 max-w-[38rem] mx-8">
              <div className="relative flex items-center border border-gray-300 rounded-full focus-within:border-orange-500">
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
                <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#FDCA2D] text-white rounded-full p-2 hover:bg-[#FDCA2D]">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Auth Links */}
            <Link href="#" className="text-black font-medium text-sm hover:text-[#FDCA2D]">Log In</Link>
            <Link href="#" className="text-black font-medium text-sm hover:text-[#FDCA2D]">Sign Up</Link>
          </div>
        </div>

        {/* Mobile Navbar (unchanged) */}
        <div className="md:hidden flex justify-between items-center py-3">
          <Link href="/">
            <Image 
              src='https://cdn.prod.website-files.com/66b50719acb232f6e3081f63/66d2a8417f39672a5117ed01_logoo.png'
              height={100}
              width={100}
              alt='Event Management' 
            />
          </Link>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none">
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu (unchanged) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 py-4 border-t border-gray-200">
            {['Contact Sales', 'Create Events', 'Help Center', 'Find my tickets', 'Log In'].map((item) => (
              <Link key={item} href="#" className="block text-black font-medium text-sm hover:text-[#FDCA2D]">
                {item}
              </Link>
            ))}
            <Link href="#" className="block px-4 py-2 bg-[#FDCA2D] text-white rounded-full hover:bg-[#FDCA2D] text-center">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}