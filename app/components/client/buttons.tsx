"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Dropdown } from "flowbite-react";
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";

export function SignOutButton() {
  const { data: session, status } = useSession();
  const userName = session?.user?.name as string;
  const userImage = session?.user?.image as string;

  const afterSignOut = () => {
    signOut({ callbackUrl: '/' })
  };

  if (session) {
    return (
      <Dropdown
        renderTrigger={() => (
          <Image
            src={userImage}
            alt={userName}
            width={40}
            height={40}
            className="rounded-full mx-1 cursor-pointer"
          />
        )}
        label={undefined}
      >
        <DropdownItem>
          <button
            type="button"
            className="text-orange-700 bg-white hover:bg-orange-100 focus:ring-4 focus:outline-none focus:ring-orange-300 font-bold rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            onClick={afterSignOut}
          >
            Sign out
          </button>
        </DropdownItem>
      </Dropdown>
    );
  }
}

export function SignInButton() {
  return (
    <button
      className="mx-3 my-auto px-5 py-2 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 text-white rounded-full h-auto"
      onClick={() => signIn('', { callbackUrl: '/dashboard' })}
    >
      Sign in
    </button>
  );
}
