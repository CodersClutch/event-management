"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { eventList } from "@/constants";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import html2canvas from "html2canvas"; // For capturing the ticket as an image
import { Button } from "../ui/button";
import { Check } from "lucide-react";

const MyTickets = () => {
  const [scanResult, setScanResult] = useState(""); // State to store the scanned result
  const ticketRef = useRef<HTMLDivElement>(null); // Ref for the ticket element

  const handleDownloadTicket = () => {
    if (ticketRef.current) {
      html2canvas(ticketRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.download = "ticket.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  const handlePrintTicket = () => {
    if (ticketRef.current) {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.write(`
        <html>
          <head>
            <title>Print Ticket</title>
            <style>
              body { margin: 0; padding: 0; }
              img { width: 100%; height: auto; }
              .ticket { width: 100%; max-width: 400px; margin: 0 auto; border: 1px solid #ccc; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
              .ticket-header { text-align: center; margin-bottom: 20px; }
              .ticket-header h2 { margin: 0; font-size: 24px; color: #18212C; }
              .ticket-details { margin-bottom: 20px; }
              .ticket-details p { margin: 5px 0; font-size: 14px; color: #84759E; }
              .ticket-qr { text-align: center; margin: 20px 0; }
              .ticket-footer { text-align: center; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            ${ticketRef.current.innerHTML}
          </body>
        </html>
      `);
        if (printWindow) {
          printWindow.print();
        }
      }
      printWindow?.print();
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#18212C]">My Tickets</h1>
      </div>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {eventList.map((event) => (
          <div
            key={event?.id}
            className="bg-white rounded-lg border border-gray-100 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Top row: Author profile, name, and time below */}
            <div className="p-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="relative w-9 h-9 rounded-full overflow-hidden">
                  <Image
                    src={event?.profileImage || "/default-profile.png"} // Fallback image
                    alt={`${event?.author}'s profile`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#18212C] text-[1rem]">
                    By {event?.author}
                  </span>
                  <span className="block text-[.95rem]">{event?.time}</span>
                </div>
              </div>
            </div>

            {/* Card Image with Event Name Overlay */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative w-full h-52 overflow-hidden group cursor-pointer">
                  <Image
                    src={event?.eventImage || "/default-event?.png"} // Fallback image
                    alt={event?.eventName}
                    fill
                    className="object-cover cursor-pointer transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute flex flex-col gap-2 bottom-0 left-0  w-full text-white text-lg font-semibold p-2 text-left bg-gradient-to-t from-black/70 to-transparent">
                    {event?.eventName}
                    <Button className="font-bold text-white">
                      View Ticket
                    </Button>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[25%] p-0 rounded-lg overflow-hidden">
                <div ref={ticketRef} className="bg-white p-5">
                  {/* Ticket Header */}
                  <div className="ticket-header">
                    <h2 className="text-lg pb-2 font-extrabold text-[#18212C]">
                      {event?.eventName}
                    </h2>
                  </div>

                  {/* Event Details */}
                  <div className="ticket-details">
                    <div className="flex items-center mb-1">
                      <span className="font-bold text-[#18212C] w-24">
                        Date:
                      </span>
                      <span className="text-gray-700">{event?.date}</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <span className="font-bold text-[#18212C] w-24">
                        Time:
                      </span>
                      <span className="text-gray-700">{event?.time}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <span className="font-bold text-[#18212C] w-24">
                        Price:
                      </span>
                      <span className="text-gray-700">{event?.price}</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <span className="font-bold text-[#18212C] w-24">
                        Location:
                      </span>
                      <span className="text-gray-700">{event?.location}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <span className="font-bold text-[#18212C] w-24">
                        Ticket ID:
                      </span>
                      <span className="text-gray-700">{event?.ticketId}</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <span className="font-bold text-[#18212C] w-24">
                        Ticket Type:
                      </span>
                      {/* <span className="text-gray-700">
                        {event?.ticketCatagory}
                      </span> */}
                    </div>
                  </div>

                  {/* QR Code or Barcode */}
                  <Image
                    src={"/QrCodeScanner.png"}
                    height={200}
                    width={200}
                    alt="Music Awards"
                    className="rounded-lg w-full h-56 mb-2"
                    priority
                  />
                  {/* Footer */}
                  <div className="ticket-footer">
                    <div className="flex items-center gap-1 font-bold">
                      <Check className="text-sm h-4 w-4 font-bold" />
                      <p>Terms and Conditions apply.</p>
                    </div>
                    <p>No refunds or exchanges.</p>
                    <p>Present this ticket at the entrance.</p>
                  </div>
                  {/* Download and Print Buttons */}
                  <div className="flex justify-between px-4 mt-3">
                    <Button
                      onClick={handleDownloadTicket}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Download Ticket
                    </Button>
                    <Button
                      onClick={handlePrintTicket}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      Print Ticket
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Card Content */}
            <div className="py-4">
              {/* Date, Location, Tickets in a single row */}
              <div className="grid grid-cols-3 gap-2 mb-2 px-4 mt-1">
                <div className="flex flex-col space-y-2">
                  <span className="font-semibold text-[#18212C] text-[1.08rem]">
                    Date
                  </span>
                  <span className="text-[.9rem] text-[#84759E]">
                    {event?.date}
                  </span>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="font-semibold text-[#18212C] text-[1.08rem]">
                    Location
                  </span>
                  <span className="text-[.9rem] text-[#84759E]">
                    {event?.location}
                  </span>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="font-semibold text-[#18212C] text-[1.08rem]">
                    Tickets
                  </span>
                  <span className="text-[.9rem] text-[#84759E]">
                    {event?.tickets}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTickets;
