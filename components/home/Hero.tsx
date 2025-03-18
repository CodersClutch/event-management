import { auth } from "@/auth";
import Link from "next/link";
import { Button } from "../ui/button";

export default async function Hero() {
  const session = await auth();

  return (
    <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-[90%] object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="https://videos.pexels.com/video-files/854056/854056-sd_640_360_25fps.mp4"
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black h-[80%] bg-opacity-50"></div> */}

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl font-bold mb-4 mt-10 pb-10">
          Connecting Families with <br /> Engaging Activities
        </h1>
        {session?.user.role.name === "Hosts" ? (
          <>
            <Link
              href="/profile/host-events"
              className="px-6 py-3 text-lg bg-gradient-to-b hover:bg-gradient-to-t border hover:from-[#A22D9E] mt-10 hover:to-[#F34CF1]  rounded-full shadow-md transition"
            >
              My Events
            </Link>
          </>
        ) : session?.user.role.name === "Attendees" ? (
          <>
            <Link
              href="/profile/host-events"
              className="px-6 py-3 text-lg bg-gradient-to-b hover:bg-gradient-to-t border hover:from-[#A22D9E] mt-10 hover:to-[#F34CF1]  rounded-full shadow-md transition"
            >
              Find my tickets
            </Link>
          </>
        ) : (
          <>
            <Button className="px-6 py-3 text-lg bg-gradient-to-b hover:bg-gradient-to-t border hover:from-[#A22D9E] mt-10 hover:to-[#F34CF1]  rounded-full shadow-md transition">
              Welcome
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
