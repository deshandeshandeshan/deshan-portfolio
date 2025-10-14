import type { Metadata } from "next";
import NavContent from "@/components/navContent";
import Footer from "@/components/footer";
import "./globals.css";

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
      <body className="">
        <NavContent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
