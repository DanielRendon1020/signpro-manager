"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from 'next/navigation'

export function SignOutButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "authenticated") {
    return (
      <button
        type="button"
        className="text-orange-700 bg-white hover:bg-orange-100 focus:ring-4 focus:outline-none focus:ring-orange-300 font-bold rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        onClick={() => signOut().then(redirect('/'))}
      >
        Sign out
      </button>
    );
  }
}

export function SignInButton() {
  return (
    <button
      className="mx-3 my-auto px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full h-auto"
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
}
