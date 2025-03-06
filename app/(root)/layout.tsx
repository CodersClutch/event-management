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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Ensures responsive scaling */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {/* ✅ Navbar with a responsive container */}
        <Navbar />

        {/* ✅ Main content container with proper padding */}
        {/* <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main> */}
        <main>
          {children}
        </main>

        {/* ✅ Footer is always visible & responsive */}
                <Footer/>

      </body>
    </html>
  );
}




