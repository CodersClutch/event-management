import React from 'react';
import { DollarSign, Ticket, User, FileText } from 'lucide-react';
import Link from 'next/link';
import Questions from './Questions';

const topics = [
  { title: "Buy and register", icon: <DollarSign className="w-6 h-6 text-blue-600" />, link: "/help-center/your-tickets" },
  { title: "Your tickets", icon: <Ticket className="w-6 h-6 text-blue-600" />, link: "/help-center/your-tickets" },
  { title: "Your account", icon: <User className="w-6 h-6 text-blue-600" />, link: "/help-center/your-tickets" },
  { title: "Terms and policies", icon: <FileText className="w-6 h-6 text-blue-600" />, link: "/help-center/your-tickets" }
];

const BrowseByTopic = () => {
  return (
    <div className="px-6 pt-[4.5%] text-center">
      <h2 className="text-2xl text-[#1E0A3C] font-bold mb-6 text-left">Browse by topic</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {topics.map((topic, index) => (
          <Link key={index} href={topic.link} className="flex flex-col items-center p-6 border-2 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="bg-blue-100 p-4 rounded-full mb-2">{topic.icon}</div>
            <span className="text-[#1E0A3C] font-semibold">{topic.title}</span>
          </Link>
        ))}
      </div>
      <Questions />
    </div>
  );
};

export default BrowseByTopic;
