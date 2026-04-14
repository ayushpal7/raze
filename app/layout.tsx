import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RaZe | Protocol Dashboard",
  description: "Next-generation server sovereignty and antinuke defense.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} bg-[#060606] text-white selection:bg-cyan-500 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
