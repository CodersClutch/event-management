import Link from 'next/link';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PopularEvents = () => {
  const categories = [
    'Charity & Causes',
    'Hobbies & Interests',
    'Educational Events',
    'Seasonal & Holiday',
    'STEM & Coding',
    'Academic Support',
    'Homeschool-Friendly',
    'Tutoring & Test Prep',
    'STEM & Coding',
    'Special Needs & Inclusive Learning'

  ];

  return (
    <section className="bg-gradient-to-b from-gray-50/50 to-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#A22D9E] to-[#F34CF1] bg-clip-text text-transparent">
            Explore Vibrant Categories
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
            Discover events that spark your curiosity and passion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category}
              href="#"
              className="group relative bg-white hover:bg-gradient-to-b from-[#A22D9E]  hover:bg-gradient-to-t hover:from-[#A22D9E] hover:to-[#F34CF1] p-4 rounded-xl border border-gray-200 hover:border-transparent transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800 truncate whitespace-nowrap group-hover:text-white transition-colors">
                  {category}
                </span>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:rotate-45 transition-all" />
              </div>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#F34CF1]/20 pointer-events-none transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularEvents;