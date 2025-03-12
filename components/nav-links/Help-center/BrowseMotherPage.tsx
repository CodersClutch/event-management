"use client"

import { useState } from 'react'

const tabsData = [
    {
        title: "Buy and register",
        content: (
            <div>
                <h2 className="text-[1.4rem] text-[#13002D] font-semibold mb-4">Browse and find events</h2>
                <p>Content for “Buy and register” goes here.</p>
            </div>
        ),
    },
    {
        title: "Your tickets",
        content: (
            <div>
                <h2 className="text-xl font-semibold mb-4">Your tickets</h2>
                <p>Content for “Your tickets” goes here.</p>
            </div>
        ),
    },
    {
        title: "Your account",
        content: (
            <div>
                <h2 className="text-xl font-semibold mb-4">Your account</h2>
                <p>Content for “Your account” goes here.</p>
            </div>
        ),
    },
    {
        title: "Terms and policies",
        content: (
            <div>
                <h2 className="text-xl font-semibold mb-4">Terms</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Eventbrite Terms of Service</li>
                    <li>Eventbrite Ads Terms and Conditions</li>
                    <li>Argentine Consumer Amendments</li>
                    <li>Eventbrite Australian Consumer Amendments</li>
                    <li>Brazil Consumer Amendments</li>
                    <li>EU Consumer Amendments</li>
                    <li>Can Eventbrite sign an agreement outside the Terms of Service?</li>
                    <li>API Terms of Use</li>
                    <li>Solutions Addendum</li>
                    <li>Amendment to Terms of Service that Apply to Federal Agencies</li>
                    <li>Organizer Terms</li>
                    <li>SMS Terms of Service</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-4">Policies</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Eventbrite Trademark &amp; Copyright Policy</li>
                </ul>
            </div>
        ),
    },
];

const BrowseMotherPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="mx-auto px-[1.5%]">
            <div className="flex gap-x-20">
                {/* Left column (tabs) */}
                <div className="w-1/4 pr-4 space-y-2">
                    <h1 className="text-[#1E0A3C] text-[1.17rem] font-semibold mb-4">Attending an event topics</h1>
                    {tabsData.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`block w-full text-left py-2 px-2 text-[0.9rem] text-blue-600 ${activeTab === index ? "font-semibold" : ""
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* Right column (content) */}
                <div className="w-3/4 pl-6">
                    {tabsData[activeTab].content}
                </div>
            </div>
        </div>
    );

}

export default BrowseMotherPage