import React from "react";
import Image from "next/image";
import Attraction from "@/components/alpha/Attraction";
import Birthdays from "@/components/alpha/Birthdays";

const imageUrl =
  "https://img.freepik.com/premium-photo/beautiful-colourful-ballon-different-thing-with-ballon_1327046-642.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid";

const Page = () => {
  return (
    <div className="space-y-50">
      {/* Enhanced Hero Section */}
      <div className="pt-[170px] px-4 flex justify-center">
        <div className="relative w-full max-w-[2000px] mx-[120px] h-[390px] rounded-2xl overflow-hidden">
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
                  <span className="text-5xl">&quot;Birthdays&quot;</span>
                </h2>
                <p className="text-sm ma">
                  Celebrate your special day in style with unforgettable
                  birthday events tailored just for you! Whether you&apos;re planning
                  an intimate gathering or an extravagant party, we offer a
                  variety of exciting activities, venues, and entertainment
                  options to make your celebration truly memorable. From themed
                  parties and fun games to delicious food and personalized
                  experiences, we ensure every moment is filled with joy and
                  laughter as you mark another amazing year of life!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attraction Section */}
      <div className="pt-16 pb-16">
        <Birthdays />
      </div>
    </div>
  );
};

export default Page;
