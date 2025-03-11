import Link from 'next/link'
import React from 'react'

const Questions = () => {
    return (
        <div>
            <hr className="my-[4.5%] w-full border-gray-200" />
            <div className="pb-12">
                <h3 className="text-2xl text-[#1E0A3C] font-semibold">Still have questions?</h3>
                <Link href="/contact" className="mt-4 inline-block px-8 py-2 bg-[#FEBE20] text-white rounded-md hover:bg-[#fedd20] transition">Contact us</Link>
            </div>

        </div>
    )
}

export default Questions