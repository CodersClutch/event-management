import React from 'react';
import { FileText } from 'lucide-react';
import Link from 'next/link';

const FeaturedArticles = () => {
  return (
    <div className="px-6">
      <h2 className="text-2xl text-[#1E0A3C] font-bold mb-4">Featured articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { title: "Find your tickets", link: "/help-center/find-my-tickets" },
          { title: "What is this charge from 4kiddos", link: "/help-center/4kiddo-charge" },
          { title: "Contact the event organizer", link: "/articles/three" },
        ].map((article, index) => (
          <Link 
            key={index} 
            href={article.link}
            className="flex shadow-sm hover:shadow-md transition-all duration-300 ease-in-out items-center px-4 py-7 border-2 border-gray-200 rounded-lg"
          >
            <FileText className="w-9 h-9 text-[#1E0A3C] mr-3" />
            <span className="font-semibold text-[1.1rem] text-[#1E0A3C]">{article.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
