import Image from "next/image";
import Link from "next/link";

export default function DashNavbar() {
  return (
    <div className="bg-orange-600 px-3">
      <div className="mx-auto flex justify-between">
        <Image
          src="/logo.svg"
          alt="SignPro Manager"
          width={123}
          height={47}
          className="m-2 grayscale brightness-[5]"
        />
        <nav className="flex justify-between">
          <ul className="flex my-auto text-white font-bold">
            <li className="mx-12 text-2xl my-auto hover:text-gray-300">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="mx-12 text-2xl my-auto hover:text-gray-300">
              <Link href="/materials">Materials</Link>
            </li>
            <li className="mx-12 text-2xl my-auto hover:text-gray-300">
              <Link href="/new-job">New Job</Link>
            </li>
          </ul>
        </nav>
        <div className="flex font-bold text-xl">
          <button className="mx-3 my-auto px-5 py-2 text-white hover:text-gray-300">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
