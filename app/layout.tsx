import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "DriveWell",
  description: "Generated by create next app",
  icons: {
    icon: "/logo.svg",
  },
};

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
