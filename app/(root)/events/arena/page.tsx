import React from "react";
import Image from "next/image";
import { categories } from "@/constants";
import Link from "next/link";
import Arena from "@/components/TopCategories/Arena";

const imageUrl = "https://img.freepik.com/free-photo/red-empty-old-plastic-seats-stadium_1150-5283.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid"
const Page = () => {
  return (
    <div className="bg-[#2f2a30] space-y-50">
      {/* mini hero */}
      <div className="pt-[170px] p-4 flex text-white flex-row justify-between px-[120px] items-center">
        <div className="space-y-4">
          <h1 className="text-5xl uppercase font-semibold leading-tight">
            Main Arena
          </h1>
          <p className="text-sm font-semibold max-w-sm">
            Experience the thrill of live events at the Main Arena! From
            electrifying concerts and exhilarating sports matches to captivating
            performances and grand spectacles, the Main Arena is your ultimate
            destination for unforgettable entertainment.{" "}
          </p>
        </div>
        <div className="relative w-[500px] h-[300px] rounded-lg overflow-hidden">
          <Image
            className="object-cover"
            src={imageUrl}
            alt="All Ages Event"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/*next tabs*/}
      <div className="bg-white mx-36 p-2 mt-[70px] rounded-[28px] shadow-[0_0px_100px_rgba(0,191,255,0.5)]">
        <p className="capitalize flex items-center justify-center pb-4 pt-4 text-3xl font-semibold">
          Explore other exciting categories
        </p>
        <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 mx-auto max-w-7xl pb-4">
          {categories.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="flex hover:text-[#D942D6] group transition-all duration-500 scale-105 ease-in-out items-center justify-center flex-col space-y-2"
            >
              <div className="flex">
                <Image
                  src={item.icon}
                  alt={item.Label}
                  width={40}
                  height={40}
                  className=""
                />
              </div>
              <h3 className="text-sm group-hover:scale-105 transition-all">
                {item.Label}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      <div className="pt-16 pb-16">
        <Arena />
      </div>
    </div>
  );
};

export default Page;
