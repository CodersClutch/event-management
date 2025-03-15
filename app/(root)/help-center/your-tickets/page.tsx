import BrowseMotherPage from '@/components/nav-links/Help-center/BrowseMotherPage'
import Questions from '@/components/nav-links/Help-center/Questions'
import TicketBanner from '@/components/nav-links/Help-center/TicketBanner'
import React from 'react'

const page = () => {
  return (
    <div className='pt-[8%] px-[3.5%]'>
        <TicketBanner title='Your tickets' />
        <BrowseMotherPage />
        <Questions />
    </div>
  )
}

export default page