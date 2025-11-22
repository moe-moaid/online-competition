import React from 'react';
import { socialMedaiMap } from '@/constants/socialMedia';
import Link from 'next/link';
import Image from 'next/image';

type socialMediaItem = {
  id: number;
  platform: string;
  link: string;
};

type Props = {
  socials: socialMediaItem[];
};

{
  /**  A component to decide wwhich social media icon to render
    @param socials - an array of social meda objects

    it compares the platform part to our constant map of socail media icons,
    and decides what to render at the end
     */
}

export const SocailMediaRenderer = ({ socials }: Props) => {
  return (
    <div className=" flex flex-row items-center justify-start gap-x-4 rounded-full">
      {socials.map(social => {
        const socialMediaLink = social.link;
        const socialMediaIcon = socialMedaiMap[social.platform.toLowerCase()];
        return (
          <div key={`${social.id}`}>
            <Link href={socialMediaLink} target="blank">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-lightGray-bg transition-all duration-100 ease-in hover:scale-105 hover:border hover:border-legendary-500 hover:shadow-all-sides md:h-10 md:w-10 2xl:h-[48px] 2xl:w-[48px]">
                <Image
                  src={socialMediaIcon}
                  width={12}
                  height={12}
                  alt="singer image"
                  loading="lazy"
                  unoptimized
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SocailMediaRenderer;
