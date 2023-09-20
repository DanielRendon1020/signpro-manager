import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import HomeNavbar from "./components/HomeNavbar";
import Footer from "./components/Footer";
import AuthProvider from "./Auth/AuthProvider";
import { getServerSession } from 'next-auth';
import DashNavbar from "./components/DashNavbar";

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


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession();

  // if (session) {
  //   const showDash = <DashNavbar />
  //   const noFooter = <></>
  // }

  return (
    <AuthProvider>
      <html lang="en" style={{ scrollBehavior: "smooth" }}>
        <body className={sansation.className}>
          <div className="flex-col selection:bg-orange-400 scroll-smooth">
            {(!session) ? <HomeNavbar /> : <DashNavbar />}
            {children}
            {(!session) ? <Footer /> : <></>}
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
