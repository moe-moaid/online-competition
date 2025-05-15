import React from "react";
import MciContainer from "../components/MciContainer";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <MciContainer>
      <div className="text-white py-32 px-20">
        <h1 className="font-semibold text-[48px] mb-10">Brand</h1>
        <div className="flex flex-row gap-x-14 items-stretch">
          <div className="relative w-[50%] h-[500]">
            <Image
              src="/brand-image.png"
              fill
              alt="Brand Image"
              className="rounded-lg"
            />
          </div>
          <div className="w-[50%]">
            <h1 className="font-semibold text-[36px] mb-8">
              Mackie <span className="text-legendary-500">Brand</span>
            </h1>
            <p className="text-[24px]">
              Our Innovative Platform Show it with Mackie has been founded on
              the basis of our mother company: {" "}
              <Link
                href="https://www.mackieentertainment.com"
                className="text-legendary-500 font-medium inline"
              >
                mackieentertainment.com
              </Link> {" "}
              as a collaborative and cohesive way of helping talented people
              achieve their dreams.{" "}
              <Link
                href="https://www.mackieentertainment.com"
                className="text-legendary-500 font-medium"
              >
                Mackie Entertainment
              </Link>
              was built 7 years ago out of the desire to keep our audience
              engaged with stunning Events, Management, Production, Concerts,
              Talent Booking & Music Production while complimenting them with
              our amazing Digital Marketing Services..
            </p>
          </div>
        </div>
      </div>
    </MciContainer>
  );
}

export default page;
