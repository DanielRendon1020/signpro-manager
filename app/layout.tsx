import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import HomeNavbar from "./components/HomeNavbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const sansation = localFont({
  src: [
    {
      path: "./fonts/Sansation_Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/Sansation_Bold.woff2",
      weight: "700",
    },
  ],
});

export const metadata: Metadata = {
  title: "SignPro Manager",
  description: "Manage your projects with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sansation.className}>
        <div className="flex-col">
          <HomeNavbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
