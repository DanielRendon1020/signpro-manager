import DashNavbar from "../components/server/DashNavbar";
import { getServerSession } from "next-auth";

export default async function DashLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

    const session = await getServerSession();


  return (
    <>
      <DashNavbar />
      {children}
    </>
  )
}
