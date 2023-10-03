import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignUpButton } from "../client/buttons";

export default function HomeNavbar() {
  return (
    <div className="bg-gray-300 dark:bg-gray-800 p-7">
      <div className="max-w-screen-2xl mx-auto">
        <nav className="flex justify-around">
          <ul className="flex my-auto text-gray-700 font-bold">
            <li className="me-8">
              <Link href={"/"}>
                <Image
                  src="/logo.svg"
                  alt="SignPro Manager"
                  width={208}
                  height={80}
                />
              </Link>
            </li>
            <li className="mx-8 text-2xl my-auto">
              <Link href="/#what-is-it">What is it</Link>
            </li>
            <li className="mx-8 text-2xl my-auto">
              <Link href="/#why-us">Why Us</Link>
            </li>
            <li className="mx-8 text-2xl my-auto">
              <Link href={"/pricing"}>How Much</Link>
            </li>
          </ul>
          <div className="flex font-bold text-xl">
            <SignUpButton />
            <SignInButton />
          </div>
        </nav>
      </div>
    </div>
  );
}
