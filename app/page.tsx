import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import HomeNavbar from "./components/server/HomeNavbar";
import DashNavbar from "./components/server/DashNavbar";
import Footer from "./components/server/Footer";
import { getServerSession } from "next-auth";


export default async function Home() {

  const session = await getServerSession()

  if (session) {
    return (
      <>
        <DashNavbar />
        <Dashboard />
      </>
    )
  } else {
    return (
      <>
        <HomeNavbar />
        <LandingPage />
        <Footer />
      </>
    ) 
  
  }
}
