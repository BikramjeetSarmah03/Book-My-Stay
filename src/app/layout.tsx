import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Footer from "@/components/layout/Footer";
import ClientOnly from "@/components/common/ClientOnly";
import RegisterModal from "@/components/common/modals/RegisterModal";
import ToasterProvider from "@/providers/ToasterProvider";
import LoginModal from "@/components/common/modals/LoginModal";
import getCurrentUser from "@/actions/getCurrentUser";
import RentModal from "@/components/common/modals/RentModal";
import SearchModal from "@/components/common/modals/SearchModal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book My Stay",
  description: "Hotel Booking Web App made using NextJs",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <SearchModal />
        </ClientOnly>
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
