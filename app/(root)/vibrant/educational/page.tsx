import React from 'react';
import Image from 'next/image';
import Educational from '@/components/alpha/Educational';

const EducationalEventsLanding = () => {
  return (
    <>
    <div className="relative h-[80vh] min-h-[400px] flex flex-col md:flex-row border-b border-blue-800">
      {/* Content Section */}
      <div className="md:w-1/2 p-6 md:p-12 bg-blue-900 flex items-center">
        <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Expand Your Knowledge Through
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mt-2">
              Engaging Events
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-blue-100 font-light">
            Join seminars, workshops, and conferences designed to inspire and educate.
          </p>

        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 relative h-[200px] md:h-auto">
        <Image 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920"
          alt="Educational events"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        {/* Image Attribution Badge */}
        <div className="absolute bottom-4 right-4 bg-blue-900/80 px-3 py-1 rounded-full text-xs text-blue-100">
          Photo by Event Organizers
        </div>
      </div>
    </div>



    <div className="pt-16 pb-16">
        <Educational />
      </div>


    </>
  );
};

export default EducationalEventsLanding;