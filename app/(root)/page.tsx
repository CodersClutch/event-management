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
      <div className="grid  md:grid-cols-7 sm:grid-cols-3 grid-cols-3 max-w-7xl mx-auto">
        {categories.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="flex hover:text-[#D942D6] group  items-center justify-center flex-col space-y-2"
          >
            <div className="flex group items-center bg-gradient-to-b hover:bg-gradient-to-t from-[#ffff] hover:from-[#A22D9E] hover:to-[#F34CF1] to-[#ffff]  shadow-md transition-all duration-1000 ease-in-out   border-purple-400-100 rounded-md p-5 justify-center border">
              <Image
                src={item.icon}
                alt={item.Label}
                width={30}
                height={30}
                className="group-hover:invert group-hover:brightness-0 transition-all duration-500 ease-in-out group-hover:filter"
              />
            </div>
            <h3 className="text-sm">{item.Label}</h3>
          </Link>
        ))}
      </div>

      {/* tabs */}
      <Filtering />

      <div className="bg-[#F8F7FA] max-w-7xl mx-auto">
        <TopDestine />

        <PopularEvents />

        <HowItworks />
        <Testimonials />
      </div>
    </div>
  );
};

export default page;
