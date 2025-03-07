"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const destinations = [
  { city: "New York", image: "https://img.freepik.com/free-photo/high-angle-shot-city-buildings-new-york-manhattan_181624-24684.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid" },
  { city: "Los Angeles", image: "https://img.freepik.com/premium-photo/city-skyline-with-view-city-chicago_1082211-17093.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid" },
  { city: "Chicago", image: "https://img.freepik.com/premium-photo/hudson-river-by-modern-buildings-newyork-city_1048944-12131759.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid" },
  { city: "Washington", image: "https://img.freepik.com/free-photo/new-york-city-midtown-manhattan_649448-3520.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid" },
];

const TopDestine = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
  });

  return (
    <div className="relative px-4 md:px-8 mt-[100px] lg:px-12 py-12 ">
      <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8 lg:mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Top destinations in United States
            </h2>
            <p className="mt-2 text-gray-500">
              Explore our most popular destinations
            </p>
          </div>

          <div className="hidden md:flex space-x-3">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="bg-white/40 hover:bg-white shadow-lg hover:shadow-xl p-3 rounded-full transform transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => instanceRef.current?.next()}
              className="bg-white/40 hover:bg-white shadow-lg hover:shadow-xl p-3 rounded-full transform transition-all duration-300"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        
        <div ref={sliderRef} className="keen-slider">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="keen-slider__slide group relative"
            >
              <div className="flex flex-col h-full rounded-t-[4rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 relative">
                <div className="relative h-64 md:h-60 flex-shrink-0">
                  <Image
                    src={destination.image}
                    alt={destination.city}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2">
                    <h3 className="text-2xl font-bold">{destination.city}</h3>
                  </div>
                </div>
                {/* Border bottom effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D942D6] transition-all duration-300 group-hover:h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDestine;