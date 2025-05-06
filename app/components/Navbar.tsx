import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="w-[250px] h-[65px]">
        <Image src={"/logo.png"} width={250} height={65} alt="logo" />
      </div>
      <div className="flex flex-row items-center justify-between gap-x-14">
        <div className="flex text-white flex-row items-center justify-center gap-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/vote">Vote</Link>
          <Link href="/finals">Finals</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
        <div className="flex gap-x-8">
          <Button
            className="bg-transparent border border-legendary-500 rounded-md text-white"
            variant="outline"
          >
            Login
          </Button>
          <Button
            className="bg-legendary-500 rounded-md text-white"
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
