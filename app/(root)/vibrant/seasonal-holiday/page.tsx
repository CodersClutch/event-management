import React from 'react';
import Image from 'next/image';
import Seasonal from '@/components/alpha/Seasonal';

const SeasonalLanding = () => {
  return (
    <>
    <div className="relative h-[80vh] min-h-[400px] flex flex-col md:flex-row border-b border-red-800">
      {/* Content Section */}
      <div className="md:w-1/2 p-6 md:p-12 bg-red-900 flex items-center">
        <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Celebrate the Seasons With
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300 mt-2">
              Festive Activities
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-red-100 font-light">
            Discover events and traditions that bring joy and connection throughout the year.
          </p>

        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 relative h-[200px] md:h-auto">
        <Image 
          src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920"
          alt="Seasonal celebrations"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        {/* Image Attribution Badge */}
        <div className="absolute bottom-4 right-4 bg-red-900/80 px-3 py-1 rounded-full text-xs text-red-100">
          Photo by Holiday Enthusiasts
        </div>
      </div>
    </div>


    <div className="pt-16 pb-16">
        <Seasonal/>
      </div>

    </>
  );
};

export default SeasonalLanding;