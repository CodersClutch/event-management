import ContactTicketsSales from "@/components/nav-links/contact-sales/ContactTicketsSales";
import Image from "next/image";
import React from "react";

const page = () => {
  const sponsors = [
    {
      name: "Coca-Cola",
      logo: "https://eventbrite-s3.s3.us-east-1.amazonaws.com/marketing/landingpages/assets/2025/rebrand/l/contact-eventbrite-sales/trusted-by/a--logo-us-001.png",
    },
    {
      name: "Pepsi",
      logo: "https://eventbrite-s3.s3.us-east-1.amazonaws.com/marketing/landingpages/assets/2025/rebrand/l/contact-eventbrite-sales/trusted-by/a--logo-us-002.png",
    },
    {
      name: "Nike",
      logo: "https://eventbrite-s3.s3.us-east-1.amazonaws.com/marketing/landingpages/assets/2025/rebrand/l/contact-eventbrite-sales/trusted-by/a--logo-us-003.png",
    },
    {
      name: "Adidas",
      logo: "https://eventbrite-s3.s3.us-east-1.amazonaws.com/marketing/landingpages/assets/2025/rebrand/l/contact-eventbrite-sales/trusted-by/a--logo-us-004.png",
    },
    {
      name: "Apple",
      logo: "https://eventbrite-s3.s3.us-east-1.amazonaws.com/marketing/landingpages/assets/2025/rebrand/l/contact-eventbrite-sales/trusted-by/a--logo-us-005.png",
    },
  ];

  return (
    <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Contact Ticket Sales */}
      <ContactTicketsSales />

      {/* Adverties */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 py-8 md:py-16">
        <div className="bg-yellow-500 rounded-lg shadow-lg p-5 text-center w-full md:w-1/3">
          <h1 className="font-extrabold text-4xl sm:text-5xl">200M+</h1>
          <p className="text-base sm:text-lg mt-2">
            searches from people looking for things to do on Eventbrite in 2022
          </p>
        </div>
        <div className="bg-yellow-500 rounded-lg shadow-lg p-5 text-center w-full md:w-1/3">
          <h1 className="font-extrabold text-4xl sm:text-5xl">30%</h1>
          <p className="text-base sm:text-lg mt-2">
            of total tickets sold are driven by Eventbrite discovery
          </p>
        </div>
        <div className="bg-yellow-500 rounded-lg shadow-lg p-5 text-center w-full md:w-1/3">
          <h1 className="font-extrabold text-4xl sm:text-5xl">2X</h1>
          <p className="text-base sm:text-lg mt-2">
            more the consumer reach of our closest competitor
          </p>
        </div>
      </div>

      {/* Sponsor */}
      <div className="py-12 md:py-24">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center">
            Trusted by
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={200}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
