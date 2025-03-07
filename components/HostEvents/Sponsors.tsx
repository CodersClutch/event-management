import React from 'react';
import Image from 'next/image';
import { categories2, sponsors } from '@/constants';

const Sponsors = () => {

    return (
        <div className="py-6 px-8">
            {/* Top Sponsors Section */}
            <h2 className="text-[1.2rem] text-[#18212C] font-bold mb-4 uppercase">Top Sponsors</h2>
            <div className="flex space-x-3 mb-6">
                {sponsors.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt={`Sponsor ${index + 1}`}
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full cursor-pointer object-cover"
                    />
                ))}
            </div>

            {/* Categories Section */}
            <h2 className="text-[1.18rem] text-[#18212C] font-bold mb-4 uppercase">Categories</h2>
            {categories2.map((category, index) => (
                <p key={index} className="text-[#847577] hover:text-[#B936B6] mb-1 cursor-pointer transition-all duration-500  ease-in-out">{category}</p>
            ))}
        </div>
    );
};

export default Sponsors;
