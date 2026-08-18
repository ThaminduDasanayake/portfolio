import type { Metadata } from "next";
import { Space_Mono, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const spaceGroteskHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thamindu Dasanayake — Software Engineer & Designer",
  description:
    "Portfolio of Thamindu Dasanayake, a software engineer and designer specializing in full-stack architecture, interactive motion, and AI systems.",
  keywords: [
    "Thamindu Dasanayake",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "AI",
  ],
  authors: [{ name: "Thamindu Dasanayake" }],
  creator: "Thamindu Dasanayake",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark antialiased",
        spaceMono.variable,
        geist.variable,
        spaceGroteskHeading.variable,
        "font-sans"
      )}
    >
      <body className="bg-background text-foreground selection:bg-accent-foreground selection:text-accent min-h-screen">
        {children}
      </body>
    </html>
  );
}
