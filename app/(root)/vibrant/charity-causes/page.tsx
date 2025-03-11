import React from 'react'
import Image from 'next/image'
import Attraction from '@/components/alpha/Attraction'
import Charity from '@/components/alpha/Charity'

const CharityLanding = () => {
  return (
    <>
    <div className="relative h-[80vh] min-h-[400px] flex flex-col md:flex-row border-b border-emerald-800">
      {/* Content Section */}
      <div className="md:w-1/2 p-6 md:p-12 bg-emerald-900 flex items-center">
        <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Creating Lasting Change Through
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300 mt-2">
              Collective Action
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-emerald-100 font-light">
            Join our movement to empower communities and drive sustainable impact. 
            Your support fuels education, healthcare, and environmental initiatives worldwide.
          </p>

        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 relative h-[200px] md:h-auto">
        <Image 
          src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920"
          alt="Community empowerment"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        {/* Image Attribution Badge */}
        <div className="absolute bottom-4 right-4 bg-emerald-900/80 px-3 py-1 rounded-full text-xs text-emerald-100">
          Photo by Community Volunteers
        </div>
      </div>

    </div>
    <div className="pt-16 pb-16">
        <Charity />
      </div>

    </>
  )
}

export default CharityLanding