import React from "react";
import Image from "next/image";
import Attraction from "@/components/alpha/Attraction";
import Birthdays from "@/components/alpha/Birthdays";
import Workshops from "@/components/alpha/Workshops";
import Deals from "@/components/alpha/Deals";

const imageUrl =
  "https://img.freepik.com/premium-photo/closeup-portrait-beautiful-shocked-mad-young-woman_93675-75259.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid";

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
                  Special Deals Just for you <br />{" "}
                  Find offers, discounts, and deals all in one place
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attraction Section */}
      <div className="pt-16 pb-16">
        <Deals />
      </div>
    </div>
  );
};

export default Page;
