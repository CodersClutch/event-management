"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Loader, Plus } from "lucide-react";
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Textarea } from "../ui/textarea";
import { useSession } from "next-auth/react";
import { EventHook } from "@/hooks/EventHook";
import { categories2 } from "@/constants";
import { useEdgeStore } from "../provider/edgestore";
import { toast } from "sonner";
import { SingleImageDropzone } from "@/components/SingleImageDropzone";

const AddEvent = () => {
  const { HandleAddEvent, setIsLoading, isLoading } = EventHook();
  const [open, setOpen] = useState<boolean>();
  const [file, setFile] = React.useState<File>();
  const { edgestore } = useEdgeStore();
  const { data: session } = useSession({ required: true });
  const form = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      createdBy: session?.user?._id,
      schedule: {
        start: new Date(),
        end: new Date(),
      },
      registrationDeadline: new Date(),
      maxParticipants: 0,
      description: "",
      location: "",
      category: "",
      price: "",
      ageRange: "",
      image: "",
    },
  });

  // Upload image only if form is valid
  const UploadImage = async () => {
    if (!file) return null;

    try {
      setIsLoading(true);
      const res = await edgestore.publicFiles.upload({ file });
      return res.url; // Return the uploaded image URL
    } catch (error) {
      toast.error("Image upload failed:");
      setIsLoading(false);
      return null;
    }
  };

  // 2. Define a submit handler.
  const onSubmit = async (data: any) => {
    if (!file) {
      toast.error("Please upload an image for the event");
      return;
    }
    const imageUrl = await UploadImage(); // Upload only if form is valid
    if (!imageUrl) {
      toast.error(
        "We could not find the image url. Please try again or refresh your browser."
      );
      return;
    }

    toast.info("Event Image Uploaded Successfully");

    const formData = {
      ...data,
      createdBy: session?.user?._id,
      price: Number(data.price),
      image: imageUrl, // Add uploaded image URL to form data
    };

    const status = await HandleAddEvent(formData);
    if (status?.status === 200) {
      setOpen(false);
      form.reset();
      // setFile(null);
      // setPreview(null);
    }
  };

  // upload the file and return the url

  // ousainou trying to piss me of
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-full">
          Add Event <Plus className="h-3.5 w-3.5" />
        </Button>
      </SheetTrigger>
      <SheetContent className=" overflow-scroll">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <SheetHeader>
              <SheetTitle>Add Event</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when youre done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter event title" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="schedule.start"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel> Start Date</FormLabel>
                      <Input
                        {...field}
                        type="date"
                        value={
                          field.value ? format(field.value, "yyyy-MM-dd") : ""
                        }
                        onChange={(e) =>
                          field.onChange(new Date(e.target.value))
                        }
                      />

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="schedule.end"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel> End Date</FormLabel>
                      <Input
                        {...field}
                        type="date"
                        value={
                          field.value ? format(field.value, "yyyy-MM-dd") : ""
                        }
                        onChange={(e) =>
                          field.onChange(new Date(e.target.value))
                        }
                      />

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-2 items-center">
                <FormField
                  control={form.control}
                  name="registrationDeadline"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Registration Deadline</FormLabel>
                      <Input
                        {...field}
                        type="date"
                        value={
                          field.value ? format(field.value, "yyyy-MM-dd") : ""
                        }
                        onChange={(e) =>
                          field.onChange(new Date(e.target.value))
                        }
                      />

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="maxParticipants"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Max Participants</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter event title"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* price and category */}
              <div className="grid grid-cols-2 gap-2 items-center">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Category</FormLabel>

                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Categorises</SelectLabel>

                            {categories2.map((element) => (
                              <SelectItem key={element} value={element}>
                                {element}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter price "
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* age range */}

              {/* Age Range Field */}
              <FormField
                control={form.control}
                name="ageRange"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Age Range</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Age Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Age Ranges</SelectLabel>
                          <SelectItem value="All Ages">All Ages</SelectItem>
                          <SelectItem value="5-10">5 - 10</SelectItem>
                          <SelectItem value="18-25">18 - 25</SelectItem>
                          <SelectItem value="26-35">26 - 35</SelectItem>
                          <SelectItem value="36-50">36 - 50</SelectItem>
                          <SelectItem value="50+">50+</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter event location" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter description about this event "
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload event Image</FormLabel>
                    <FormControl>
                      <SingleImageDropzone
                        width={200}
                        height={200}
                        value={file}
                        onChange={(file) => {
                          setFile(file);
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <SheetFooter>
              <SheetClose type="button">
                <Button variant={"outline"} type="button">
                  {" "}
                  cancel
                </Button>
              </SheetClose>

              <Button disabled={isLoading} type="submit">
                {isLoading ? "Saving  events" : "Save event"}
                {isLoading ? (
                  <Loader className="animate-spin" />
                ) : (
                  <Plus className="h-3.5 w-3.5 ml-2 " />
                )}
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default AddEvent;
