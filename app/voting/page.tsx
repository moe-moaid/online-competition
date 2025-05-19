import React from "react";
import MciContainer from "../components/MciContainer";
import Image from "next/image";

function page() {
  return (
    <MciContainer className="text-white py-[120px]">
      <h1 className="font-semibold text-[48px]">Voting</h1>
      <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-y-0 justify-center gap-x-12">
        <div className="relative w-full lg:w-1/2 h-[300px] md:h-[500px]">
          <Image src="/voting-main.png" fill alt="Voting Image" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-y-8 lg:gap-y-0 justify-between">
          <h1 className="leading-none text-[38px] font-semibold">Steps of <span className="text-legendary-500">Voting</span></h1>
          <ul className="list-disc list-inside text-[14px] md:text-[16px] lg:text-[20px] font-semibold">
            <li>All viewers are invited to cast their votes after paying.</li>
            <li>
              Each vote will be automatically added to their favourite
              participant’s profile.!
            </li>
          </ul>
          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between gap-x-8 gap-y-8 md:gap-y-0">
            <div className="relative w-full md:w-1/3 lg:w-1/2 h-[300px]">
              <Image src="/voting-mini-left.png" fill alt="Voting Image" />
            </div>
            <div className="relative w-full md:w-1/3 lg:w-1/2  h-[300px]">
              <Image src="/voting-mini-right.png" fill alt="Voting Image" />
            </div>
          </div>
        </div>
      </div>
    </MciContainer>
  );
}

export default page;
