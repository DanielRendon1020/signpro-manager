import Image from "next/image";
import Link from "next/link";

export default function HomeNavbar() {
  return (
    <div className="bg-gray-300 p-7">
      <div className="max-w-screen-2xl mx-auto">
        <nav className="flex justify-around">
          <ul className="flex my-auto text-gray-700 font-bold">
            <li className="me-8">
              <Link href={"/"}>
                <Image
                  src="/logo.svg"
                  alt="SignPro Manager"
                  width={271}
                  height={100}
                />
              </Link>
            </li>
            <li className="mx-8 text-2xl my-auto">
              <Link href="#">What is it</Link>
            </li>
            <li className="mx-8 text-2xl my-auto">
              <Link href="#">Why Us</Link>
            </li>
            <li className="mx-8 text-2xl my-auto">
              <Link href={"/pricing"}>How Much</Link>
            </li>
          </ul>
          <div className="flex font-bold text-xl">
            <button className="mx-3 my-auto px-5 py-2 bg-white hover:bg-gray-200 rounded-full h-auto text-gray-700">
              Sign In
            </button>
            <button className="mx-3 my-auto px-5 py-2 bg-orange-500 hover:bg-orange-600 rounded-full h-auto">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
