import type { Metadata } from "next";
import NavContent from "@/components/navContent";
import Footer from "@/components/footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DESHAN MCLACHLAN",
  description: "Web developer and designer based in Melbourne, Australia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavContent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
