"use client";

import * as React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const TicketDrawer = () => {
  const [quantity, setQuantity] = React.useState(1);
  const price = 500.0;
  const tax = 76.86;
  const total = (price + tax) * quantity;

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="text-[#D942D6] font-bold border-l-2 pl-2 border-[#D942D6]">
          Buy Now
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-md p-4">
          {/* Shopping Cart Header */}
          <DrawerHeader className="border-b pb-2">
            <h2 className="text-lg font-semibold flex items-center">
              🛒 Shopping Ticket
            </h2>
          </DrawerHeader>

          {/* Ticket Details */}
          <div className="p-4 bg-white shadow-lg rounded-lg mt-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">
                  4-Day General Admission
                </h3>
                <p className="text-sm text-gray-500">All Ages</p>
              </div>
              <button className="text-red-500 flex items-center text-sm">
                <Trash2 className="w-5 h-5 mr-1" /> Remove
              </button>
            </div>

            {/* Event Details */}
            <div className="text-sm text-gray-600 mt-2 space-y-1">
              <p>📍 At Grant Park, Chicago, IL</p>
              <p>📅 July 29 - August 1, 2025</p>
              <p>⏰ Doors Open at 11:00 AM</p>
            </div>

            {/* Pricing Breakdown */}
            <div className="mt-4 border-t pt-3">
              <div className="flex justify-between text-sm">
                <span>Price</span>
                <span className="text-black font-medium">
                  ${price.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax & Fees</span>
                <span className="text-black font-medium">
                  ${tax.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm font-medium">Quantity</span>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full border-gray-300"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus />
                </Button>
                <span className="text-lg font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full border-gray-300"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus />
                </Button>
              </div>
            </div>

            {/* Total Price */}
            <div className="mt-4 flex justify-between items-center text-lg font-semibold">
              <span>Total</span>
              <span className="text-red-500">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <DrawerFooter className="mt-4">
            <Button className="w-full bg-black text-white py-3 text-lg">
              CHECKOUT
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full mt-2">
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
