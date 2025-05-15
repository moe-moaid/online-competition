import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
function Navbar() {
  return (
    <div className="flex flex-row items-center flex-shrink justify-between">
      <div className="w-[250px] h-[65px] relative">
        <Image src={"/logo.png"} fill alt="logo" />
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex items-center justify-between gap-x-14">
        <div className="flex text-white flex-row items-center justify-center gap-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/vote">Vote</Link>
          <Link href="/finals">Finals</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
        <div className="flex gap-x-8">
          <Button
            className="bg-transparent border border-legendary rounded-md text-white"
            variant="outline"
          >
            Login
          </Button>
          <Button
            className="bg-legendary rounded-md text-white"
            variant="default"
          >
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
