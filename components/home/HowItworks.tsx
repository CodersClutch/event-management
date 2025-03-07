import Image from 'next/image'
import React from 'react'

const HowItworks = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-7'>
        <div className='space-y-4 flex flex-col items-center justify-center'>
            <p className='text-6xl font-bold text-center'>How 4kiddos works</p>
            <p className='text-xl text-center text-[#89898A] max-w-7xl'>4kiddos is a one-stop marketplace for parents to discover, book, and enjoy kid-friendly events and activities. It makes planning unforgettable experiences for their children more manageable.</p>
        </div>
        <Image
        src='https://cdn.prod.website-files.com/66b50719acb232f6e3081f63/66df44c0f26ecad44faa5f1e_Green%20Abstract%20Shapes%20Problem%20and%20solution%20Graphic%20Organizer.png'
        width={700}
        height={700}
        alt='How 4kiddos works'
        className='rounded-3xl border border-gray-500 shadow-2xl'
        />
    </div>
  )
}

export default HowItworks
