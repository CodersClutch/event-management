import { auth } from "@/auth";
import AttendeeProfile from "@/components/AttendeeProfile";
import HostProfile from "@/components/HostProfile";
import { IUser } from "@/lib/types";
import React from "react";

const page = async () => {
  const session = await auth();
  console.log(`USERROLE IS  ==================>  ${session?.user.role.name}`);

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
