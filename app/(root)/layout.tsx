import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "4kiddos",
  description: "An event management webapp",
};

import { ReactNode } from "react";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import { EdgeStoreProvider } from "@/components/provider/edgestore";
import { fetchRolesServerAction } from "@/lib/actions/role/roleServerAction";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  await fetchRolesServerAction();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <head>
          {/* ✅ Ensures responsive scaling */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        >
          <EdgeStoreProvider>
            {/* ✅ Navbar with a responsive container */}
            <Navbar />

            {/* ✅ Main content container with proper padding */}
            {/* <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main> */}
            <main>{children}</main>

            {/* ✅ Footer is always visible & responsive */}
            <Footer />
            <Toaster richColors />
          </EdgeStoreProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
