import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import SessionProvider from "./Auth/SessionProvider";
import { getServerSession } from "next-auth";

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
  colorScheme: "light",
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession()
  return (
    
      <html lang="en" style={{ scrollBehavior: "smooth" }}>
        <body className={sansation.className}>
          <div className="flex-col selection:bg-orange-400 bg-gray-100">
            <SessionProvider session={session}>
              {children}
            </SessionProvider>
          </div>
        </body>
      </html>
    
  );
}
