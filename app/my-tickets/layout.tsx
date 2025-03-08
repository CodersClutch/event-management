import type { Metadata } from "next";
import "../globals.css";
import { Nunito } from "next/font/google";
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
  return (
      <html lang="en">
        <body className={`${nunito.className}`}>
          <div className="p-5 overflow-hidden">{children}</div>
        </body>
      </html>
  );
}
