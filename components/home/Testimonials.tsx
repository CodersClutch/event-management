"use client";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";

const testimonials = [
  {
    text: "Booking kids' events through 4Kiddos has been a seamless experience. The platform is user-friendly and the customer service is exceptional. Highly recommend!",
    author: "Jason L",
    imageUrl:
      "https://cdn.prod.website-files.com/66b50719acb232f6e3081f7c/66d9f9dd8551d6bcf804e914_portrait-happy-man-with-wine-glass-night-club_23-2148037554.jpg",
  },
  {
    text: "4Kiddos made planning our kids' event so easy and stress-free. The team was incredibly helpful and the booking process was straightforward.",
    author: "Sarah M",
    imageUrl:
      "https://cdn.prod.website-files.com/66b50719acb232f6e3081f7c/66d9f919a54b09213f1c6197_top-view-young-female-sitting-table-showing-document-office_140725-106107-p-500.jpg",
  },
  {
    text: "We had an amazing experience with 4Kiddos. The kids' event was perfectly organized and the support team was always available to assist us.",
    author: "Megan T",
    imageUrl:
      "https://cdn.prod.website-files.com/66b50719acb232f6e3081f7c/66d9fa938551d6bcf805c5d3_shallow-focus-young-female-with-blue-hair-wearing-shorts-park-sunlight_181624-60352.jpg",
  },
  {
    text: "The attention to detail and the level of engagement they bring to our kids' events is outstanding. Without a doubt, I highly recommend 4kiddos!",
    author: "Emily R",
    imageUrl:
      "https://cdn.prod.website-files.com/66b50719acb232f6e3081f7c/66d9fa1aa5f0f810a7344a35_woman-cooking-making-ok-sign_23-2147782429-p-500.jpg",
  },
];

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 16 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="bg-[#D8F5FD] flex justify-center items-center">
      <div className="relative w-full my-8 p-4 md:p-6 lg:p-8 max-w-7xl">
        <p className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          What Our Clients Say
        </p>

        {/* Arrow Navigation */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-0 top-[55%] transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-10"
          aria-label="Previous Slide"
        >
          <FaArrowLeft className="text-2xl" />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-0 top-[55%] transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-10"
          aria-label="Next Slide"
        >
          <FaArrowRight className="text-2xl" />
        </button>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider py-2 md:py-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="keen-slider__slide flex flex-col rounded-3xl items-center text-center"
            >
              <div className="bg-white p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl">
                <div className="space-y-2 md:space-y-3 lg:space-y-4">
                  <div className="flex items-center justify-center">
                    <Avatar className="w-16 h-16 md:w-20 md:h-20">
                      <AvatarImage src={testimonial.imageUrl} />
                    </Avatar>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg italic max-w-md mt-2 md:mt-3">
                    “{testimonial.text}”
                  </p>
                  <p className="text-lg md:text-xl lg:text-xl pt-1 md:pt-2 font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="flex flex-row text-base md:text-lg items-center justify-center pt-1 md:pt-2 space-x-1 text-[#fadd00]">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
