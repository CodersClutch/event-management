import React from 'react';
import Image from 'next/image';

const TutoringLanding = () => {
  return (
<>
    <div className="relative h-[80vh] min-h-[400px] flex flex-col md:flex-row border-b border-yellow-800">
      {/* Content Section */}
      <div className="md:w-1/2 p-6 md:p-12 bg-yellow-900 flex items-center">
        <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Achieve Academic Success With
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-300 mt-2">
              Expert Tutoring
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-yellow-100 font-light">
            Get personalized support and test prep to reach your academic goals.
          </p>

        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 relative h-[200px] md:h-auto">
        <Image 
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920"
          alt="Tutoring and test prep"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        {/* Image Attribution Badge */}
        <div className="absolute bottom-4 right-4 bg-yellow-900/80 px-3 py-1 rounded-full text-xs text-yellow-100">
          Photo by Academic Tutors
        </div>
      </div>
    </div>


    </>
  );
};

export default TutoringLanding;