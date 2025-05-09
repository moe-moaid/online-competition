import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function AboutPage() {
  return (
    <div>
      <div className="relative">
        <div className="w-full h-[980px] relative">
          <Image src={"/about-header.png"} fill alt="About Us Header Image" />
        </div>
        <div className="absolute left-[150px] top-[50%] z-50 transform -translate-y-[50%] w-1/3 tracking-widest text-white">
          <h1 className="font-semibold text-[70px]">
            ABOUT <span className="text-legendary-500 font-semibold">US</span>
          </h1>
          <p className="font-medium text-[24px]">Mackie is a free virtual singing competition organised quarterly which strives to bring people together from all over the world, to spark joy and human connection.</p>
        <Button variant='default' className="bg-legendary-500 mt-4 font-medium text-[20px]  py-[28px] px-[30px] hover:bg-legendary-600 ease-in-out duration-300">Learn More</Button>
        </div>
      </div>
      <div className="">
        <div className="flex flex-row gap-x-[67px] px-[165px] py-[120px] items-center">
            <div className="w-1/2"></div>
            <div className="w-1/2 text-white">
            <h1 className="font-semibold text-[40px] tracking-wider">Who <span className="text-legendary-500">We Are</span></h1>
            <p className="font-medium text-[20px] tracking-wider">Show it with Mackie is a free virtual singing competition organised quarterly which strives to bring people together from all over the world, to spark joy and human connection. Our Innovative Platform has been founded on the basis of our mother company: <span className="text-legendary-500 font-semibold">Mackie Entertainment</span> as a collaborative and cohesive way of helping talented people achieve their dreams</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
