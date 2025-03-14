"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Globe, Edit, Activity, Star } from "lucide-react";
import { IUser } from "@/lib/types";
import { userSchema } from "@/lib/validation/userValidation";
import { toast, Toaster } from "sonner";
import { updateUser } from "@/lib/actions/user/updateUserAction";
import { useEdgeStore } from "../provider/edgestore";
import { useState } from "react";
import { SingleImageDropzone } from "../SingleImageDropzone";
const HostProfileComponent = ({ userData }: { userData: IUser }) => {
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();

  
  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: userData.firstName,
      initial: userData.initial || "",
      lastName: userData.lastName,
      phoneNumber: userData.phoneNumber || "",
      avatar: userData.avatar || "",
      address: {
        street: userData.address?.street || "",
        city: userData.address?.city || "",
        country: userData.address?.country || "",
      },
    },
  });

  const UploadImage = async () => {
    if (!file) return null;
    try {
      const res = await edgestore.publicFiles.upload({ file });
      return res.url;
    } catch (error) {
      toast.error("Image upload failed");
      return null;
    }
  };


  // The form submission function
  async function onSubmit(data: any) {
    try {
      // Directly call the server action for updating the user profile
      const status = await updateUser(userData._id, data);

      if (status.status === 200) {
        toast.success("Profile updated successfully");
      } else {
        toast.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.warning("An error occurred while updating your profile");
    }
  }
      
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="rounded-2xl shadow-xl border-0 overflow-hidden bg-gradient-to-br from-white to-gray-50">
        {/* Profile Header with Gradient Background */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Avatar className="w-24 h-24 border-4 border-white shadow-lg hover:scale-105 transition-transform">
                <AvatarImage src="/profile.jpeg" alt="Amadou Jamanka" />
                <AvatarFallback className="text-2xl font-bold bg-white text-yellow-600">
                  USER
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold text-white">
                    {userData.firstName +
                      " " +
                      userData.initial +
                      " " +
                      userData.lastName}
                  </h1>
                  <span
                    className={`px-3 py-1 rounded-full ${
                      userData.status === "active"
                        ? "bg-green-500"
                        : userData.status === "suspended"
                        ? "bg-red-500"
                        : "bg-orange-500"
                    }`}
                  >
                    <span className="text-sm text-white">
                      {userData.status}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span className="flex items-center gap-1">
                    <MapPin size={18} />
                    <span className="font-medium">
                      {userData.address?.city && userData.address?.country
                        ? `${userData.address.country}, ${userData.address.city}`
                        : "Edit profile to set location"}
                    </span>
                  </span>
                  <span className="h-4 w-px bg-white/40"></span>
                  <a
                    href="#"
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    <Globe size={18} />
                    <span className="font-medium underline decoration-transparent hover:decoration-white">
                      {userData.email}
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-white text-yellow-600 hover:bg-gray-50 hover:text-yellow-700 shadow-md gap-2">
                  <Edit size={18} />
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-3 gap-4">
                      {/* First Name */}
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Initial */}
                      <FormField
                        control={form.control}
                        name="initial"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Initial</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="M" maxLength={1} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Last Name */}
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Phone Number */}
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input {...field} type="tel" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Avatar URL */}
                <FormField
                  control={form.control}
                  name="avatar"
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

                    {/* Address Section */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium">Address</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="address.street"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Street</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="address.city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="address.country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-4">
                      <DialogTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogTrigger>
                      <Button
                        type="submit"
                        className="bg-yellow-600 hover:bg-yellow-700"
                      >
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>{" "}
          </div>
        </div>

        <CardContent className="p-6 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 py-4">
            {[
              { label: "Events Hosted", value: "127" },
              { label: "Experience", value: "5yrs" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 bg-white rounded-xl border border-gray-100 cursor-pointer shadow-sm hover:shadow-md"
              >
                <div className="text-2xl font-bold text-[#711854]">
                  {stat.value}
                </div>
                <div className="text-sm text-[#711854] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* About Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-yellow-400 rounded-full"></span>
              About Me
            </h3>
            <p className="text-gray-600 leading-relaxed">
              🎉 Event Architect & Experience Curator
              <br />
              Specializing in creating unforgettable moments through
              meticulously planned events. From intimate gatherings to
              large-scale festivals, I blend creativity with precision to
              deliver seamless experiences. Certified Event Planner with a
              passion for innovative tech integrations.
            </p>
          </section>

          {/* Interests Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-yellow-400 rounded-full"></span>
              Expertise & Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Event Planning",
                "Music Festivals",
                "Tech Conferences",
                "VIP Experiences",
                "Logistics Management",
                "Stage Design",
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-full 
                             hover:bg-yellow-200 transition-colors cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </section>

          {/* Activity Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Activity size={20} className="text-yellow-500" />
              Recent Events
            </h3>
            <div className="space-y-4">
              {[
                {
                  date: "2024-03-15",
                  event: "Tech Innovators Summit 2024 - Published",
                },
                {
                  date: "2024-03-12",
                  event: "Updated venue details for Summer Music Fest",
                },
                {
                  date: "2024-03-10",
                  event: "Received 25 new registrations for AI Conference",
                },
              ].map((activity) => (
                <div
                  key={activity.date}
                  className="flex items-center gap-4 p-3 bg-white rounded-lg 
                                                   shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-sm font-medium text-yellow-600">
                    {activity.date}
                  </div>
                  <div className="h-px flex-1 bg-gray-100"></div>
                  <div className="text-gray-600">{activity.event}</div>
                </div>
              ))}
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default HostProfileComponent;
