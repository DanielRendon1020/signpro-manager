import LandingPage from "./components/LandingPage";
import HomeNavbar from "./components/server/HomeNavbar";
import DashNavbar from "./components/server/DashNavbar";
import Footer from "./components/server/Footer";


export default async function Home() {

    return (
        <>
        <HomeNavbar />
        <LandingPage />
        <Footer />
      </>
    )
   
}
