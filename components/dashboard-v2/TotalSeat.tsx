"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Label } from "../ui/label";
import CountDown from "../common/CountDown";
import ProfileComponent from "../common/ProfileComponent";

// user profile dummy data
const data = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    middleName: "Jane",
    email: "johndoe@example.com",
    // avatar: "/images/john-doe.jpg",
  },
  {
    id: 2,
    firstName: "Alice",
    lastName: "Brown",
    middleName: "Jane",
    email: "alicebrown@example.com",
    // avatar: "/images/alice-brown.jpg",
  },
  {
    id: 3,
    firstName: "Eve",
    lastName: "Black",
    middleName: "Jane",
    email: "eveblack@example.com",
    // avatar: "/images/eve-black.jpg",
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "Smith",
    middleName: "Jane",
    email: "bobsmith@example.com",
    // avatar: "/images/bob-smith.jpg",
  },
  {
    id: 5,
    firstName: "Alice",
    lastName: "Green",
    middleName: "Jane",
    email: "alicegreen@example.com",
    // avatar: "/images/alice-green.jpg",
  },
];

const TotalSeat = () => {
  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 h-full">
          <CardTitle className="text-2xl">RECENT SELLS</CardTitle>
          {/* <Button variant={"link"}>View all</Button> */}
        </CardHeader>
        <Separator />

        <CardContent>
          {data?.map((item) => (
            <Link
              href={`/dashboard/event/${item.id}`}
              key={item.id}
              className="-mx-1 flex justify-between  items-start space-x-4 rounded-md p-3 transition-all hover:bg-accent bg-accent/50 hover:text-accent-foreground mt-3"
            >
              <div className="flex md:flex-row flex-col">
                <ProfileComponent
                  // avatar={item.avatar}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  middleName={item.middleName}
                  email={item.email}
                />
              </div>
              <div>
                <Label className="text-sm font-thin mr-2">Time Left</Label>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default TotalSeat;
