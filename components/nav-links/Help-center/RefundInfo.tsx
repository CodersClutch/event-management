import { Dot, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const RefundInfo = () => {
    return (
        <div className='px-[1.5%]'>
            <div className="grid grid-cols-3">
                <div className='col-span-2'>
                    <p className='text-[#585163] text-[0.9rem]'>Third-party event organizers create and manage the events on Eventbrite. They’re responsible for setting their own refund policies and issuing refunds. If you want a refund for your tickets, send a request to the event organizer.</p>
                </div>
                <div className='col-span-1 flex justify-center'>
                    <div className='border border-gray-200 rounded-md shadow-sm pr-3 py-4 grid grid-cols-3 gap-1'>
                        <div className="col-span-1 flex justify-center"><User className='w-11 h-11 text-blue-600' /></div>
                        <div className="col-span-2">
                            <h2 className='text-xl font-semibold text-[#1E0A3C]'>Get help faster</h2>
                            <p className='text-[#585163] text-[0.9rem] mt-5'>Log in for resources tailored to <br /> your account, tickets, and events.</p>
                            <button><Link href="#" className='mt-3 inline-block px-8 py-2 bg-[#FEBE20] text-white rounded-md hover:bg-[#fedd20] transition'>Log in</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='font-semibold text-2xl'>In this article</h2>
                <ul className='pl-5 mt-4 text-blue-600 text-[0.9rem]'>
                    <li><Link href="#">Request a refund directly from your Eventbrite account</Link></li>
                    <li><Link href="#">Refunds for postponed or cancelled events</Link></li>
                </ul>
            </div>
            <div className='mt-5'>
                <h2 className='font-semibold text-2xl'>Request a refund directly from your Eventbrite account</h2>
                <p className='mt-4 text-[0.9rem] text-[#585163]'>Eventbrite automatically creates an account with the email address you use to purchase tickets. If the event organizer allows refund <br /> requests for the event you purchased tickets for, you’ll see the option to request a refund in your account:</p>
                <ol className="mt-4 pl-5 text-[0.9rem] text-[#585163]">
                    <li className='mt-4'>1. <span className='text-blue-600'><Link href="#">log in</Link></span> to 4kiddos</li>
                    <li className='mt-4'>2. Go to Tickets.</li>
                    <li className='mt-4'>3. Find the order you want refunded, then select <span className='font-semibold'>Request a refund</span>.</li>
                    <li className='mt-4'>4. Enter your details and submit your request. The organizer should respond within five business days. </li>
                </ol>
                <p className="mt-4 text-[0.9rem] text-[#585163]">Select <span className='font-semibold'>Contact the organizer</span> if you don’t see the option to request a refund or you have a question about the status of your refund <br /> request.</p>
            </div>
            <div className='mt-5'>
                <h2 className='font-semibold text-2xl'>Refunds for postponed or cancelled events</h2>
                <p className='mt-4 text-[0.9rem] text-[#585163]'>Eventbrite requires event organizers to approve refund requests in certain situations. If the organizer denies your refund request, or if <br /> you don’t receive a response, check if your order meets one of these refund qualifications:</p>
                <ol className="mt-4 pl-5 text-[0.9rem] text-[#585163]">
                    <li className='mt-4 flex items-center text-[0.9rem]'><Dot className='w-7 h-7' /> The event was cancelled within the last 45 days.</li>
                    <li className='mt-4 flex items-center text-[0.9rem]'><Dot className='w-7 h-7' /> The event has been postponed for more than 90 days without a new date scheduled.</li>
                </ol>
                <p className="mt-4 text-[0.9rem] text-[#585163]">If your order qualifies, you have 45 days and until the event is rescheduled to contact Eventbrite through the <span className='text-blue-600'><Link href="#">Attendee Refund Request <br /> form</Link></span>. Eventbrite can only refund payments processed using Eventbrite Payment Processing (your bank statement would say EB [event <br /> title] SAN FRANCISCO CA).</p>
                <p className="mt-4 text-[0.9rem] text-[#585163]">Eventbrite is unable to issue refunds outside of these circumstances. If your order doesn’t qualify for a refund, <span className='text-blue-600'><Link href="#">contact organizer</Link></span> for <br /> further help.</p>
            </div>
        </div>
    )
}

export default RefundInfo