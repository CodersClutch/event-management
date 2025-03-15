import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaWhatsapp } from "react-icons/fa";
import { BiLink } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#A52EA1] to-[#E848E5] text-white  md:rounded-md py-12">
      <div className="container flex mx-auto max-md:hidden justify-between items-center max-w-[85rem] gap-16 text-center ">
        {/* QR Code and App Download Section */}
        <div className="bg-gradient-to-b from-[#E848E5] to-[#A52EA1] flex flex-col items-center p-6 rounded-lg text-white">
          <div className="bg-white bg-opacity-30 rounded-2xl p-4 w-full max-w-lg md:max-w-xl lg:max-w-[25rem]">
            <div className="flex flex-col md:flex-row items-center justify-center">
              {/* QR Code */}
              <div className="mb-4 md:mb-0 md:mr-4">
                <Image
                  src="https://oneworldfinancials.com/h1_img8.jpg"
                  alt="Scan QR code to download OneWorld Wallet"
                  width={320}
                  height={160}
                  className="w-80 h-40"
                />
              </div>

              {/* App Download Links */}
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-center mb-4">
                  Scan QR code to download (Coming Soon)
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="flex items-center">
                    <Image
                      src="https://oneworldfinancials.com/_next/static/media/Remit16.b0e7c27a.svg"
                      alt="Available on the App Store"
                      width={120}
                      height={40}
                    />
                  </a>
                  <a href="#" className="flex items-center">
                    <Image
                      src="https://oneworldfinancials.com/_next/static/media/Remit17.29e75541.svg"
                      alt="Get it on Google Play"
                      width={120}
                      height={40}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-24">
          {/* Company Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-bold whitespace-nowrap">Our popular Categories</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { title: "Education", link: "/vibrant/educational" },
                { title: "Charity and Causes", link: "/vibrant/charity-causes" },
                { title: "Special Deals", link: "/events/deals" },
                { title: "All ages", link: "/all-ages" },
              ].map(
                (item) => (
                  <li key={item.title}>
                    <a
                      href={item.link}
                      className="hover:text-[#00A8E8] flex items-center"
                    >
                       <BiLink className="mr-2"/> {item.title}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Our Services Section */}
          <div className="flex flex-col items-center sm:items-start -ml-4">
            <h3 className="text-xl font-bold">Our Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { title: "Contact Sales", link: "/contact-sales" },
                { title: "Add Events", link: "/create-events" },
                { title: "Help Center", link: "/help-center" },
                { title: "Parenting tips", link: "/parenting-tips" },
              ].map((service) => (
                <li key={service.title}>
                  <a
                    href={service.link}
                    className="hover:text-[#00A8E8] flex items-center"
                  >
                    <BiLink className="mr-2"/> {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Follow Us Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-bold">Socials</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {["LinkedIn", "Facebook", "Instagram", "Tik Tok"].map(
                (social) => (
                  <li key={social}>
                    <a
                      href="#"
                      className="hover:text-[#00A8E8] flex items-center"
                    >
                       <BiLink className="mr-2"/> {social}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* ACCORDION FOR MOBILE VIEW */}
      <div className="bg-gradient-to-b mb-3 mx-5 md:hidden from-[#E848E5] to-[#A52EA1] flex flex-col items-center p-6 rounded-lg text-white">
        <div className="bg-white bg-opacity-30 rounded-2xl p-4 w-full max-w-lg md:max-w-xl lg:max-w-3xl">
          <div className="flex flex-col  md:flex-row items-center justify-center">
            {/* QR Code */}
            <div className="mb-4 md:mb-0 md:mr-4">
              <Image
                src="https://oneworldfinancials.com/h1_img8.jpg"
                alt="Scan QR code to download OneWorld Wallet"
                width={192}
                height={192}
                className="w-48 h-48"
              />
            </div>

            {/* App Download Links */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-center mb-4">
                Scan QR code to download My Bonfo.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="flex items-center">
                  <Image
                    src="https://oneworldfinancials.com/_next/static/media/Remit16.b0e7c27a.svg"
                    alt="Available on the App Store"
                    width={120}
                    height={40}
                  />
                </a>
                <a href="#" className="flex items-center">
                  <Image
                    src="https://oneworldfinancials.com/_next/static/media/Remit17.29e75541.svg"
                    alt="Get it on Google Play"
                    width={120}
                    height={40}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Accordion type="single" collapsible className="space-y-3 mx-6 md:hidden">
        <AccordionItem
          value="item-1"
          className="p-2 border border-gray-50 rounded-md "
        >
          <AccordionTrigger className="text-xl font-bold">
            About Us
          </AccordionTrigger>
          <AccordionContent>
          <ul className="mt-4 space-y-2 text-sm">
              {[
                { title: "Education", link: "/vibrant/educational" },
                { title: "Charity and Causes", link: "/vibrant/charity-causes" },
                { title: "Special Deals", link: "/events/deals" },
                { title: "All ages", link: "/all-ages" },
              ].map(
                (item) => (
                  <li key={item.title}>
                    <a
                      href={item.link}
                      className="hover:text-[#00A8E8] flex items-center"
                    >
                       <BiLink className="mr-2"/> {item.title}
                    </a>
                  </li>
                )
              )}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="p-2 border border-gray-50 rounded-md "
        >
          <AccordionTrigger className="text-xl font-bold">
            Our Services
          </AccordionTrigger>
          <AccordionContent>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { title: "Contact Sales", link: "/contact-sales" },
                { title: "Add Events", link: "/create-events" },
                { title: "Help Center", link: "/help-center" },
                { title: "Parenting tips", link: "/parenting-tips" },
              ].map((service) => (
                <li key={service.title}>
                  <a
                    href={service.link}
                    className="hover:text-[#00A8E8] flex items-center"
                  >
                     <BiLink className="mr-2"/> {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="p-2 border border-gray-50 rounded-md "
        >
          <AccordionTrigger className="text-xl font-bold">
            Socials
          </AccordionTrigger>
          <AccordionContent>
            <ul className="mt-4 space-y-2 text-sm">
              {["LinkedIn", "Facebook", "Instagram", "Tik Tok"].map(
                (social) => (
                  <li key={social}>
                    <a
                      href="#"
                      className="hover:text-[#00A8E8] flex items-center"
                    >
                       <BiLink className="mr-2"/> {social}
                    </a>
                  </li>
                )
              )}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>{" "}
      <a
        href="https://wa.me/+2203263277"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 animate-bounce right-4 z-50 flex items-center space-x-2 rounded-full bg-green-500 px-4 py-2 text-white shadow-lg transition-colors hover:bg-green-600"
      >
        <FaWhatsapp size={20} className="" />
        <span className="font-semibold">Message us</span>
      </a>

    </footer>
  );
}