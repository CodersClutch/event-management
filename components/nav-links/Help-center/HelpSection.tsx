import { useState } from 'react';
import { Search } from 'lucide-react';

const HelpSection = () => {
    const [search, setSearch] = useState('');
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">How can we help?</h1>
            <div className="relative mt-6 w-full max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Search help articles"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 text-gray-900 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
            </div>
        </section>
    )
}

export default HelpSection