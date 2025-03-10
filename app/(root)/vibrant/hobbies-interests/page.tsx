import React from "react";
import Image from "next/image";
import Hobbies from "@/components/alpha/Hobbies";

const HobbiesLanding = () => {
  return (
    <>
      <div className="relative h-[80vh] min-h-[400px] flex flex-col md:flex-row border-b border-purple-800">
        {/* Content Section */}
        <div className="md:w-1/2 p-6 md:p-12 bg-purple-900 flex items-center">
          <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Explore Your Passions Through
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300 mt-2">
                Creative Activities
              </span>
            </h1>

            <p className="text-base md:text-lg text-purple-100 font-light">
              Discover workshops and events that ignite your creativity and
              connect you with like-minded enthusiasts.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative h-[200px] md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920"
            alt="Creative hobbies"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          {/* Image Attribution Badge */}
          <div className="absolute bottom-4 right-4 bg-purple-900/80 px-3 py-1 rounded-full text-xs text-purple-100">
            Photo by Creative Minds
          </div>
        </div>
      </div>

      <div className="pt-16 pb-16">
        <Hobbies />
      </div>
    </>
  );
};

export default HobbiesLanding;
