import RefundInfo from '@/components/nav-links/Help-center/RefundInfo'
import TicketBanner from '@/components/nav-links/Help-center/TicketBanner'
import React from 'react'

const page = () => {
  return (
    <div className='pt-[8%] px-[3.5%]'>
        <TicketBanner title="Request a refund" />
        <RefundInfo />
    </div>
  )
}

export default page