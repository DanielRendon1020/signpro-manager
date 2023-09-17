import Image from "next/image";
import Testimonials from "./components/testimonials";

export default function Home() {
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
      <h2 id="why-us">Everything you need</h2>
      <h2>Trusted by the best</h2>
      <Testimonials />
    </main>
  );
}
