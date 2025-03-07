import Link from 'next/link';
import React from 'react';

const PopularEvents = () => {
  const cities = [
    'Albuquerque',
    'Abilene',
    'Austin',
    'Irvine',
    'Phoenix',
    'Denver',
    'Seattle',
    'Anaheim',
    'Nashville',
    'San Antonio',
    'Portland',
    'Raleigh',
    'Baltimore',
  ];

  return (
    <div className="max-w-7xl mx-auto pb-[90px] pt-[50px]">
      <h2 className="text-2xl font-bold mb-4">Popular cities</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 overflow-x-auto space-x-4">
        {cities.map((city) => (
          <Link
            key={city}
            href="#"
            className="bg-white text-black p-2 text-sm font-medium rounded-full whitespace-nowrap"
          >
            Things to do in {city} <span className="ml-1 font-normal">↗</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularEvents;
