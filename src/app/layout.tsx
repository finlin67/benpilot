import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { TopNav } from "@/components/TopNav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "PilotBen",
  description:
    "A kid-friendly Microsoft Flight Simulator 2024 companion for young pilots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <TopNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
