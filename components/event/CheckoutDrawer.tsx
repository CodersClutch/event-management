"use client";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { EventInterfaceType } from "@/lib/types";
import Barcode from "react-barcode";
import { formatDate } from "@/lib/utils";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { DialogClose } from "../ui/dialog";
interface CheckoutDrawerProps {
  open: boolean;
  onClose: () => void;
  event: EventInterfaceType; // Pass event details
  title?: boolean;
}

const CheckoutDrawer: React.FC<CheckoutDrawerProps> = ({
  open,
  onClose,
  event,
  title = false,
}) => {
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
  return (
    <Drawer open={open} onOpenChange={onClose}>
      {title && <DrawerTrigger>Download Ticket</DrawerTrigger>}

      <DrawerContent>
        <div className="w-full max-w-md mx-auto bg-[#F4F9FC] rounded-t-2xl p-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-lg font-semibold text-center">
              Thank You For Your Purchase.
            </h2>
            <h3 className="text-lg font-semibold">See You At Lolla!</h3>
          </div>

          {/* Ticket Content */}
          <div
            ref={ticketRef}
            className="bg-white rounded-lg shadow-lg w-full h-auto p-4 mt-4 "
          >
            <h1 className="text-xl font-extrabold mt-2 tracking-wide  text-current">
              E-TICKET {event?.eventId}
            </h1>
            {/* Ticket Title */}
            <h2 className="text-lg font-bold">{event?.title}</h2>

            {/* Event Details */}
            <div className="text-sm text-gray-700 mt-2">
              <p className="font-semibold">Event Detail</p>
              <div className="flex items-start mt-1">
                <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                <div className="ml-2">
                  <p>{event?.location}</p>
                  <p>{event?.geolocation?.address}</p>
                  <p>{event?.geolocation?.city}</p>
                  <p>{event?.geolocation?.state}</p>
                  <p>{event?.geolocation?.country}</p>
                </div>
              </div>

              <div className="flex items-start mt-2">
                <Calendar className="w-4 h-4 text-gray-500 mt-1" />
                <div className="ml-2">
                  <p>
                    {formatDate(event?.schedule?.start)} -{" "}
                    {formatDate(event?.schedule?.end)}
                  </p>
                  <p>Age range {event?.ageRange}</p>
                </div>
              </div>
            </div>

            {/* Ticket Info */}
            <div className="mt-4 border-t pt-3 text-center">
              <div className="grid grid-cols-4 text-xs font-semibold text-gray-600">
                <p>Price</p>
                <p>maxParticipants</p>

                <p>Mode</p>
              </div>
              <div className="grid grid-cols-3 text-lg font-bold text-red-500 mt-1">
                <p>{event?.price}</p>
                <p>{event?.maxParticipants}</p>
                <p>{event?.mode}</p>
              </div>
            </div>

            {/* Barcode */}
            <div className="text-center mt-4">
              <p className="text-xs text-gray-600">{event?.refundPolicy}</p>
              {/* <div className="w-full h-12 bg-gray-300 mt-2 object-contain "> */}
              <Barcode
                height={50}
                width={1.1}
                value="67d1aad55a2f26fe803bc7bf"
              />

              {/* </div> */}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-6">
            <Button
              onClick={handleDownloadTicket}
              className="w-full text-lg py-3  font-bold flex items-center justify-center"
            >
              Download ticket
            </Button>
            <DialogClose className="w-full text-lg py-3 mt-2 font-bold flex items-center justify-center">
              <Button variant={"outline"} className="w-full">
                Close
              </Button>
            </DialogClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CheckoutDrawer;
