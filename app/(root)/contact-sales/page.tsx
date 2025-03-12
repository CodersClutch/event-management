import ContactTicketsSales from '@/components/nav-links/contact-sales/ContactTicketsSales'
import Image from 'next/image'
import React from 'react'

const page = () => {
  const sponsors = [
    {name: 'Coca-Cola', logo: 'https://eventbrite-s3.s3.us-east-1.amazonaws.com/marketing/landingpages/assets/2025/rebrand/l/contact-eventbrite-sales/trusted-by/a--logo-us-001.png'},
    {name: 'Pepsi', logo: 'https://eventbrite-s3.s3.us-east-1.amazonaws.com/marketing/landingpages/assets/2025/rebrand/l/contact-eventbrite-sales/trusted-by/a--logo-us-002.png'},
    {name: 'Nike', logo: 'https://eventbrite-s3.s3.us-east-1.amazonaws.com/marketing/landingpages/assets/2025/rebrand/l/contact-eventbrite-sales/trusted-by/a--logo-us-003.png'},
    {name: 'Adidas', logo: 'https://eventbrite-s3.s3.us-east-1.amazonaws.com/marketing/landingpages/assets/2025/rebrand/l/contact-eventbrite-sales/trusted-by/a--logo-us-004.png'},
    {name: 'Apple', logo: 'https://eventbrite-s3.s3.us-east-1.amazonaws.com/marketing/landingpages/assets/2025/rebrand/l/contact-eventbrite-sales/trusted-by/a--logo-us-005.png'},
  ]
  return (
    <div className='px-4 lg:px-16'>

      {/* Contact Ticket Sales */}
      <ContactTicketsSales />

      {/* Adverties */}
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

      {/* Sponsor */}
      <div>
      <div className='flex justify-center items-center flex-col py-24 gap-5'>
        <div>
          <h1 className='font-bold text-6xl'>Trusted by</h1>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-5'>
        {sponsors.map((sponsor, index) => (
          <div key={index} className='py-5 flex-1'>
            <Image src={sponsor.logo} alt={sponsor.name} width={200} height={100} />
          </div>
        ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default page
