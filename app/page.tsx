import LandingPage from "./components/LandingPage";
import HomeNavbar from "./components/server/HomeNavbar";
import DashNavbar from "./components/server/DashNavbar";
import Footer from "./components/server/Footer";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function Home() {

  const session = await getServerSession()

  if (!session) {
    return (
        <>
        <HomeNavbar />
        <LandingPage />
        <Footer />
      </>
    )
  } else {
    return (
      redirect("/dashboard")
    ) 
  
  }
}
