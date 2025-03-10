import React from 'react';
import Image from 'next/image';
import School from '@/components/alpha/School';

const HomeschoolLanding = () => {
  return (
    <>    <div className="relative h-[80vh] min-h-[400px] flex flex-col md:flex-row border-b border-green-800">
      {/* Content Section */}
      <div className="md:w-1/2 p-6 md:p-12 bg-green-900 flex items-center">
        <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Empower Your Homeschool Journey With
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-300 mt-2">
              Tailored Resources
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-green-100 font-light">
            Access curriculum guides, activities, and support for homeschooling families.
          </p>

        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 relative h-[200px] md:h-auto">
        <Image 
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920"
          alt="Homeschooling"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        {/* Image Attribution Badge */}
        <div className="absolute bottom-4 right-4 bg-green-900/80 px-3 py-1 rounded-full text-xs text-green-100">
          Photo by Homeschool Families
        </div>
      </div>
    </div>


      <div className="pt-16 pb-16">
        <School />
      </div>

    </>

  );
};

export default HomeschoolLanding;