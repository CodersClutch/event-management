import { CiHeart } from "react-icons/ci";
import { notFound } from "next/navigation";
import Image from "next/image";
// <<<<<<< feature/web-event
// import { allEvents } from "@/lib/events";
import { MdShare, MdTimerOff } from "react-icons/md";
import { BsBookmarksFill, BsPeople } from "react-icons/bs";
import { FaCalendarCheck } from "react-icons/fa6";
import { BsCollectionPlayFill } from "react-icons/bs";
import { BiChevronRight, BiCloset, BiX } from "react-icons/bi";
import { MdOutlineTimer } from "react-icons/md";
import { IoGlobeSharp } from "react-icons/io5";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import OrganizerCard from "@/components/TabsCategory/OrganizerCard";
import MoreEventsFromOrganizer from "@/components/TabsCategory/MoreEventsFromOrganizer";
import OtherEvents from "@/components/TabsCategory/OtherEvents";
import { ListStart, Locate, MapPinCheck, Timer, Underline } from "lucide-react";
import { MdOutlineLocationOn, MdLocationCity } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { BiCurrentLocation } from "react-icons/bi";
import { events } from "@/constants/events";
import { GetSingleEvent } from "@/lib/actions/event/GetAllEvent";
import { formatReadableDate } from "@/lib/utils";
import CountDown from "@/components/common/CountDown";

const EventPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const { data, status, message } = await GetSingleEvent(id);
  console.log(data);

  // const event = events.find((e) => e.id === "AAE-001");

  // if (!event) {
  //   notFound();
  // }

  return (
    <>
      <div className="max-w-[1200px] mx-auto pt-20 md:pt-[150px] pb-16 px-4 md:px-6">
        <div className="relative h-[300px] md:h-[400px] mb-8">
          <Image
            src={
              data?.image ||
              "https://img.freepik.com/free-psd/kitschy-colors-youtube-cover-template_23-2150544102.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid"
            }
            alt={data?.title}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="mx-auto font-sans">
          {/* Date */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
            <div className="flex space-x-3">
              <CiHeart className="text-2xl" />
              <MdShare className="text-2xl" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="space-y-8 md:space-y-14 w-full lg:w-auto">
              {/* Title */}
              <h1 className="text-3xl md:text-[40px] font-extrabold text-gray-900 leading-tight">
                {data?.title}
              </h1>
              <div>
                <div className="flex items-center justify-between gap-10">
                  <div className="flex  md:flex-row md:items-center gap-2 mt-3 text-xl">
                    <ListStart className="w-4 h-4 text-gray-500" />
                    <span className="font-medium">Start Date:</span>
                    {formatReadableDate(data?.schedule?.start)}
                  </div>
                  <div className="flex  md:flex-row md:items-center gap-2 mt-3 text-xl mr-10">
                    <ListStart className="w-4 h-4 text-gray-500" />
                    <span className="font-medium">End Date:</span>
                    {formatReadableDate(data?.schedule?.end)}
                  </div>
                </div>

                {/* Maximum Participants */}
                <div className="flex  md:flex-row md:items-center gap-2 mt-3 text-xl">
                  <Underline className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">Max Participants:</span>
                  {data?.maxParticipants}
                </div>

                {/* Registration Deadline */}
                <div className="flex  md:flex-row md:items-center gap-2 mt-3 text-xl">
                  <Timer className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">Registration Deadline:</span>
                  {formatReadableDate(data?.registrationDeadline)}
                </div>

                {/* Countdown Timer */}
                <div className="mt-3">
                  <CountDown
                    registrationDeadline={data?.registrationDeadline}
                    eventStart={data?.schedule?.start}
                    status={data?.status}
                  />
                </div>
              </div>
              {/* Description */}
              <p className="text-gray-600 text-base md:text-lg mt-2 md:mt-4 max-w-3xl">
                {data?.description}
              </p>

              {/* Organizer Section */}
              <div className="flex items-center bg-gray-100 p-4 rounded-lg mt-4 md:mt-6 w-full md:w-96">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-2xl">V</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-base md:text-lg">
                    By <span className="text-[#D942D6]">{data?.organizer}</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Ticket and Pricing */}
            <div className="lg:sticky lg:top-[150px] mt-8 lg:mt-0 w-full lg:w-64 self-start">
              <div className="flex flex-col items-end w-full transition-transform duration-300">
                <div className="bg-[#d942d678] p-1 rounded-t-xl font-medium w-full text-center">
                  <p className="flex space-x-3 items-center justify-center">
                    <BsBookmarksFill /> 2 for 1 deal
                  </p>
                </div>
                <div className="bg-gray-100 p-4 md:p-6 rounded-lg text-center w-full">
                  <p className="text-xl md:text-2xl font-semibold whitespace-nowrap">
                    Price Starts at ${data?.price}
                  </p>
                  <button className="mt-3 bg-[#D942D6] text-white px-4 md:px-10 py-2 rounded-lg hover:bg-red-700 w-full">
                    Get tickets
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>

          {/* Date and Time */}
          <div className="border-t pt-6 mt-6 flex flex-col space-y-8 md:space-y-10">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Date and time
              </h3>
              <div className="flex items-center text-black font-medium mt-2 text-sm">
                <FaCalendarCheck className="mr-2" />
                <p> {formatReadableDate(data?.schedule?.start)}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Location</h3>
              <div className="flex items-center text-black font-medium mt-2 text-sm">
                <MapPinCheck className="mr-2" />
                <p>{data?.location}</p>
              </div>

              <div className="flex items-center text-black font-medium mt-2 text-sm">
                <BsCollectionPlayFill className="mr-2" />
                <p>{data?.mode}</p>
              </div>
            </div>

            <div className="max-w-3xl w-full">
              <div className="flex flex-row items-center justify-between">
                <p className="text-xl md:text-2xl font-semibold">
                  Good to Know
                </p>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <span className="flex flex-row items-center justify-center">
                      View all <BiChevronRight />
                    </span>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="">
                    <AlertDialogHeader className="flex justify-end items-end">
                      <AlertDialogCancel>
                        <BiX />
                      </AlertDialogCancel>
                    </AlertDialogHeader>
                    <div className="space-y-9">
                      <div className="px-4 md:px-6">
                        <span className="text-base md:text-lg font-bold">
                          Highlights
                        </span>
                        <div className="flex flex-col space-y-2 px-2 pt-1">
                          <p className="flex text-gray-500 items-center justify-start">
                            <MdOutlineTimer className="mr-3 text-black" />
                            {formatReadableDate(data?.schedule?.start)}
                          </p>
                          <p className="flex text-gray-500 items-center justify-start">
                            <IoGlobeSharp className="mr-3 text-black" />
                            {data?.mode}
                          </p>
                        </div>
                      </div>

                      <div className="px-4 md:px-6">
                        <span className="text-base md:text-lg font-bold">
                          Refund Policy
                        </span>
                        <p className="flex text-gray-500 items-center justify-start">
                          <MdOutlineTimer className="mr-3 text-black" />
                          {data?.refundPolicy}
                        </p>
                      </div>
                      <div className=" p-4 md:p-6">
                        <span className="text-sm md:text-base font-bold">
                          Location
                        </span>
                        <div className="mt-2 text-gray-500 space-y-1">
                          <p className="flex items-center">
                            <MdOutlineLocationOn className="mr-2 text-black" />
                            <span>{data?.geolocation?.address}</span>
                          </p>
                          <p className="flex items-center">
                            <MdLocationCity className="mr-2 text-black" />
                            <span>
                              {data?.geolocation?.city},{" "}
                              {data?.geolocation?.state}
                            </span>
                          </p>
                          <p className="flex items-center">
                            <FaGlobeAmericas className="mr-2 text-black" />
                            <span>{data?.geolocation?.country}</span>
                          </p>
                          <p className="flex items-center text-sm text-gray-400">
                            <GiPositionMarker className="mr-2 text-black" />
                            <span>{data?.geolocation?.coordinates}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>

              <div className="mt-8 md:mt-10 flex flex-col md:flex-row gap-4 md:gap-10">
                <div className="h-auto md:h-[250px] w-full md:w-[250px] shadow-xl rounded-xl p-4 md:p-6">
                  <span className="text-sm md:text-base font-bold">
                    Highlights
                  </span>
                  <div className="flex flex-col space-y-2 px-2 pt-1">
                    <p className="flex text-gray-500 items-center justify-start">
                      <MdOutlineTimer className="mr-3 text-black" />
                      {data?.duration}
                    </p>
                    <p className="flex text-gray-500 items-center justify-start">
                      <IoGlobeSharp className="mr-3 text-black" />
                      {data?.mode}
                    </p>
                    <p className="flex text-gray-500 whitespace-nowrap items-center justify-start">
                      <MdTimerOff className="mr-3 text-black" /> Deadline{"  "}
                      {formatReadableDate(data?.registrationDeadline)}
                    </p>
                    <p className="flex text-gray-500 items-center justify-start">
                      <BsPeople className="mr-3 text-black" /> Capacity{" "}
                      {data?.capacity}
                    </p>
                  </div>
                </div>
                <div className="h-auto md:h-[250px] w-full md:w-[250px] shadow-xl rounded-xl p-4 md:p-6">
                  <span className="text-sm md:text-base font-bold">
                    Refund Policy
                  </span>
                  <p className="flex text-gray-500 items-center justify-start">
                    <MdOutlineTimer className="mr-3 text-black" />
                    {data?.refundPolicy}
                  </p>
                </div>

                {/* Geolocation */}
                <div className="h-auto md:h-[250px] w-full md:w-[250px] shadow-xl rounded-xl p-4 md:p-6">
                  <span className="text-sm md:text-base font-bold">
                    Location
                  </span>
                  <div className="mt-2 text-gray-500 space-y-1">
                    <p className="flex items-center">
                      <MdOutlineLocationOn className="mr-2 text-black" />
                      <span>{data?.geolocation?.address}</span>
                    </p>
                    <p className="flex items-center">
                      <MdLocationCity className="mr-2 text-black" />
                      <span>
                        {data?.geolocation?.city}, {data?.geolocation?.state}
                      </span>
                    </p>
                    <p className="flex items-center">
                      <FaGlobeAmericas className="mr-2 text-black" />
                      <span>{data?.geolocation?.country}</span>
                    </p>
                    <p className="flex items-center text-sm text-gray-400">
                      <GiPositionMarker className="mr-2 text-black" />
                      <span>{data?.geolocation?.coordinates}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* description section */}
            <div className="space-y-6 md:space-y-8">
              <p className="font-bold text-xl md:text-2xl">About this event</p>
              <p className="text-base md:text-lg font-medium">{data?.title}</p>
              <p className="text-gray-500 max-w-3xl w-full">
                {data?.description}
              </p>
            </div>

            {/* <OrganizerCard organizer={data?.organizer} />
            <MoreEventsFromOrganizer events={data?.moreEvents} /> */}
          </div>
        </div>
      </div>
      <OtherEvents />
    </>
  );
};

export default EventPage;
