import Image from "next/image";
import Link from "next/link";
import { SignOutButton } from "../client/buttons";
// // import 'flowbite';
// import { Popover } from "flowbite";
// import type {  PopoverInterface } from "flowbite";

export default function DashNavbar() {

  // const handlePopover = (e: any) => {
  //   e.preventDefault();
  //   e.show();
    
  // }

  return (
    <>
      <nav className="bg-orange-500 dark:bg-orange-600 w-full z-20 top-0 left-0 border-b border-orange-300 dark:border-orange-600">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
          <Image
            src="/logo.svg"
            alt="SignPro Manager"
            width={123}
            height={47}
            className="ms-1 grayscale brightness-[5]"
          />
          <div className="flex md:order-2">
            <div className="text-white my-auto flex align-middle">
              <p className="my-auto me-1">User name</p>
              <SignOutButton />
            </div>

            {/* Nav collapse  */}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 dark:text-gray-400 dark:hover:bg-orange-700 dark:focus:ring-orange-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold text-xl border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <Link
                  href="/dashboard"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:dark:hover:text-gray-100 dark:text-white dark:hover:bg-orange-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-orange-700"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/materials"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:dark:hover:text-gray-100 dark:text-white dark:hover:bg-orange-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-orange-700"
                >
                  Materials
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
