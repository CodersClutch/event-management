"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { toast } from "sonner";
import { Loader, Plus, ChevronDown } from "lucide-react";

// Components
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SingleImageDropzone } from "@/components/SingleImageDropzone";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

// Validation and hooks
import { eventSchema } from "@/lib/validation/eventValidation";
import { EventHook } from "@/hooks/EventHook";
import { useEdgeStore } from "../provider/edgestore";
import { CATEGORIES } from "@/lib/types";

const AddEvent = () => {
  const { HandleAddEvent, setIsLoading, isLoading } = EventHook();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();
  const { data: session } = useSession({ required: true });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  type FormValues = {
    title: string;
    createdBy: string;
    schedule: { start: Date; end: Date };
    registrationDeadline: Date;
    maxParticipants: number;
    description: string;
    location: string;
    category: string[];
    price: string;
    ageRange: string;
    image: string;
    specialDeal: boolean;
    mode: string;
    refundPolicy: string;
    geolocation: {
      address: string;
      city: string;
      state: string;
      country: string;
      coordinates: string;
    };
  };
  
  const form = useForm<FormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      createdBy: session?.user?._id,
      schedule: { start: new Date(), end: new Date() },
      registrationDeadline: new Date(),
      maxParticipants: 0,
      description: "",
      location: "",
      category: [] as string[],
      price: "",
      ageRange: "",
      image: "",
      specialDeal: false,
      mode: "",
      refundPolicy: "",
      geolocation: {
        address: "",
        city: "",
        state: "",
        country: "",
        coordinates: "",
      },
    },
  });

  const UploadImage = async () => {
    if (!file) return null;
    try {
      setIsLoading(true);
      const res = await edgestore.publicFiles.upload({ file });
      return res.url;
    } catch (error) {
      toast.error("Image upload failed");
      setIsLoading(false);
      return null;
    }
  };

  const onSubmit = async (data: any) => {
    if (!file) return toast.error("Please upload an event image");
    const imageUrl = await UploadImage();

    if (!imageUrl) return toast.error("Image upload failed. Please try again");

    toast.info("Event Image Uploaded Successfully");
    const formData = {
      ...data,
      createdBy: session?.user?._id,
      price: Number(data.price),
      image: imageUrl,
    };

    const status = await HandleAddEvent(formData);
    if (status?.status === 200) {
      setOpen(false);
      form.reset();
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="gap-2">
          Create Event <Plus className="h-4 w-4" />
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <SheetHeader>
              <SheetTitle className="text-2xl">Create New Event</SheetTitle>
              <SheetDescription>
                Fill in the details below to create your event. All fields are
                required unless marked optional.
              </SheetDescription>
            </SheetHeader>

            <div className="space-y-4">
              {/* Event Basics */}
              <section className="space-y-4">
                <h3 className="font-semibold text-lg">Event Details</h3>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <DropdownMenu
                            open={isDropdownOpen}
                            onOpenChange={setIsDropdownOpen}
                          >
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full justify-between"
                              >

                                Select Category
                                <ChevronDown className="ml-2 h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              className="w-[var(--radix-dropdown-menu-trigger-width)] max-h-60 overflow-y-auto"
                              onCloseAutoFocus={(e) => {
                                e.preventDefault();
                              }}
                            >
                              {CATEGORIES.map((category) => (
                                <DropdownMenuCheckboxItem
                                  key={category}
                                  checked={field.value.includes(category)}
                                  onSelect={(e) => e.preventDefault()} 
                                  onCheckedChange={(checked) => {
                                    const newValues = checked
                                      ? [...field.value, category]
                                      : field.value.filter(
                                          (c: string) => c !== category
                                        );
                                    field.onChange(newValues);

                                    setIsDropdownOpen(true);
                                  }}
                                >
                                  {category}
                                </DropdownMenuCheckboxItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="ageRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age Range</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select age range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="All Ages">All Ages</SelectItem>
                            <SelectItem value="5-10">5-10 years</SelectItem>
                            <SelectItem value="18-25">18-25 years</SelectItem>
                            <SelectItem value="26-35">26-35 years</SelectItem>
                            <SelectItem value="36-50">36-50 years</SelectItem>
                            <SelectItem value="50+">50+ years</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your event..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>

              {/* Scheduling */}
              <section className="space-y-4">
                <h3 className="font-semibold text-lg">
                  Schedule & Registration
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="schedule.start"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Start Date</FormLabel>
                        <Input
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
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <Input
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
                    name="registrationDeadline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Registration Deadline</FormLabel>
                        <Input
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="maxParticipants"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Max Participants</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="0"
                            placeholder="Enter maximum participants"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price ($)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="Enter ticket price"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </section>

              {/* Location & Image */}
              <section className="space-y-4">
                <h3 className="font-semibold text-lg">Location & Media</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Location</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter venue name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Mode</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select event mode" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="online">Online</SelectItem>
                            <SelectItem value="offline">Offline</SelectItem>
                            <SelectItem value="hybrid">Hybrid</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="image"
                  render={() => (
                    <FormItem>
                      <FormLabel>Event Image</FormLabel>
                      <SingleImageDropzone
                        width={400}
                        height={200}
                        value={file}
                        onChange={setFile}
                        dropzoneOptions={{ maxSize: 1024 * 1024 * 5 }}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>
              <section className="space-y-4">
                <h3 className="font-semibold text-lg">Geolocation Details</h3>

                {/* Geolocation Details */}
                <div className="space-y-4 pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="geolocation.address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Street Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter street address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="geolocation.city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter city" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="geolocation.state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State/Province</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter state/province"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="geolocation.country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter country" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="geolocation.coordinates"
                      render={({ field }) => (
                        <FormItem className="sm:col-span-2">
                          <FormLabel>Coordinates</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Example: 40.7128, -74.0060"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </section>

              {/* Additional Settings */}
              <section className="space-y-4">
                <h3 className="font-semibold text-lg">Additional Settings</h3>

                <FormField
                  control={form.control}
                  name="specialDeal"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="!mt-0">
                        Enable Special Deals
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="refundPolicy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Refund Policy</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your refund policy..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>
            </div>

            <SheetFooter className="flex flex-row justify-end gap-2">
              <SheetClose asChild>
                <Button variant="secondary" type="button">
                  Cancel
                </Button>
              </SheetClose>

              <Button type="submit" disabled={isLoading} className="gap-2">
                {isLoading ? (
                  <>
                    <Loader className="h-4 w-4 animate-spin" />
                    Creating Event...
                  </>
                ) : (
                  <>
                    <Plus className="h-4 w-4" />
                    Create Event
                  </>
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
