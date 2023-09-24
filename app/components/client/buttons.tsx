"use client";

import Image from "next/image";

export function SignOutButton() {

    return (
      <>
        <Image
            src='https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg'
            alt='User img'
            width={40}
            height={40}
            className="rounded-full mx-1 cursor-pointer"
          />
          <button type="button" className="text-orange-700 bg-white hover:bg-orange-100 focus:ring-4 focus:outline-none focus:ring-orange-300 font-bold rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
            Sign out
          </button>
      </>
    );
  
}

export function SignInButton() {
  return (
    <button
      className="mx-3 my-auto px-5 py-2 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 text-white rounded-full h-auto"
    >
      Sign in
    </button>
  );
}
