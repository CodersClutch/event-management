import ContactTicketsSales from '@/components/nav-links/contact-sales/ContactTicketsSales'
import React from 'react'

const page = () => {
  return (
    <div className='px-4 lg:px-16'>
      <ContactTicketsSales />
      <div className='flex justify-center items-center flex-row pb-16 gap-10'>
        <div className='flex bg-yellow-500 rounded-lg shadow-lg p-5 text-center flex-col justify-center items-center flex-1'>
          <h1 className='font font-extrabold text-5xl'>200M+</h1>
          <p className='text-lg mt-2'>searches from people looking for things to do on Eventbrite in 2022</p>
        </div>
        <div className='flex bg-yellow-500 rounded-lg shadow-lg p-5 text-center flex-col items-center flex-1'>
          <h1 className='font font-extrabold text-5xl'>30%</h1>
          <p className='text-lg mt-2'>of total tickets sold are driven by Eventbrite discovery</p>
        </div>
        <div className='flex bg-yellow-500 rounded-lg shadow-lg p-5 text-center flex-col items-center flex-1'>
          <h1 className='font font-extrabold text-5xl'>2X</h1>
          <p className='text-lg mt-2'>more the consumer reach of our closest competitor</p>
        </div>
      </div>
    </div>
  )
}

export default page
