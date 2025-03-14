"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ChevronDown, Edit, Loader, Save } from "lucide-react";
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

import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Textarea } from "../ui/textarea";
import { EventHook } from "@/hooks/EventHook";
import { useSession } from "next-auth/react";
import { CATEGORIES, EventInterfaceType } from "@/lib/types";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";

const EditEvent = ({ event }: { event: EventInterfaceType }) => {
  const { handleUpdateEvent, isLoading } = EventHook();
  const [open, setOpen] = useState<boolean>(false);
  const { data: session } = useSession({ required: true });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  const form = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: event?.title || "",
      createdBy: session?.user?.id,
      schedule: {
        start: event?.schedule?.start
          ? new Date(event.schedule.start)
          : new Date(),
        end: event?.schedule?.end ? new Date(event.schedule.end) : new Date(),
      },
      status: event?.status,
      registrationDeadline: event?.registrationDeadline
        ? new Date(event.registrationDeadline)
        : new Date(),
      maxParticipants: event?.maxParticipants || 0,
      description: event?.description || "",
      location: event?.location || "",
      category: event?.category || "",
      price: event?.price || "",
      ageRange: event?.ageRange || "",
      // images: event?.images: ,
    },
  });

  useEffect(() => {
    form.reset({
      title: event?.title || "",
      createdBy: session?.user?.id,
      schedule: {
        start: event?.schedule?.start
          ? new Date(event.schedule.start)
          : new Date(),
        end: event?.schedule?.end ? new Date(event.schedule.end) : new Date(),
      },
      registrationDeadline: event?.registrationDeadline
        ? new Date(event.registrationDeadline)
        : new Date(),
      maxParticipants: event?.maxParticipants || ("0" as string),
      description: event?.description || "",
      location: event?.location || "",
      category: event?.category || "",
      price: event?.price || ("" as string),
      ageRange: event?.ageRange || "",
      // images: event?.images || [],
    });
  }, [event, form, session]);

  async function onSubmit() {
    const updatedEvent = {
      ...event,
      ...form.getValues(),
      price: Number(form.getValues("price")),
    };
    const status = await handleUpdateEvent(
      event._id,
      updatedEvent as unknown as EventInterfaceType
    );
    if (status?.status === 200) {
      setOpen(false);
      form.reset();
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="w-full flex justify-between" variant="outline">
          Edit
          <Edit />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <SheetHeader>
              <SheetTitle>Edit Event</SheetTitle>
              <SheetDescription>
                Modify the event details and save changes.
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
                        defaultValue={field.value as unknown as string}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Categorises</SelectLabel>

                            {CATEGORIES.map((element) => (
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
                      defaultValue={field.value as string}
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
                        placeholder="Tell us a little bit about yourself"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <SheetFooter>
              <SheetClose type="button">
                <Button variant="outline">Cancel</Button>
              </SheetClose>
              <Button disabled={isLoading} type="submit">
                {isLoading ? "Saving changes..." : "Save changes"}
                {isLoading ? (
                  <Loader className="animate-spin ml-2" />
                ) : (
                  <Save className="ml-2" />
                )}
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default EditEvent;
