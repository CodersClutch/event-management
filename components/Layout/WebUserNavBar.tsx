"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { logout } from "@/lib/actions/auth/Signout";
import AddEvent from "../event/AddEvent";
import { useEffect } from "react";

const WebUserNavBar = () => {
  const { data: session } = useSession();
  // console.log(session);

  const handleClick = async () => {
    await logout();
    window.location.assign("/");
  };

  // whenever the login user is an Administrator always authomatically redirect them to the dashboard
  useEffect(() => {
    if (session?.user.role.name === "Administrator") {
      window.location.assign("/dashboard");
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size={"icon"}
          variant="outline"
          className="relative h-12 w-12 rounded-full border-primary"
        >
          <Avatar className="h-15 w-15">
            <AvatarImage src="/avatars/03.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session?.user?.firstName +
                " " +
                " " +
                session?.user?.initial +
                " " +
                session?.user?.lastName}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link
            href={
              session?.user.role.name === "Administrator"
                ? "/dashboard"
                : `/profile`
            }
            className=" cursor-pointer"
          >
            <DropdownMenuItem>
              {session?.user.role.name === "Administrator"
                ? "Dashboard"
                : "Profile"}
            </DropdownMenuItem>
          </Link>
          <Link
            href={
              session?.user.role.name === "Administrator"
                ? "/dashboard/transaction"
                : "/transaction"
            }
          >
            <DropdownMenuItem>
              {session?.user.role.name === "Administrator"
                ? "Transactions"
                : "Transactions"}
            </DropdownMenuItem>
          </Link>

          <Link
            href={
              session?.user.role.name === "Administrator"
                ? "/dashboard/settings"
                : `/profile/${session?.user.id}`
            }
          >
            <DropdownMenuItem>
              {session?.user.role.name === "Administrator"
                ? "Settings"
                : "Info"}
            </DropdownMenuItem>
          </Link>

          {session?.user.role.name === "Attendees" ? null : <AddEvent />}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Button
            className="w-full"
            variant={"destructive"}
            onClick={handleClick}
          >
            Log out
          </Button>

          {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default WebUserNavBar;
