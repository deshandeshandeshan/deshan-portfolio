import type { Metadata } from "next";
import NavContent from "@/components/navContent";
import Footer from "@/components/footer";
<<<<<<< HEAD:app/(site)/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
=======
import "./globals.css";
>>>>>>> 021eb7b35c382e79edc73c742015921925ca19c1:app/layout.tsx

export const metadata: Metadata = {
  title: "DESHAN MCLACHLAN",
  description: "Web developer and designer based in Melbourne, Australia.",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <NavContent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
