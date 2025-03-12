import React from 'react';

interface TicketBannerProps {
    title: string;
}

const TicketBanner: React.FC<TicketBannerProps> = ({ title }) => {
    return (
        <div className="px-6 pt-[4%] pb-[2%]">
            <h2 className="text-4xl text-[#1E0A3C] font-bold mb-4">{title}</h2>
            <hr className="mt-[1%] w-full border-gray-200" />
        </div>
    );
};

export default TicketBanner;