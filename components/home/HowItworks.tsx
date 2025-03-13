import Image from 'next/image'
import React from 'react'
import { FaSearch, FaCalendarCheck, FaBookmark, FaMagic } from 'react-icons/fa'

const HowItworks = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-7'>
      <div className='space-y-4 flex flex-col items-center justify-center'>
        <p className='text-6xl font-bold text-center'>How 4kiddos works</p>
        <p className='text-xl text-center text-[#89898A] max-w-7xl'>4kiddos is a one-stop marketplace for parents to discover, book, and enjoy kid-friendly events and activities. It makes planning unforgettable experiences for their children more manageable.</p>
      </div>
      {/* <Image
        src='https://cdn.prod.website-files.com/66b50719acb232f6e3081f63/66df44c0f26ecad44faa5f1e_Green%20Abstract%20Shapes%20Problem%20and%20solution%20Graphic%20Organizer.png'
        width={700}
        height={700}
        alt='How 4kiddos works'
        className='rounded-3xl border border-gray-500 shadow-2xl'
        /> */}
      {/* Steps Container */}
      <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Step 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-center text-yellow-500 text-4xl mb-4">
            <FaSearch />
          </div>
          <h2 className="text-xl font-semibold mb-2">Step 1: Search for an Event</h2>
          <p className="text-gray-600">
            It’s totally free to look for kid-friendly activities.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-center text-purple-500 text-4xl mb-4">
            <FaCalendarCheck />
          </div>
          <h2 className="text-xl font-semibold mb-2">Step 2: Find a Kid-Friendly Event</h2>
          <p className="text-gray-600">
            Quickly review, book, and pay for family-centered events.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-center text-pink-500 text-4xl mb-4">
            <FaBookmark />
          </div>
          <h2 className="text-xl font-semibold mb-2">Step 3: Save Your Favorites</h2>
          <p className="text-gray-600">
            It’s totally free to look for age-appropriate adventures.
          </p>
        </div>
      </div>
    </div >
  )
}

export default HowItworks
