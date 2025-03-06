"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CalendarIcon, Loader, Plus } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { eventSchema } from "@/lib/validation/eventValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Textarea } from "../ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";
import { EventHook } from "@/hooks/EventHook";
import { useSession } from "next-auth/react";
import FileUpload from "../common/ImageUpload"; // Updated FileUpload component
import config from "@/lib/config";

const AddEvent = () => {
  const { HandleAddEvent, isLoading } = EventHook();
  const [open, setOpen] = useState<boolean>(false);
  const { data: session } = useSession({ required: true });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const form = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      createdBy: session?.user?.id,
      schedule: {
        start: new Date(),
        end: new Date(),
      },
      registrationDeadline: new Date(),
      maxParticipants: 0,
      description: "",
      location: "",
      images: [] as string[], // This will store the uploaded image URLs
    },
  });

  const handleFilesChange = (files: File[]) => {
    setSelectedFiles(files); // Store the selected files
  };

  const uploadImages = async (files: File[]) => {
    const uploadedUrls: string[] = [];
    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch(`${config.env.apiEndpoint}/api/upload`, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Image upload failed");
        }

        const data = await response.json();
        uploadedUrls.push(data.filePath); // Store the uploaded image URL
      } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
      }
    }
    return uploadedUrls;
  };

  const onSubmit = async (data: any) => {
    try {
      let imageUrls: string[] = [];
      if (selectedFiles.length > 0) {
        imageUrls = await uploadImages(selectedFiles); // Upload the selected files
      }

      // Add the uploaded image URLs to the form data
      const formData = {
        ...data,
        images: imageUrls,
      };

      const status = await HandleAddEvent(formData);
      if (status?.status === 200) {
        setOpen(false);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          Add Event <Plus className="h-3.5 w-3.5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <DialogHeader>
              <DialogTitle>Add Event</DialogTitle>
              <DialogDescription>
                Make changes to your event details here. Click save when
                you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {/* Other form fields */}

              {/* FileUpload field for event images */}
              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Images</FormLabel>
                    <FormControl>
                      <FileUpload
                        type="image"
                        accept="image/*"
                        placeholder="Upload images (max 6)"
                        folder="eventImages"
                        variant="dark"
                        onFilesChange={handleFilesChange} // Pass the selected files to the parent
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button disabled={isLoading} type="submit">
                {isLoading ? "Saving event" : "Save event"}
                {isLoading ? (
                  <Loader className="animate-spin" />
                ) : (
                  <Plus className="h-3.5 w-3.5 ml-2" />
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEvent;
