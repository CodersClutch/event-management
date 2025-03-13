import Image from 'next/image'
import React from 'react'
import { FaSearch, FaCalendarCheck, FaBookmark, FaMagic } from 'react-icons/fa'

const HowItworks = () => {
  return (
    <div className='flex flex-col items-center py-[5%] justify-center space-y-7'>
      <div className='space-y-4 flex flex-col items-center justify-center'>
        <p className='text-6xl font-bold text-center'>How 4kiddos works</p>
        <p className='text-xl text-center text-[#89898A] max-w-7xl'>4kiddos is a one-stop marketplace for parents to discover, book, and enjoy kid-friendly events and activities. It makes planning unforgettable experiences for their children more manageable.</p>
      </div>
      {/* Steps Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5%] gap-8">
        {/* Step 1 */}
        <div className="bg-white border border-gray-200 text-center shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center text-center text-yellow-500 text-4xl mb-4">
            <FaSearch />
          </div>
          <h2 className="text-xl font-semibold mb-2">Step 1: Search for an Event</h2>
          <p className="text-gray-600">
          Browse kid-friendly activities for free.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white shadow-md text-center rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center text-purple-500 text-4xl mb-4">
            <FaCalendarCheck />
          </div>
          <h2 className="text-xl font-semibold mb-2">Step 2: Find a Kid-Friendly Event</h2>
          <p className="text-gray-600">
          Quickly book and pay for family events.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white shadow-md text-center rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center text-pink-500 text-4xl mb-4">
            <FaBookmark />
          </div>
          <h2 className="text-xl font-semibold mb-2">Step 3: Save Your Favorites</h2>
          <p className="text-gray-600">
          Browse age-appropriate adventures for free.
          </p>
        </div>
      </div>
    </div >
  )
}

export default HowItworks
