import React from "react";
import { GiGolfFlag } from "react-icons/gi";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
const OrganizerCard = ({ organizer }: { organizer: string }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="font-bold text-2xl text-gray-900">Organized by</h2>
      <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-between w-full max-w-2xl">
        <div>
          <p className="text-lg font-semibold text-gray-900">
            Voice Coaches CVDG
          </p>
        </div>
        <div className="flex space-x-4 items-center">
          <a
            href="#"
            className="bg-[#D942D6] text-white px-4 py-2 rounded-md text-sm"
          >
            Contact
          </a>
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="text-[#D942D6] pt-6 font-bold text-sm flex items-center hover:bg-transparent hover:text-red-600 justify-center max-w-2xl"
          >
            <GiGolfFlag className="text-lg mr-1" /> Report this event
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Report Event</DialogTitle>
            <DialogDescription>
              Please provide details about the issue with this event.
            </DialogDescription>
          </DialogHeader>
          <textarea
            className="w-full h-32 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Describe the issue..."
          ></textarea>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button variant="destructive">Submit Report</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>{" "}
    </div>
  );
};

export default OrganizerCard;
