"use client";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Undo, Info, AlertTriangle } from "lucide-react";
import { Date } from "mongoose";
import { useState } from "react";
import { toast } from "sonner";

// Define the type for a notification
type Notification = {
  id: number;
  type: "success" | "error" | "warning" | "info";
  title: string;
  description: string;
  show: boolean;
  date: string;
};

const HostNotification = () => {
  // Initialize notifications as an array
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: "success",
      title: "Event Created Successfully!",
      description:
        'Your new event "Tech Conference 2025" has been created successfully. You can now manage the event details, view attendees, and make edits.',
      show: true,
      date: "Monday, 12th February 2025"
    },
    {
      id: 2,
      type: "error",
      title: "Event Creation Failed!",
      description:
        "There was an issue while creating the event. Please check the details and try again. If the issue persists, contact support.",
      show: true,
      date: "Monday, 12th July 2023"
    },
    {
      id: 3,
      type: "warning",
      title: "Low Ticket Availability!",
      description:
        "Only 10 tickets are left for the event. Consider increasing the ticket limit or notifying attendees.",
      show: true,
      date: "Monday, 12th May 2024"
    },
    {
      id: 4,
      type: "info",
      title: "New Feature Available!",
      description:
        "You can now use the new attendee management dashboard to streamline your event operations.",
      show: true,
      date: "Monday, 12th March 2023"
    },
  ]);

  // Handle closing a notification
  const handleClose = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, show: false } : notification
      )
    );
    toast("Notification Closed", {
      description: "The notification has been dismissed.",
    });
  };

  // Handle undoing an action
  const handleUndo = () => {
    toast("Action Undone", {
      description: "The last action has been successfully undone.",
    });
  };

  // Handle learning more about an event
  const handleLearnMore = () => {
    toast("Redirecting...", {
      description: "You will be redirected to the event details page.",
    });
    // Simulate a redirect or additional logic
  };

  // Get the icon and color for each notification type
  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return <CheckCircle size={24} className="text-green-500" />;
      case "error":
        return <XCircle size={24} className="text-red-500" />;
      case "warning":
        return <AlertTriangle size={24} className="text-yellow-500" />;
      case "info":
        return <Info size={24} className="text-blue-500" />;
      default:
        return null;
    }
  };

  // Get the background and text color for each notification type
  const getNotificationStyle = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return "border-green-500 bg-green-50 text-green-800";
      case "error":
        return "border-red-500 bg-red-50 text-red-800";
      case "warning":
        return "border-yellow-500 bg-yellow-50 text-yellow-800";
      case "info":
        return "border-blue-500 bg-blue-50 text-blue-800";
      default:
        return "";
    }
  };

  return (
    <div className="p-6">
      {notifications.map(
        (notification) =>
          notification.show && (
            <Alert
              key={notification.id}
              className={`mb-4 ${getNotificationStyle(notification.type)}`}
            >
              <div className="flex items-center gap-4">
                {getNotificationIcon(notification.type)}
                <div className="flex-1">
                  <AlertTitle className="font-semibold">
                    {notification.title}
                  </AlertTitle>
                  <AlertDescription className="text-sm">
                    {notification.description}
                  </AlertDescription>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 flex-col lg:flex-row">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleUndo}
                    className="hover:bg-opacity-20"
                  >
                    <Undo size={16} className="mr-2" />
                    Undo
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLearnMore}
                    className="hover:bg-opacity-20"
                  >
                    <Info size={16} className="mr-2" />
                    Learn More
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleClose(notification.id)}
                    className="hover:bg-opacity-20"
                  >
                    <XCircle size={16} className="mr-2" />
                    Close
                  </Button>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-700 font-bold">
                <p>Date: <span>{notification.date}</span></p>
              </div>
            </Alert>
          )
      )}
    </div>
  );
};

export default HostNotification;