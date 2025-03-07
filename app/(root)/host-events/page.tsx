import EventCards from '@/components/HostEvents/EventCards'
import React from 'react'

const page = () => {
  return (
    <div className='pt-[10%]'>
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-2 border-r">
                {/* image listing */}
                <EventCards />
            </div>

            <div className="col-span-1">
                {/* top sponsors and  categories */}

            </div>
        </div>
    </div>
  )
}

export default page