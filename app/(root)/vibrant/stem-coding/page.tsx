import React from "react";
import Image from "next/image";
import Attraction from "@/components/alpha/Attraction";

const STEMLanding = () => {
  return (
    <>
      <div className="relative h-[80vh] min-h-[400px] flex flex-col md:flex-row border-b border-indigo-800">
        {/* Content Section */}
        <div className="md:w-1/2 p-6 md:p-12 bg-indigo-900 flex items-center">
          <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Unlock the Future With
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-300 mt-2">
                STEM & Coding
              </span>
            </h1>

            <p className="text-base md:text-lg text-indigo-100 font-light">
              Explore workshops and programs that inspire innovation and
              problem-solving.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative h-[200px] md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920"
            alt="STEM and coding"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          {/* Image Attribution Badge */}
          <div className="absolute bottom-4 right-4 bg-indigo-900/80 px-3 py-1 rounded-full text-xs text-indigo-100">
            Photo by STEM Innovators
          </div>
        </div>
      </div>

      <div className="pt-16 pb-16">
        <Attraction />
      </div>
    </>
  );
};

export default STEMLanding;
