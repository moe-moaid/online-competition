import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
function Navbar() {
  return (
    <nav
      className="flex flex-shrink flex-row items-center justify-between"
      role="navrole"
    >
      <div className="relative h-[65px] w-[250px]">
        <Image src={'/logo.png'} fill alt="logo" />
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
      <div className="hidden items-center justify-between gap-x-14 lg:flex">
        <div className="flex flex-row items-center justify-center gap-x-4 text-white">
          <Link href="/" data-testid="navigation-link">
            Home
          </Link>
          <Link href="/about" data-testid="navigation-link">
            About Us
          </Link>
          <Link href="/vote" data-testid="navigation-link">
            Vote
          </Link>
          <Link href="/finals" data-testid="navigation-link">
            Finals
          </Link>
          <Link href="/contact-us" data-testid="navigation-link">
            Contact Us
          </Link>
        </div>
        <div className="flex gap-x-8">
          <Link
          href='/login'
            className="rounded-md border border-legendary bg-transparent text-white bg-legendary px-4 py-1"
            
            // variant="outline"
          >
            Login
          </Link>
          <Button
            className="rounded-md bg-legendary text-white"
            variant="default"
          >
            Signup
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
