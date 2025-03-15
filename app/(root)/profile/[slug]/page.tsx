import HostProfileComponent from "@/components/hosts/HostProfile";
import { getUserById } from "@/lib/actions/user/getAllUser";
import { IUser } from "@/lib/types";
import React from "react";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const response = await getUserById(slug);

  if (response.status !== 200) {
    return (
      <div className="text-center text-red-500">
        {response.message || "User not found"}
      </div>
    );
  }

  const userData = response.data as unknown as IUser;

  return <HostProfileComponent userData={userData} />;
};

export default Page;
