import { auth } from "@/auth";
import AttendeeProfile from "@/components/AttendeeProfile";
import HostProfile from "@/components/HostProfile";
import React from "react";

const page = async () => {
  const session = await auth();

  return (
    <div>
      {session?.user.role.name === "Hosts" ? (
        <>
          <HostProfile />
        </>
      ) : session?.user.role.name === "Attendees" ? (
        <>
          <AttendeeProfile userId={session?.user._id || ""} />
        </>
      ) : (
        <>
          {" "}
          <div>no data</div>
        </>
      )}
    </div>
  );
};

export default page;
