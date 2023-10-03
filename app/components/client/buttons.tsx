"use client";

import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";


const supabase = createClientComponentClient<Database>();


export function SignOutButton() {
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/')
  };

  return (
    <>
      <Image
        src="https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg"
        alt="User img"
        width={40}
        height={40}
        className="rounded-full mx-1 cursor-pointer"
      />
      <button
        type="button"
        className="text-orange-700 bg-white hover:bg-orange-100 focus:ring-4 focus:outline-none focus:ring-orange-300 font-bold rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        onClick={handleSignOut}
      >
        Sign out
      </button>
    </>
  );
}

export function SignInButton() {
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
    router.push('/dashboard')
  };

  return (
    <button className="mx-3 my-auto px-5 py-2 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 text-white rounded-full h-auto"
    onClick={handleSignIn}
    >
      Sign in
    </button>
  );
}

export function SignUpButton() {

  const handleSignUp = async () => {
    const { data: { session } } = await supabase.auth.getSession();

    // if (!session) {
    //   await supabase.auth.signInWithOAuth({
    //     provider: 'github'
    //   })
    //   await redirect("/dashboard");
    // }
  }

  return (
    <button className="mx-3 my-auto px-5 py-2 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 text-orange-500 rounded-full h-auto"
    onClick={handleSignUp}
    >
      Sign Up
    </button>
  );
}
