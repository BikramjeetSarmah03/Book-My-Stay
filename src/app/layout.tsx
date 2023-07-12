import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Footer from "@/components/layout/Footer";
import ClientOnly from "@/components/common/ClientOnly";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book My Stay",
  description: "Hotel Booking Web App made using NextJs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
        <Footer />
      </body>
    </html>
  );
}
