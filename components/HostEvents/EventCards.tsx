import React from 'react';
import Image from 'next/image';
import { Share, BarChart } from 'lucide-react';

const EventCards = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-8">
                {/* -- Card 1 -- */}
                <div className="bg-white rounded-lg shadow overflow-hidden w-[350px] mx-auto">
                    {/* Top row: Author profile, name, and time below */}
                    <div className="p-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                            <div className="relative w-9 h-9 rounded-full overflow-hidden">
                                <Image
                                    src="https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-head.png"
                                    alt="User Profile"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-[#18212C] text-[1rem]">By John Doe</span>
                                <span className="block text-xs">5 min ago</span>
                            </div>
                        </div>
                    </div>

                    {/* Card Image with Event Name Overlay */}
                    <div className="relative w-full h-48">
                        <Image
                            src="https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-main.jpg"
                            alt="Concert"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                        <div className="absolute bottom-0 left-0 pl-5 pb-4 w-full text-white text-lg font-semibold p-2 text-left">
                            Event Name
                        </div>
                    </div>

                    {/* Card Content */}
                    <div className="py-4">
                        {/* Date, Location, Tickets in a single row with aligned values */}
                        <div className="grid grid-cols-3 gap-2 mb-2 px-4 mt-1">
                            <div className="flex flex-col space-y-2">
                                <span className='font-semibold text-[#18212C]'>Date</span>
                                <span className='text-xs text-[#84759E]'>June 16, 2018</span>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <span className='font-semibold text-[#18212C]'>Location</span>
                                <span className='text-xs text-[#84759E]'>New York</span>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <span className='font-semibold text-[#18212C]'>Tickets</span>
                                <span className='text-xs text-[#84759E]'>Available 26/100</span>
                            </div>
                        </div>

                        {/* Sponsor */}
                        <div className="flex items-center justify-between mt-5 text-sm bg-[#F9F9F9] px-4 py-4">
                            <div className='flex flex-row items-center justify-center gap-3'>
                                <span className="text-[#212529] font-semibold">Sponsor by</span>
                                <div className="flex">
                                    {/* Sponsor images */}
                                    {['https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg',
                                        'https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg',
                                        'https://img.freepik.com/free-photo/medium-shot-woman-relaxing-home_23-2150307065.jpg',
                                        'https://img.freepik.com/free-photo/confident-african-businesswoman-mockup-psd-smiling-closeup-portr_53876-143279.jpg?t=st=1741357796~exp=1741361396~hmac=ee58447796be161f5232ca9646986f7597a6d41d8ad75a0f5b8e3d37e1cf4b40&w=1380'
                                    ].map((src, index) => (
                                        <div key={index} className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden first:ml-0">
                                            <Image src={src} alt={`Sponsor ${index + 1}`} fill className="object-cover rounded-full" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className='text-[#E63632]'>Free</p>
                        </div>
                    </div>

                    {/* Footer: Likes, Comments, Insights */}
                    <div className="px-4 py-3 mt-1 mb-2 flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400 hover:text-red-500" viewBox="0 0 20 20">
                                <path d="M3.172 5.172a4.004 4.004 0 015.656 0L10 6.343l1.172-1.171a4.004 4.004 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                            <span>126</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400 hover:text-blue-500" viewBox="0 0 20 20">
                                <path d="M18 10c0 3.866-3.582 7-8 7-1.15 0-2.256-.216-3.253-.6L3.814 17l1.125-2.996C4.342 13.089 4 11.58 4 10c0-3.866 3.134-7 7-7s7 3.134 7 7z" />
                            </svg>
                            <span>03</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Share className="h-4 w-4 fill-current text-gray-400 hover:text-blue-500" />
                        </div>
                        <button className="flex flex-rowhover:text-gray-700"><span><BarChart className='h-4 w-4 fill-current text-gray-400 hover:text-blue-500' /></span> <span>Insights</span></button>
                    </div>
                </div>

                {/* -- Card 2 -- */}
                <div className="bg-white rounded-lg shadow overflow-hidden w-[350px] mx-auto">
                    {/* Top row: Author profile, name, and time below */}
                    <div className="p-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                            <div className="relative w-9 h-9 rounded-full overflow-hidden">
                                <Image
                                    src="https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-head2.png"
                                    alt="User Profile"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-[#18212C] text-[1rem]">By John Doe</span>
                                <span className="block text-xs">5 min ago</span>
                            </div>
                        </div>
                    </div>

                    {/* Card Image with Event Name Overlay */}
                    <div className="relative w-full h-48">
                        <Image
                            src="https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-main2.jpg"
                            alt="Concert"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                        <div className="absolute bottom-0 left-0 pl-5 pb-4 w-full text-white text-lg font-semibold p-2 text-left">
                            Event Name
                        </div>
                    </div>

                    {/* Card Content */}
                    <div className="py-4">
                        {/* Date, Location, Tickets in a single row with aligned values */}
                        <div className="grid grid-cols-3 gap-2 mb-2 px-4 mt-1">
                            <div className="flex flex-col space-y-2">
                                <span className='font-semibold text-[#18212C]'>Date</span>
                                <span className='text-xs text-[#84759E]'>June 16, 2018</span>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <span className='font-semibold text-[#18212C]'>Location</span>
                                <span className='text-xs text-[#84759E]'>New York</span>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <span className='font-semibold text-[#18212C]'>Tickets</span>
                                <span className='text-xs text-[#84759E]'>Available 26/100</span>
                            </div>
                        </div>

                        {/* Sponsor */}
                        <div className="flex items-center justify-between mt-5 text-sm bg-[#F9F9F9] px-4 py-4">
                            <div className='flex flex-row items-center justify-center gap-3'>
                                <span className="text-[#212529] font-semibold">Sponsor by</span>
                                <div className="flex">
                                    {/* Sponsor images */}
                                    {['https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg',
                                        'https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg',
                                        'https://img.freepik.com/free-photo/medium-shot-woman-relaxing-home_23-2150307065.jpg',
                                        'https://img.freepik.com/free-photo/confident-african-businesswoman-mockup-psd-smiling-closeup-portr_53876-143279.jpg?t=st=1741357796~exp=1741361396~hmac=ee58447796be161f5232ca9646986f7597a6d41d8ad75a0f5b8e3d37e1cf4b40&w=1380'
                                    ].map((src, index) => (
                                        <div key={index} className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden first:ml-0">
                                            <Image src={src} alt={`Sponsor ${index + 1}`} fill className="object-cover rounded-full" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className='text-[#E63632]'>Free</p>
                        </div>
                    </div>

                    {/* Footer: Likes, Comments, Insights */}
                    <div className="px-4 py-3 mt-1 mb-2 flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400 hover:text-red-500" viewBox="0 0 20 20">
                                <path d="M3.172 5.172a4.004 4.004 0 015.656 0L10 6.343l1.172-1.171a4.004 4.004 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                            <span>126</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400 hover:text-blue-500" viewBox="0 0 20 20">
                                <path d="M18 10c0 3.866-3.582 7-8 7-1.15 0-2.256-.216-3.253-.6L3.814 17l1.125-2.996C4.342 13.089 4 11.58 4 10c0-3.866 3.134-7 7-7s7 3.134 7 7z" />
                            </svg>
                            <span>03</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Share className="h-4 w-4 fill-current text-gray-400 hover:text-blue-500" />
                        </div>
                        <button className="flex flex-rowhover:text-gray-700"><span><BarChart className='h-4 w-4 fill-current text-gray-400 hover:text-blue-500' /></span> <span>Insights</span></button>
                    </div>
                </div>

                {/* -- Card 3 -- */}
                <div className="bg-white rounded-lg shadow overflow-hidden w-[350px] mx-auto">
                    {/* Top row: Author profile, name, and time below */}
                    <div className="p-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                            <div className="relative w-9 h-9 rounded-full overflow-hidden">
                                <Image
                                    src="https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-head3.png"
                                    alt="User Profile"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-[#18212C] text-[1rem]">By John Doe</span>
                                <span className="block text-xs">5 min ago</span>
                            </div>
                        </div>
                    </div>

                    {/* Card Image with Event Name Overlay */}
                    <div className="relative w-full h-48">
                        <Image
                            src="https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-main3.jpg"
                            alt="Concert"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                        <div className="absolute bottom-0 left-0 pl-5 pb-4 w-full text-white text-lg font-semibold p-2 text-left">
                            Event Name
                        </div>
                    </div>

                    {/* Card Content */}
                    <div className="py-4">
                        {/* Date, Location, Tickets in a single row with aligned values */}
                        <div className="grid grid-cols-3 gap-2 mb-2 px-4 mt-1">
                            <div className="flex flex-col space-y-2">
                                <span className='font-semibold text-[#18212C]'>Date</span>
                                <span className='text-xs text-[#84759E]'>June 16, 2018</span>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <span className='font-semibold text-[#18212C]'>Location</span>
                                <span className='text-xs text-[#84759E]'>New York</span>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <span className='font-semibold text-[#18212C]'>Tickets</span>
                                <span className='text-xs text-[#84759E]'>Available 26/100</span>
                            </div>
                        </div>

                        {/* Sponsor */}
                        <div className="flex items-center justify-between mt-5 text-sm bg-[#F9F9F9] px-4 py-4">
                            <div className='flex flex-row items-center justify-center gap-3'>
                                <span className="text-[#212529] font-semibold">Sponsor by</span>
                                <div className="flex">
                                    {/* Sponsor images */}
                                    {['https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg',
                                        'https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg',
                                        'https://img.freepik.com/free-photo/medium-shot-woman-relaxing-home_23-2150307065.jpg',
                                        'https://img.freepik.com/free-photo/confident-african-businesswoman-mockup-psd-smiling-closeup-portr_53876-143279.jpg?t=st=1741357796~exp=1741361396~hmac=ee58447796be161f5232ca9646986f7597a6d41d8ad75a0f5b8e3d37e1cf4b40&w=1380'
                                    ].map((src, index) => (
                                        <div key={index} className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden first:ml-0">
                                            <Image src={src} alt={`Sponsor ${index + 1}`} fill className="object-cover rounded-full" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className='text-[#E63632]'>Free</p>
                        </div>
                    </div>

                    {/* Footer: Likes, Comments, Insights */}
                    <div className="px-4 py-3 mt-1 mb-2 flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400 hover:text-red-500" viewBox="0 0 20 20">
                                <path d="M3.172 5.172a4.004 4.004 0 015.656 0L10 6.343l1.172-1.171a4.004 4.004 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                            <span>126</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400 hover:text-blue-500" viewBox="0 0 20 20">
                                <path d="M18 10c0 3.866-3.582 7-8 7-1.15 0-2.256-.216-3.253-.6L3.814 17l1.125-2.996C4.342 13.089 4 11.58 4 10c0-3.866 3.134-7 7-7s7 3.134 7 7z" />
                            </svg>
                            <span>03</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Share className="h-4 w-4 fill-current text-gray-400 hover:text-blue-500" />
                        </div>
                        <button className="flex flex-rowhover:text-gray-700"><span><BarChart className='h-4 w-4 fill-current text-gray-400 hover:text-blue-500' /></span> <span>Insights</span></button>
                    </div>
                </div>

                {/* -- Card 4 -- */}
                <div className="bg-white rounded-lg shadow overflow-hidden w-[350px] mx-auto">
                    {/* Top row: Author profile, name, and time below */}
                    <div className="p-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                            <div className="relative w-9 h-9 rounded-full overflow-hidden">
                                <Image
                                    src="https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-head4.png"
                                    alt="User Profile"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-[#18212C] text-[1rem]">By John Doe</span>
                                <span className="block text-xs">5 min ago</span>
                            </div>
                        </div>
                    </div>

                    {/* Card Image with Event Name Overlay */}
                    <div className="relative w-full h-48">
                        <Image
                            src="https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-main4.jpg"
                            alt="Concert"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                        <div className="absolute bottom-0 left-0 pl-5 pb-4 w-full text-white text-lg font-semibold p-2 text-left">
                            Event Name
                        </div>
                    </div>

                    {/* Card Content */}
                    <div className="py-4">
                        {/* Date, Location, Tickets in a single row with aligned values */}
                        <div className="grid grid-cols-3 gap-2 mb-2 px-4 mt-1">
                            <div className="flex flex-col space-y-2">
                                <span className='font-semibold text-[#18212C]'>Date</span>
                                <span className='text-xs text-[#84759E]'>June 16, 2018</span>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <span className='font-semibold text-[#18212C]'>Location</span>
                                <span className='text-xs text-[#84759E]'>New York</span>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <span className='font-semibold text-[#18212C]'>Tickets</span>
                                <span className='text-xs text-[#84759E]'>Available 26/100</span>
                            </div>
                        </div>

                        {/* Sponsor */}
                        <div className="flex items-center justify-between mt-5 text-sm bg-[#F9F9F9] px-4 py-4">
                            <div className='flex flex-row items-center justify-center gap-3'>
                                <span className="text-[#212529] font-semibold">Sponsor by</span>
                                <div className="flex">
                                    {/* Sponsor images */}
                                    {['https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg',
                                        'https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg',
                                        'https://img.freepik.com/free-photo/medium-shot-woman-relaxing-home_23-2150307065.jpg',
                                        'https://img.freepik.com/free-photo/confident-african-businesswoman-mockup-psd-smiling-closeup-portr_53876-143279.jpg?t=st=1741357796~exp=1741361396~hmac=ee58447796be161f5232ca9646986f7597a6d41d8ad75a0f5b8e3d37e1cf4b40&w=1380'
                                    ].map((src, index) => (
                                        <div key={index} className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden first:ml-0">
                                            <Image src={src} alt={`Sponsor ${index + 1}`} fill className="object-cover rounded-full" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className='text-[#E63632]'>Free</p>
                        </div>
                    </div>

                    {/* Footer: Likes, Comments, Insights */}
                    <div className="px-4 py-3 mt-1 mb-2 flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400 hover:text-red-500" viewBox="0 0 20 20">
                                <path d="M3.172 5.172a4.004 4.004 0 015.656 0L10 6.343l1.172-1.171a4.004 4.004 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                            <span>126</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400 hover:text-blue-500" viewBox="0 0 20 20">
                                <path d="M18 10c0 3.866-3.582 7-8 7-1.15 0-2.256-.216-3.253-.6L3.814 17l1.125-2.996C4.342 13.089 4 11.58 4 10c0-3.866 3.134-7 7-7s7 3.134 7 7z" />
                            </svg>
                            <span>03</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Share className="h-4 w-4 fill-current text-gray-400 hover:text-blue-500" />
                        </div>
                        <button className="flex flex-rowhover:text-gray-700"><span><BarChart className='h-4 w-4 fill-current text-gray-400 hover:text-blue-500' /></span> <span>Insights</span></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EventCards;
