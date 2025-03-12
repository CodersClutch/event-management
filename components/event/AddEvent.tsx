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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Textarea } from "../ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";
import { useSession } from "next-auth/react";
import { EventHook } from "@/hooks/EventHook";
import { categories, categories2 } from "@/constants";

const AddEvent = () => {
  const { HandleAddEvent, isLoading } = EventHook();
  const [open, setOpen] = useState<boolean>();
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
      images: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit() {
    // form values
    const formData = {
      ...form.getValues(),
      createdBy: session?.user?._id,
      price: Number(form.getValues("price")),
    };

    const status = await HandleAddEvent(formData);
    console.log("sesso", session?.user?.id);
    // close the dialog when the status is 200
    if (status?.status === 200) {
      setOpen(false);
      form.reset();
    }
  }
  // ousainou trying to piss me of
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          Add Event <Plus className="h-3.5 w-3.5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-visible">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <DialogHeader>
              <DialogTitle>Add Event</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when youre done.
              </DialogDescription>
            </DialogHeader>
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
                      {/* <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a deadline</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            // disabled={(date) =>
                            //   date > new Date() || date < new Date("1900-01-01")
                            // }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover> */}

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
            </div>
            <DialogFooter>
              <DialogClose type="button">
                <Button variant={"outline"} type="button">
                  {" "}
                  cancel
                </Button>
              </DialogClose>

              <Button disabled={isLoading} type="submit">
                {isLoading ? "Saving  events" : "Save event"}
                {isLoading ? (
                  <Loader className="animate-spin" />
                ) : (
                  <Plus className="h-3.5 w-3.5 ml-2 " />
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
