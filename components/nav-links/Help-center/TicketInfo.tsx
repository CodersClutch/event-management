import { Dot } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TicketInfo = () => {
    return (
        <div className='px-[1.5%]'>
            <div className="grid grid-cols-3">
                <div className='col-span-2'>
                    <p className='text-[#585163] text-[0.9rem]'>When you order tickets on Eventbrite, an account is created using the email address you enter during checkout. To access your tickets, log in to the Eventbrite app or website using the email on your order. Then, go to Tickets.</p>
                </div>
                <div className='col-span-1'>

                </div>
            </div>
            <div className='mt-5'>
                <h2 className='font-semibold text-2xl'>In this article</h2>
                <ul className='pl-5 mt-4 text-blue-600 text-[0.9rem]'>
                    <li><Link href="#">Where to find your tickets</Link></li>
                    <li><Link href="#">If you’re unable to log in</Link></li>
                    <li><Link href="#">If your tickets are missing</Link></li>
                </ul>
            </div>
            <div className='mt-5'>
                <h2 className='font-semibold text-2xl'>Where to find your tickets</h2>
                <p className='mt-4 text-[0.9rem] text-[#585163]'>Your tickets can be found by logging in to your Eventbrite account using the Eventbrite app or website.</p>
                <p className='mt-4 text-[0.9rem] text-[#585163]'><span className='font-semibold text-gray-500'>The 4kiddos website:</span> Log in and go to <span className='text-blue-600'><Link href="#">Tickets</Link></span>.</p>
            </div>

            <div className='mt-5'>
                <h2 className='font-semibold text-2xl'>If you’re unable to log in</h2>
                <p className='mt-4 text-[0.9rem] text-[#585163]'>During checkout, Eventbrite creates an account for you using the email address you provide. If you’ve logged in previously and are <br /> having trouble, you might need to <span className='text-blue-600'><Link href="#">reset your password</Link></span>.</p>
                <p className='mt-4 text-[0.9rem] text-[#585163]'>If you've never logged in:</p>
                <ol className="mt-4 pl-5 text-[0.9rem] text-[#585163]">
                    <li className='mt-4'>1. <span className='text-blue-600'>Verify your email address</span>. Enter the email address associated with your tickets and select Continue.</li>
                    <li className='mt-4'>2. Check your email for a message from noreply@event.eventbrite.com, with the subject line: Activate your Eventbrite account.</li>
                    <li className='mt-4'>3. Open the email and select Set a password.</li>
                    <li className='mt-4'>4. Enter your desired password and select Update password.</li>
                    <li className='mt-4'>5. Accept the Terms and Conditions.</li>
                </ol>
                <p className="mt-4 text-[0.9rem] text-[#585163]">Once you’ve verified your email address, you’ll be taken to Tickets in your Eventbrite account, where you can access and manage your <br /> order.</p>
            </div>

            <div className='mt-5'>
                <h2 className='font-semibold text-2xl'>If your tickets are missing</h2>
                <p className='mt-4 text-[0.9rem] text-[#585163]'>There are a few reasons tickets might not appear in your Eventbrite account:</p>
                <ol className="mt-4 pl-5 text-[0.9rem] text-[#585163]">
                    <li className='mt-4 flex items-center text-[0.9rem]'><Dot className='w-7 h-7' /> Different email address: You’re logged into Eventbrite using a different email address than the one you used to place the order.</li>
                    <li className='mt-4 flex items-center text-[0.9rem]'><Dot className='w-7 h-7' /> Typo in your email address: The email address on your order was misspelled during checkout.</li>
                    <li className='mt-4 flex items-center text-[0.9rem]'><Dot className='w-7 h-7' /> The organizer disabled PDF tickets: The order appears in your Eventbrite account, but there is no option to download tickets.</li>
                </ol>
                <p className="mt-4 text-[0.9rem] text-[#585163]">If you’re in the United States, you can use the Find tickets form for help accessing your tickets. Otherwise, contact the event organizer <br /> for assistance.</p>
            </div>
        </div>
    )
}

export default TicketInfo