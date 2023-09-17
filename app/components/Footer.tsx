import Image from "next/image";
import Link from "next/link";
import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiCoffeeTogo,
  BiSolidPizza,
} from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="bg-gray-300 p-7 mb-0 shrink-0">
      <div className="max-w-screen-2xl mx-auto flex justify-between">
        <div className="flex flex-col p-2 justify-between">
          <ul className="font-bold">
            <li className="p-2"><Link href={"/pricing"}>Pricing</Link></li>
            <li className="p-2 pointer-events-none"><a href="">FAQs</a></li>
            <li className="p-2 pointer-events-none"><a href="">Contact Us</a></li>
            <li className="p-2 pointer-events-none"><a href="">Demo</a></li>
          </ul>
            <p className="p-2">© 2023 SignPro Manager</p>
        </div>
        <div className="flex flex-col font-bold my-auto ms-auto me-12 text-right">
          <p className="p-2 text-2xl">Questions?</p>
          <hr />
          <p className="p-2 text-4xl mb-4">000-000-0000</p>
          <p className="p-2 text-2xl">Follow Us</p>
          <hr />
          <div className="flex justify-end p-2 text-5xl">
            <a
              href="https://github.com/DanielRendon1020/signpro-manager"
              target="_blank"
            >
              <BiLogoGithub className="mx-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/danielrendon-dev/"
              target="_blank"
            >
              <BiLogoLinkedin className="mx-2" />
            </a>
            <a href="https://www.buymeacoffee.com/danielrendon" target="_blank">
              <BiCoffeeTogo className="mx-2" />
            </a>
            <a href="" className=" pointer-events-none">
              <BiSolidPizza className="mx-2" />
            </a>
          </div>
        </div>
        <Image
          src="/logo_footer.svg"
          alt="SignPro Manager"
          width={168}
          height={276}
          className="ms-12 p-2"
        />
      </div>
    </footer>
  );
}
