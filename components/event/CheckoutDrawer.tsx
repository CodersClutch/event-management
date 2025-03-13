import { Calendar, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Drawer, DrawerContent } from "../ui/drawer";
import { EventInterfaceType } from "@/lib/types";
import Barcode from "react-barcode";
interface CheckoutDrawerProps {
  open: boolean;
  onClose: () => void;
  event: EventInterfaceType; // Pass event details
}

const CheckoutDrawer: React.FC<CheckoutDrawerProps> = ({
  open,
  onClose,
  event,
}) => {
  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent>
        <div className="w-full max-w-md mx-auto bg-[#F4F9FC] rounded-t-2xl p-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-lg font-semibold">
              Thank You For Your Purchase.
            </h2>
            <h3 className="text-lg font-semibold">See You At Lolla!</h3>
            <h1 className="text-xl font-extrabold mt-2 tracking-wide">
              E-TICKET
            </h1>
          </div>

          {/* Ticket Content */}
          <div className="bg-white rounded-lg shadow-lg w-full h-auto p-4 mt-4">
            {/* Ticket Title */}
            <h2 className="text-lg font-bold">
              4-Day General Admission Ticket
            </h2>

            {/* Event Details */}
            <div className="text-sm text-gray-700 mt-2">
              <p className="font-semibold">Event Detail</p>
              <div className="flex items-start mt-1">
                <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                <div className="ml-2">
                  <p>At Grant Park</p>
                  <p>601 S Michigan Ave, Chicago, IL 60605</p>
                </div>
              </div>

              <div className="flex items-start mt-2">
                <Calendar className="w-4 h-4 text-gray-500 mt-1" />
                <div className="ml-2">
                  <p>Thursday, July 29, 2021 - Sunday, August 1, 2021</p>
                  <p>Doors Open At 11:00 AM</p>
                </div>
              </div>
            </div>

            {/* Ticket Info */}
            <div className="mt-4 border-t pt-3 text-center">
              <div className="grid grid-cols-4 text-xs font-semibold text-gray-600">
                <p>Section</p>
                <p>Row</p>
                <p>Gate</p>
                <p>Seat</p>
              </div>
              <div className="grid grid-cols-4 text-lg font-bold text-red-500 mt-1">
                <p>VIP</p>
                <p>GA34</p>
                <p>F</p>
                <p>32</p>
              </div>
            </div>

            {/* Barcode */}
            <div className="text-center mt-4">
              <p className="text-xs text-gray-600">
                All Orders Must Redeem This Ticket <br /> For A 4-Day Wristband
                For Entry
              </p>
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
            <Button className="w-full text-lg py-3 font-bold flex items-center justify-center">
              ⬅ BACK
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CheckoutDrawer;
