import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RAZE | Advanced Discord Defense",
  description: "Elite Antinuke and Giveaway management for the next-gen Discord ecosystem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} bg-[#050505] text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
