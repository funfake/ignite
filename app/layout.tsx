// app/layout.tsx
// root layout file
// using color wrapper to change the whole website colors dynamically
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ColorWrapper from "@/components/color-wrapper";
import { Analytics } from "@vercel/analytics/react";

// custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ignite | Pitch a random startup",
  description: "A tool using Mistral AI",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <ColorWrapper>{children}</ColorWrapper>
      </body>
    </html>
  );
}
