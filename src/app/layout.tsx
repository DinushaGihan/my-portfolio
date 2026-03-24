import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Stardos_Stencil } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const stencil = Stardos_Stencil({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-stencil", 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dinusha Gihan | Software Engineer",
  description: "Portfolio of Dinusha Gihan, specializing in Blockchain, Mobile Development, and Technical Research.",
  icons: {
    icon: "/projects/icon.jpg", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${stencil.variable} antialiased`}
        
        suppressHydrationWarning
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}

