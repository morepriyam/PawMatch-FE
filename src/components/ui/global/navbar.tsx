import { PawPrint } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <PawPrint className="h-6 w-6" />
        <span className="ml-2 text-2xl font-bold">PawMatch</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Find a Pet
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          How It Works
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          About Us
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/users/login"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
