import { useVoteContext } from "@/lib/context/vote context";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

const midCol = [
  { name: "About", href: "/about" },
  { name: "Brand", href: "/brand" },
  { name: "How it Works", href: "/how-it-works" },
  { name: "Rules", href: "/rules" },
];
const endCol = [
  { name: "Voting", href: "/voting" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact-us" },
];
function Footer() {
  const { isVoteOpen } = useVoteContext();
  if (isVoteOpen) return null;
  return (
    <footer className="bg-gray-bg px-[10px] md:px-[150px] pt-14 pb-10 text-white">
      <div className="flex flex-col md:flex-row justify-start border-b gap-x-[150px] pb-9">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <div className="w-[250px] h-[65px]">
            <Image src="/logo.png" width={250} height={65} alt="logo" />
          </div>
          <p className="mt-6">
            Mackie is a free virtual singing competition organised quarterly
            which strives to bring people together from all over the world, to
            spark joy and human connection.
          </p>
        </div>
        <div className="w-full md:w-2/3 flex flex-row justify-start">
          <div className="flex w-1/2 flex-col self-stretch justify-between">
            {midCol.map((col) => (
              <Link
                key={col.name}
                href={col.href}
                className="hover:text-legendary transition-all ease-in-out duration-30"
              >
                {col.name}
              </Link>
            ))}
          </div>
          <div className="flex w-1/2 flex-col self-stretch justify-between">
            {endCol.map((col) => (
              <Link
                key={col.name}
                href={col.href}
                className="hover:text-legendary transition-all ease-in-out duration-300"
              >
                {col.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center mt-4">
        <p className="text-[12px] md:text-[16px]">info@showitwithmackie.com</p>
        <p className="text-[12px] md:text-[16px]" data-testid="date">ShowWithMackie © {new Date().getFullYear()} All Rights Reserved</p>
        <div className="flex flex-row justify-between items-center gap-x-4 mt-4 md:mt-0">
          <SocialIcon
            url="https://www.instagram.com"
            bgColor="#252525"
            fgColor="white"
          />
          <SocialIcon
            url="https://www.facebook.com"
            bgColor="#252525"
            fgColor="white"
          />
          <SocialIcon
            url="https://www.tiktok.com"
            bgColor="#252525"
            fgColor="white"
          />
          <SocialIcon
            url="https://www.linkedin.com"
            bgColor="#252525"
            fgColor="white"
          />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
