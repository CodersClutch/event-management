"use client";
import { FaStar } from "react-icons/fa";
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
      imageUrl: "https://cdn.prod.website-files.com/66b50719acb232f6e3081f7c/66d9f919a54b09213f1c6197_top-view-young-female-sitting-table-showing-document-office_140725-106107-p-500.jpg",
  },
  {
      text: "We had an amazing experience with 4Kiddos. The kids' event was perfectly organized and the support team was always available to assist us.",
      author: "Megan T",
      imageUrl: "https://cdn.prod.website-files.com/66b50719acb232f6e3081f7c/66d9fa938551d6bcf805c5d3_shallow-focus-young-female-with-blue-hair-wearing-shorts-park-sunlight_181624-60352.jpg",
  },
  {
      text: "The attention to detail and the level of engagement they bring to our kids' events is outstanding. Highly recommended!",
      author: "Emily R",
      imageUrl: "https://cdn.prod.website-files.com/66b50719acb232f6e3081f7c/66d9fa1aa5f0f810a7344a35_woman-cooking-making-ok-sign_23-2147782429-p-500.jpg",
  },
];

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 0 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setInterval(() => {
        slider.next();
      }, 3000); 
    },
  });

  return (
    <div className="relative w-full mt-[130px] mx-auto bg-[#D8F5FD] rounded-xl p-6 md:p-10 lg:p-20 shadow-lg">
      <p className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        What Our Clients Say
      </p>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider py-4 md:py-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="keen-slider__slide flex flex-col rounded-4xl items-center text-center"
          >
            <div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl">
              <div className="space-y-4 md:space-y-6 lg:space-y-8">
                <div className="flex items-center justify-center">
                  <Avatar className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
                    <AvatarImage src={testimonial.imageUrl} />
                  </Avatar>
                </div>
                <p className="text-base md:text-xl lg:text-2xl italic max-w-2xl mt-4 md:mt-6 lg:mt-10">
                  “{testimonial.text}”
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl pt-2 md:pt-4 font-semibold">
                  {testimonial.author}
                </p>
                <p className="flex flex-row text-lg md:text-xl items-center justify-center pt-2 md:pt-4 space-x-1 text-[#fadd00]">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4 md:mt-6">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${
              currentSlide === idx ? "bg-black md:w-8 w-6" : "bg-gray-300"
            }`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}