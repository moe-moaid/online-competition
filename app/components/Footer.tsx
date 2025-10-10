import { useVoteContext } from '@/lib/context/vote context';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const midCol = [
  { name: 'About', href: '/about' },
  { name: 'Brand', href: '/brand' },
  { name: 'How it Works', href: '/how-it-works' },
  { name: 'Rules', href: '/rules' },
];
const endCol = [
  { name: 'Voting', href: '/voting' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact Us', href: '/contact-us' },
];
function Footer() {
  const { isVoteOpen } = useVoteContext();
  if (isVoteOpen) return null;
  return (
    <footer className="bg-gray-bg px-[10px] pb-10 pt-14 text-white md:px-[150px]">
      <div className="flex flex-col justify-start gap-x-[150px] border-b pb-9 md:flex-row">
        <div className="mb-4 w-full md:mb-0 md:w-1/3">
          <div className="h-[65px] w-[250px]">
            <Image src="/logo.png" width={250} height={65} alt="logo" />
          </div>
          <p className="mt-6">
            Mackie is a free virtual singing competition organised quarterly
            which strives to bring people together from all over the world, to
            spark joy and human connection.
          </p>
        </div>
        <div className="flex w-full flex-row justify-start md:w-2/3">
          <div className="flex w-1/2 flex-col justify-between self-stretch">
            {midCol.map(col => (
              <Link
                key={col.name}
                href={col.href}
                className="duration-30 transition-all ease-in-out hover:text-legendary"
              >
                {col.name}
              </Link>
            ))}
          </div>
          <div className="flex w-1/2 flex-col justify-between self-stretch">
            {endCol.map(col => (
              <Link
                key={col.name}
                href={col.href}
                className="transition-all duration-300 ease-in-out hover:text-legendary"
              >
                {col.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center md:flex-row md:justify-between">
        <p className="text-[12px] md:text-[16px]">info@showitwithmackie.com</p>
        <p className="text-[12px] md:text-[16px]" data-testid="date">
          ShowWithMackie © {new Date().getFullYear()} All Rights Reserved
        </p>
        <div className="mt-4 flex flex-row items-center justify-between gap-x-4 md:mt-0">
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
