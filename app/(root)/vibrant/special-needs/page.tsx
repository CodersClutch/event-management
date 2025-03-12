import React from 'react';
import Image from 'next/image';

const SpecialNeedsLanding = () => {
  return (


    <>
    <div className="relative h-[80vh] min-h-[400px] flex flex-col md:filex-row border-b border-pink-800">
      {/* Content Section */}
      <div className="md:w-1/2 p-6 md:p-12 bg-pink-900 flex items-center">
        <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Foster Inclusive Learning With
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-300 mt-2">
              Tailored Support
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-pink-100 font-light">
            Discover resources and programs designed to support diverse learning needs.
          </p>

        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 relative h-[200px] md:h-auto">
        <Image 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920"
          alt="Inclusive learning"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        {/* Image Attribution Badge */}
        <div className="absolute bottom-4 right-4 bg-pink-900/80 px-3 py-1 rounded-full text-xs text-pink-100">
          Photo by Inclusive Educators
        </div>
      </div>
    </div>

    </>
  );
};

export default SpecialNeedsLanding;