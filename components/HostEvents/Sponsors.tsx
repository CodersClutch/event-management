import React from 'react';
import { categories2, sponsors } from '@/constants';

const Sponsors = () => {
    return (
        <div className="py-6 px-8 space-y-8">
            {/* Categories Section */}
            <section>
                <h2 className="text-xl font-bold text-gray-800 uppercase mb-4">
                    Categories
                </h2>
                <div className="flex flex-wrap gap-2">
                    {categories2.map((category, index) => (
                        <button
                            key={index}
                            className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 hover:bg-yellow-300 hover:text-gray-900 transition-colors"
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Sponsors;
