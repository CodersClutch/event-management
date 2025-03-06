'use client';

import Link from 'next/link';

export default function Hero() {

  return (
    <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="https://videos.pexels.com/video-files/854056/854056-sd_640_360_25fps.mp4"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl font-bold mb-4">Connecting Families with <br /> Engaging Activities</h1>
        <Link href="/get-started">
        <button className="px-6 py-3 text-lg bg-gradient-to-b hover:bg-gradient-to-t from-[#A22D9E] hover:from-[#A22D9E] hover:to-[#F34CF1] to-[#F34CF1] rounded-full shadow-md transition">
  Find Your Next Adventure
</button>
        </Link>
      </div>
    </section>
  );
}
