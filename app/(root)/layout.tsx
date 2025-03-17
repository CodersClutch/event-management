import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { AppSidebar } from "@/components/app-sidebar";
import { NavUser } from "@/components/nav-user";
import ThemeToggle from "@/components/sidebar/ThemeToggle";
import { Nunito } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Settings } from "lucide-react";
import { auth } from "@/auth";
import { Toaster } from "sonner";
import { EdgeStoreProvider } from "@/components/provider/edgestore";
import { redirect } from "next/navigation"; // Import the redirect function
import { getUserRole } from "@/lib/database"; // Function to fetch the role

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Event Management",
  description: "Event Management Dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  // Fetch the user's role from the database
  const userRole = session?.user?.email ? await getUserRole(session.user.email) : null;

  // Check if the user is a host and trying to access the dashboard
  if (userRole === "Hosts" && typeof window !== "undefined" && window.location.pathname === "/dashboard") {
    redirect("/"); // Redirect to the home page
  }

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`${nunito.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <EdgeStoreProvider>
              <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                  <header className="flex h-16 shrink-0 items-center gap-2 justify-between overflow-hidden bg-[#21BCE6]">
                    <div className="flex items-center gap-2 px-4">
                      <SidebarTrigger className="-ml-1" />
                      <Separator orientation="vertical" className="mr-2 h-4" />
                    </div>
                    <div className="flex items-center gap-3">
                      <Settings />
                      <ThemeToggle />
                      <NavUser
                        user={{
                          name: session?.user?.name || "Guest",
                          email: session?.user?.email || "",
                          avatar: session?.user?.image || "https://example.com/john-doe.jpg",
                        }}
                      />
                    </div>
                  </header>
                  <Separator />
                  <div className="p-5 overflow-hidden">{children}</div>
                </SidebarInset>
              </SidebarProvider>
              <Toaster richColors />
            </EdgeStoreProvider>
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}