"use client";

import * as React from "react";
import { Loader, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { EventInterfaceType } from "@/lib/types";

const TicketDrawer = ({
  event,
  ProceedToCheckout,
  // setShowTicketDrawer,
  isLoading,
}: // showTicketDrawer,
{
  event: EventInterfaceType;
  ProceedToCheckout: (
    eventId: string,
    selectedEvent: EventInterfaceType
  ) => void;
  setShowTicketDrawer: (value: boolean) => void;
  isLoading: boolean;
  // showTicketDrawer: boolean;
}) => {
  const [quantity, setQuantity] = React.useState(1);
  const price = event?.price || 0;
  const tax = price * 0.12; // 12% tax
  const total = (price + tax) * quantity;
  // handle procees to checkout

  return (
    <Drawer
    // open={showTicketDrawer}
    // onOpenChange={() => setShowTicketDrawer(!showTicketDrawer)}
    >
      <DrawerTrigger asChild>
        <button className="text-[#D942D6] font-semibold text-xl border-l-4 pl-3 border-[#D942D6] transition-all hover:text-[#b832a4]">
          🎟 Buy Now
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-white rounded-t-3xl shadow-2xl border border-gray-200">
        <div className="mx-auto w-full max-w-lg p-8">
          {/* Drawer Header */}
          <DrawerHeader className="text-center">
            <DrawerTitle className="text-4xl font-extrabold text-gray-900">
              🎫 Your Ticket
            </DrawerTitle>
            <DrawerDescription className="text-lg text-gray-600">
              Secure your spot for an unforgettable experience!
            </DrawerDescription>
          </DrawerHeader>

          <div className="bg-white bg-opacity-80 backdrop-blur-xl rounded-lg p-6 shadow-xl border border-gray-200">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-semibold text-gray-900">
                {event?.title}
              </h2>
            </div>

            <div className="text-md text-gray-700 space-y-3 leading-relaxed">
              <p>
                📍 <strong>Location:</strong> {event?.location}
              </p>
              <p>
                📅 <strong>Date:</strong>{" "}
                {new Date(event?.schedule.start).toDateString()} -{" "}
                {new Date(event?.schedule.end).toDateString()}
              </p>
              <p>
                👤 <strong>Organizer:</strong> {event?.createdBy?.firstName}{" "}
                {event?.createdBy?.lastName}
              </p>
              <p>
                ⏳ <strong>Registration Deadline:</strong>{" "}
                {new Date(event?.registrationDeadline).toDateString()}
              </p>
              <p>
                👥 <strong>Max Participants:</strong> {event?.maxParticipants}
              </p>
              {event?.refundPolicy && (
                <p>
                  🔄 <strong>Refund Policy:</strong> {event?.refundPolicy}
                </p>
              )}
            </div>

            <div className="mt-6 border-t pt-5 space-y-3 text-xl font-medium">
              <div className="flex justify-between text-gray-800">
                <span>Ticket Price</span>
                <span className="text-[#D942D6] font-semibold">
                  ${price.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between items-center mt-6">
                <span className=" font-semibold">Quantity</span>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full border-gray-500 text-gray-900 hover:bg-gray-300 transition-all"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-6 w-6" />
                  </Button>
                  <span className="px-6 text-2xl font-bold text-gray-900">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full border-gray-500 text-gray-900 hover:bg-gray-300 transition-all"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-6 w-6" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 text-3xl font-bold text-gray-900">
                <span>Total</span>
                <span className="text-[#D942D6]">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <DrawerFooter>
            <Button
              onClick={() => ProceedToCheckout(event._id, event)}
              disabled={isLoading}
              className="w-full rounded-md shadow-lg transition-all"
            >
              {isLoading ? "loading ...." : "Continue"}
              {isLoading && <Loader className="h-8 w-8 animate-spin" />}
            </Button>
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="w-full text-lg py-3 border-gray-400 shadow-sm transition-all"
              >
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default TicketDrawer;
