import React from 'react';
import MciContainer from '../components/MciContainer';
import Image from 'next/image';

function page() {
  return (
    <MciContainer className="py-[120px] text-white">
      <h1 className="text-[48px] font-semibold">Voting</h1>
      <div className="flex flex-col justify-center gap-x-12 gap-y-8 lg:flex-row lg:gap-y-0">
        <div className="relative h-[300px] w-full md:h-[500px] lg:w-1/2">
          <Image src="/voting-main.png" fill alt="Voting Image" />
        </div>
        <div className="flex w-full flex-col justify-between gap-y-8 lg:w-1/2 lg:gap-y-0">
          <h1 className="text-[38px] font-semibold leading-none">
            Steps of <span className="text-legendary-500">Voting</span>
          </h1>
          <ul className="list-inside list-disc text-[14px] font-semibold md:text-[16px] lg:text-[20px]">
            <li>All viewers are invited to cast their votes after paying.</li>
            <li>
              Each vote will be automatically added to their favourite
              participant’s profile.!
            </li>
          </ul>
          <div className="flex flex-col items-center justify-center gap-x-8 gap-y-8 md:flex-row md:gap-y-0 lg:justify-between">
            <div className="relative h-[300px] w-full md:w-1/3 lg:w-1/2">
              <Image src="/voting-mini-left.png" fill alt="Voting Image" />
            </div>
            <div className="relative h-[300px] w-full md:w-1/3  lg:w-1/2">
              <Image src="/voting-mini-right.png" fill alt="Voting Image" />
            </div>
          </div>
        </div>
      </div>
    </MciContainer>
  );
}

export default page;
