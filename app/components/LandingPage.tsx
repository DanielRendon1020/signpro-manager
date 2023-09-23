import Testimonials from "./client/testimonials";
import Features from "./server/Features";
import Marquee from "react-fast-marquee";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiPrisma,
  SiFigma,
  SiOpenai,
  SiYoutube,
  SiBuymeacoffee,
} from "react-icons/si";
import { BsShieldFill } from "react-icons/bs";
import { getServerSession } from 'next-auth';
import { redirect } from "next/navigation";

export default async function LandingPage() {

  const session = await getServerSession();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <main className="max-w-screen-2xl mx-auto flex-1 ">
      <h1 className="text-center font-bold text-5xl my-16">
        Crafting Significance, Managing Progress.
      </h1>
      <div className="h-96 bg-gray-500 mx-auto"></div>
      <p id="what-is-it" className="mt-20 max-w-3xl mx-auto">
        SignPro Manager is your all-in-one solution for sign fabrication
        businesses seeking to streamline their project management process. Our
        cutting-edge app seamlessly blends the artistry of sign creation with
        the precision of project management. From concept to installation,
        SignPro Manager simplifies the entire journey, allowing you to focus on
        crafting stunning signs while we handle the logistics. Create, assign,
        and track tasks effortlessly, collaborate with your team in real-time,
        and ensure project timelines are met with ease. With powerful tools for
        project planning, resource allocation, and seamless communication,
        SignPro Manager empowers you to bring your sign projects to life
        efficiently and with uncompromised quality. Elevate your sign
        fabrication business to new heights with SignPro Manager - where
        innovation meets craftsmanship.
      </p>
      <h2 id="why-us" className="font-bold text-2xl p-5 mt-20">
        Everything you need
      </h2>
      <Features />
      <h2 className="font-bold text-2xl p-5 text-right">Trusted by the best</h2>
      <Marquee
        className="text-6xl text-gray-500 my-5 mx-auto"
        pauseOnHover={true}
        autoFill={true}
        speed={50}
      >
        <SiNextdotjs className="mx-16 hover:text-orange-500" />
        <SiReact className="mx-16 hover:text-orange-500" />
        <SiTailwindcss className="mx-16 hover:text-orange-500" />
        <SiTypescript className="mx-16 hover:text-orange-500" />
        <SiSupabase className="mx-16 hover:text-orange-500" />
        <SiPrisma className="mx-16 hover:text-orange-500" />
        <BsShieldFill className="mx-16 hover:text-orange-500" />
        <SiFigma className="mx-16 hover:text-orange-500" />
        <SiOpenai className="mx-16 hover:text-orange-500" />
        <SiYoutube className="mx-16 hover:text-orange-500" />
        <SiBuymeacoffee className="mx-16 hover:text-orange-500" />
      </Marquee>
      <Testimonials />
    </main>
  );
}
