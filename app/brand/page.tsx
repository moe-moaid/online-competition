import React from 'react';
import MciContainer from '../components/MciContainer';
import Image from 'next/image';
import Link from 'next/link';

function page() {
  return (
    <MciContainer>
      <div className="py-32 text-white md:px-20">
        <h1 className="mb-10 text-[48px] font-semibold">Brand</h1>
        <div className="flex flex-col items-center gap-x-14 md:flex-row">
          <div className="relative mb-8 h-[300px] w-full md:mb-0 md:h-[400px] md:w-[50%] lg:h-[500px]">
            <Image
              src="/brand-image.png"
              fill
              alt="Brand Image"
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-[50%]">
            <h1 className="md:md-8 mb-4 text-[36px] font-semibold">
              Mackie <span className="text-legendary-500">Brand</span>
            </h1>
            <p className="text-[18px] lg:text-[20px] xl:text-[24px]">
              Our Innovative Platform Show it with Mackie has been founded on
              the basis of our mother company:{' '}
              <Link
                href="https://www.mackieentertainment.com"
                className="inline font-medium text-legendary-500"
              >
                mackieentertainment.com
              </Link>{' '}
              as a collaborative and cohesive way of helping talented people
              achieve their dreams.{' '}
              <Link
                href="https://www.mackieentertainment.com"
                className="font-medium text-legendary-500"
              >
                Mackie Entertainment
              </Link>{' '}
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
