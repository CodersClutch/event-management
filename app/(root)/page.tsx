import Advertisement from "@/components/home/Advertisement";
import Filtering from "@/components/home/Filtering";
import Hero from "@/components/home/Hero";
import HowItworks from "@/components/home/HowItworks";
import PopularEvents from "@/components/home/PopularEvents";
import Testimonials from "@/components/home/Testimonials";
import TopDestine from "@/components/home/TopDestine";
import { categories } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      {/* hero */}

      <Hero />

      <Advertisement />

      {/* categories */}
      <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 mx-auto max-w-7xl">
        {categories.map((item, idx) => (
          <Link
            key={idx}
            href="/"
            className="flex  items-center justify-center flex-col space-y-2"
          >
            <div className="flex items-center hover:bg-[#feffde] border  border-blue-100 rounded-full p-10 justify-center">
              <Image src={item.icon} alt={item.Label} width={40} height={40} />
            </div>
            <h3 className="text-sm">{item.Label}</h3>
          </Link>
        ))}
      </div>

      {/* tabs */}
      <Filtering />

      <div className="bg-[#F8F7FA]">
        <TopDestine />

        <PopularEvents />

        <HowItworks />
        <Testimonials />
      </div>
    </div>
  );
};

export default page;
