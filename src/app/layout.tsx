import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const font = localFont({
  src: "./_fonts/Figtree-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-primary text-foreground font-sans antialiased",
          font.variable
        )}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
