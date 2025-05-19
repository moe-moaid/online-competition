import React from "react";
import MciContainer from "../components/MciContainer";
import Image from "next/image";

function page() {
  return (
    <MciContainer className="text-white py-[120px]">
      <h1 className="font-semibold text-[48px]">Voting</h1>
      <div className="flex flex-row justify-center gap-x-12">
        <div className="relative w-1/2 h-[500px]">
          <Image src="/voting-main.png" fill alt="Voting Image" />
        </div>
        <div className="w-1/2 flex flex-col justify-between">
          <h1 className="leading-none text-[38px] font-semibold">Steps of <span className="text-legendary-500">Voting</span></h1>
          <ul className="list-disc list-inside text-[20px] font-semibold">
            <li>All viewers are invited to cast their votes after paying.</li>
            <li>
              Each vote will be automatically added to their favourite
              participant’s profile.!
            </li>
          </ul>
          <div className="flex flex-row items-center justify-center gap-x-8">
            <div className="relative w-1/2 h-[300px]">
              <Image src="/voting-mini-left.png" fill alt="Voting Image" />
            </div>
            <div className="relative w-1/2 h-[300px]">
              <Image src="/voting-mini-right.png" fill alt="Voting Image" />
            </div>
          </div>
        </div>
      </div>
    </MciContainer>
  );
}

export default page;
