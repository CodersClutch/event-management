"use client";

import { useState } from "react";
import { DollarSign, Ticket, User, FileText } from 'lucide-react';

const tabsData = [
    {
        title: "Buy and register",
        icon: <DollarSign className="w-4 h-4 inline-block mr-2" />,
        content: (
            <div>
                <h2 className="text-[1.4rem] text-[#13002D] font-semibold mb-4">Browse and find events</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>Use the search bar to find events by name, category, or location.</p>
                    <p>Filter events based on date, type, or popularity to refine your search.</p>
                    <p>Check event details, including venue, time, and ticket availability.</p>
                    <p>Save events to your wishlist for easy access later.</p>
                </div>

                <h2 className="text-[1.4rem] text-[#13002D] font-semibold my-4">Select your ticket</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>Choose from different ticket types such as General, VIP, or Early Bird.</p>
                    <p>Check ticket availability and pricing before proceeding.</p>
                </div>

                <h2 className="text-[1.4rem] text-[#13002D] font-semibold my-4">Secure Your Spot</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>Click the "Register" or "Buy Ticket" button to proceed with your booking.</p>
                    <p>Provide necessary details like name, email, and contact information.</p>
                </div>

                <h2 className="text-[1.4rem] text-[#13002D] font-semibold my-4"> Make Payment</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>Select a payment method such as credit card, PayPal, or mobile wallet.</p>
                    <p>Ensure payment details are accurate before confirming the transaction.</p>
                </div>

                <h2 className="text-[1.4rem] text-[#13002D] font-semibold my-4">Get Your Confirmation</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>Receive an email confirmation with your ticket details and QR code.</p>
                    <p>Save or print your ticket for event entry.</p>
                </div>
            </div>
        ),
    },
    {
        title: "Your tickets",
        icon: <Ticket className="w-4 h-4 inline-block mr-2" />,
        content: (
            <div>
                <h2 className="text-[1.4rem] text-[#13002D] font-semibold mb-4">Access Your Tickets</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>Go to your account dashboard to view purchased tickets.</p>
                    <p>Find tickets under the "My Tickets" section for upcoming and past events.</p>
                </div>
    
                <h2 className="text-[1.4rem] text-[#13002D] font-semibold my-4">Download or Print</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>Download your ticket as a PDF or view it digitally.</p>
                    <p>Print the ticket if required for event entry.</p>
                </div>
    
                <h2 className="text-[1.4rem] text-[#13002D] font-semibold my-4">Ticket QR Code</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>Each ticket has a unique QR code for verification at the venue.</p>
                    <p>Ensure your QR code is visible on your phone for easy check-in.</p>
                </div>
    
                <h2 className="text-[1.4rem] text-[#13002D] font-semibold my-4">Transfer or Resell</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>If allowed, transfer your ticket to a friend by entering their details.</p>
                    <p>Some events offer a resale option if you can no longer attend.</p>
                </div>
    
                <h2 className="text-[1.4rem] text-[#13002D] font-semibold my-4">Event Reminders</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>Receive email or app notifications before the event date.</p>
                    <p>Get notified of any last-minute changes to the event schedule.</p>
                </div>
            </div>
        ),
    },
    {
        title: "Your account",
        icon: <User className="w-4 h-4 inline-block mr-2" />,
        content: (
            <div>
                <h2 className="text-[1.4rem] text-[#13002D] font-semibold mb-4">Manage Your Profile</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>Update your personal information, including name, email, and phone number.</p>
                    <p>Upload or change your profile picture for a personalized experience.</p>
                </div>
    
                <h2 className="text-[1.4rem] text-[#13002D] font-semibold my-4">Security and Privacy</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>Change your password or enable two-factor authentication (2FA) for added security.</p>
                    <p>Manage account privacy settings, including visibility and notification preferences.</p>
                </div>
    
                <h2 className="text-[1.4rem] text-[#13002D] font-semibold my-4">Payment Methods</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>Save and manage your preferred payment methods for faster checkouts.</p>
                    <p>View transaction history and receipts for all your purchases.</p>
                </div>
    
                <h2 className="text-[1.4rem] text-[#13002D] font-semibold my-4">Event Preferences</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>Customize your event interests to receive personalized recommendations.</p>
                    <p>Subscribe or unsubscribe from event notifications and newsletters.</p>
                </div>
    
                <h2 className="text-[1.4rem] text-[#13002D] font-semibold my-4">Account Support</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>Contact support for assistance with account-related issues.</p>
                    <p>Request account deletion or data export if needed.</p>
                </div>
            </div>
        ),
    },
    {
        title: "Terms and policies",
        icon: <FileText className="w-4 h-4 inline-block mr-2" />,
        content: (
            <div>
                <h2 className="text-[1.4rem] text-[#13002D] font-semibold mb-4">Terms of Service</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>By using our platform, you agree to comply with our terms and conditions.</p>
                    <p>Unauthorized use, fraud, or violation of our policies may result in account suspension.</p>
                </div>
    
                <h2 className="text-[1.4rem] text-[#13002D] font-semibold my-4">Privacy Policy</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>We collect and store user data to improve your experience while ensuring privacy.</p>
                    <p>Review how we use, protect, and share your information.</p>
                </div>
    
                <h2 className="text-[1.4rem] text-[#13002D] font-semibold my-4">Refund and Cancellation</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>Understand our refund policies for ticket cancellations or event changes.</p>
                    <p>Some events may have a no-refund policy, so check before purchasing.</p>
                </div>
    
                <h2 className="text-[1.4rem] text-[#13002D] font-semibold my-4">User Responsibilities</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>Users must provide accurate information and follow event guidelines.</p>
                    <p>Any misuse of the platform or violation of event rules may lead to penalties.</p>
                </div>
    
                <h2 className="text-[1.4rem] text-[#13002D] font-semibold my-4">Policy Updates</h2>
                <div className="text-[0.9rem] text-blue-600 space-y-2">
                    <p>We may update our terms and policies periodically to comply with legal requirements.</p>
                    <p>Users will be notified of major updates that affect their rights and responsibilities.</p>
                </div>
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
                    <h1 className="text-[#1E0A3C] text-[1.17rem] font-semibold mb-4">
                        Attending an event topics
                    </h1>
                    {tabsData.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`w-full text-left py-2 px-2 text-[0.9rem] text-blue-600 flex gap-1 items-center ${activeTab === index ? "font-semibold" : ""
                                }`}
                        >
                            {tab.icon} {tab.title}
                        </button>
                    ))}
                </div>

                {/* Right column (content) */}
                <div className="w-3/4 pl-6">{tabsData[activeTab].content}</div>
            </div>
        </div>
    );
};

export default BrowseMotherPage;