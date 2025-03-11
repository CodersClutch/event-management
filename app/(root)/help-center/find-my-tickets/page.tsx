import Questions from '@/components/nav-links/Help-center/Questions'
import TicketBanner from '@/components/nav-links/Help-center/TicketBanner'
import TicketInfo from '@/components/nav-links/Help-center/TicketInfo'
import React from 'react'

const page = () => {
  return (
    <div className='pt-[8%] px-[3.5%]'>
        <TicketBanner />
        <TicketInfo />
        <Questions/>
    </div>
  )
}

export default page