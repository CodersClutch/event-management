import React from "react";
import Image from "next/image";
import Attraction from "@/components/alpha/Attraction";

const imageUrl = "https://img.freepik.com/free-photo/brave-girl-having-fun-adventure-park_23-2149033189.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid";

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
                <h2 className="text-4xl font-bold">Best Events Under <br />  <span className="text-5xl">&quot;Attractions&quot;</span></h2>
                <p className="text-sm ma">Discover a wide range of exciting events and attractions that will captivate your senses and spark your curiosity. From thrilling live performances and immersive cultural festivals to awe-inspiring exhibits and family-friendly activities, there’s something for everyone to enjoy. Explore vibrant atmospheres, experience unique traditions, and make lasting memories at some of the most popular attractions in the area.</p>

              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Attraction Section */}
      <div className="pt-16 pb-16">
        <Attraction />
      </div>
    </div>
  );
};

export default Page;