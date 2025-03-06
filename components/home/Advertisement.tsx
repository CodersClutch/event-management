"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import Image from "next/image";
import { cards } from "@/constants";

const Advertisement = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slides: {
      perView: 1,
      spacing: 0,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setInterval(() => {
        slider.next();
      }, 3000); // Auto-slide every 3 seconds
    },
  });

  return (
    <div className="relative w-full mt-[130px] mb-[80px] max-w-7xl mx-auto">
      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-4  max-md:hidden rounded-full bg-white/80 text-gray-900 shadow-md hover:bg-gray-100 z-10"
        onClick={() => instanceRef.current?.prev()}
        aria-label="Previous slide"
      >
        <MdOutlineChevronLeft />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-4 max-md:hidden rounded-full bg-white/80 text-gray-900 shadow-md hover:bg-gray-100 z-10"
        onClick={() => instanceRef.current?.next()}
        aria-label="Next slide"
      >
        <MdOutlineChevronRight />
      </button>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {cards.map((card, index) => (
          <div key={index} className="keen-slider__slide">
            <div className="relative h-96 w-full">
              <Image
                src={card.url}
                alt={card.alt}
                fill
                className="object-cover md:rounded-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots - Updated positioning */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {cards.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === idx ? "bg-gray-400" : "bg-white"
            }`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
