import React from "react";
import Image from "next/image";
import Attraction from "@/components/alpha/Attraction";
import Birthdays from "@/components/alpha/Birthdays";
import Workshops from "@/components/alpha/Workshops";

const imageUrl =
  "https://img.freepik.com/premium-photo/african-businesswoman-leading-workshop-hightech-training-room-with-engaged-participants_220770-39667.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid";

const Page = () => {
  return (
    <div className="space-y-50">
      {/* Enhanced Hero Section */}
      <div className="pt-[170px] px-4 flex justify-center">
        <div className="relative w-full max-w-[2000px] md:mx-[120px] h-[390px] rounded-2xl overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt="Happy family spending time together"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              className="rounded-2xl"
              sizes="(max-width: 768px) 100vw, 80vw"
            />

            {/* Text Overlay */}
            <div className="absolute  inset-0 bg-black/30 flex  items-center rounded-2xl">
              <div className=" text-white space-y-4 max-w-xl p-4">
                <h2 className="text-4xl font-bold">
                  Events Under <br />{" "}
                  <span className="text-5xl ">&quot;Classes & Workshops&quot;</span>
                </h2>
                <p className="text-sm ma">
                  Discover a world of learning and creativity with our diverse range of classes and workshops! Whether you&apos;re looking to develop a new skill, explore a hobby, or enhance your professional expertise, we offer a variety of engaging and interactive sessions designed to inspire and educate. Join us and unlock your potential today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attraction Section */}
      <div className="pt-16 pb-16">
        <Workshops />
      </div>
    </div>
  );
};

export default Page;
