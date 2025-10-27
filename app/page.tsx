'use client';
import React, { useRef, useState } from 'react';
import { useGetListVideos } from '@/lib/api/getListService';
import MciContainer from './components/MciContainer';
import Image from 'next/image';
import PlayVideo from './components/PlayVideo';
import CArdsFilterView from './components/CardsFilterView';
import { useVoteContext } from '@/lib/context/vote context';
import PaymentForm from './components/PaymentForm';
import StripeWrapper from './components/StripeWrapper';

export default function Home() {
  const { data: videos } = useGetListVideos();
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [displayVid, setDisplayVid] = useState<string | undefined>();
  const { isChangeVoteOpen } = useVoteContext();
  const { isVoteOpen, setIsVoteOpen } = useVoteContext();
  function handlePlay() {
    if (ref.current) {
      setIsPlaying(true);
    }
  }
  function handlePause() {
    if (ref.current) {
      setIsPlaying(false);
    }
  }
  function handlePlayPause() {
    if (ref.current && isPlaying) {
      ref.current.pause();
    } else if (ref.current && !isPlaying) {
      ref.current.play();
    }
  }

  return (
    <StripeWrapper>
      <PaymentForm />
      <main className={`relative ${isVoteOpen && 'h-screen overflow-hidden'}`}>
        {isVoteOpen && (
          <>
            <div
              className="absolute bottom-0 left-0 right-0 top-0 z-20 bg-black/20 backdrop-blur-sm transition-transform duration-1000 ease-in-out hover:cursor-pointer"
              onClick={() => setIsVoteOpen(false)}
            />
          </>
        )}
        <section className="w-full">
          <div className="relative h-[350px] sm:h-[550] md:h-[750px] lg:h-[980px]">
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-black/45" />
            <Image src="/hero.jpg" fill alt="hero" />
            <div className="w-max-full absolute start-[12px] top-[50%] z-10 -translate-y-[50%] transform tracking-widest text-white md:w-1/2 lg:start-[90px] xl:start-[150px]">
              <h1 className="text-[18px] font-semibold lg:text-[40px] xl:text-[72px]">
                All <span className="text-legendary-500">Abroad</span>
              </h1>
              <p className="sm:text[16px] text-[12px] font-medium lg:text-[18px] xl:text-[24px]">
                Are you ready to be the next International Talent?
              </p>
              <p className="sm:text[16px] text-[12px] font-medium lg:text-[18px] xl:text-[24px]">
                Do you think you have what it takes?
              </p>
              <p className="sm:text[16px] mt-4 text-[12px] font-medium lg:mt-9 lg:text-[18px] xl:text-[24px]">
                Upload your video today and take part in our competition for a
                chance to win and be featured with an international Artist.
              </p>
              <div className="sm:text[16px] mt-6 flex flex-row justify-start gap-x-4 text-[12px] font-medium lg:text-[18px] xl:text-[20px]">
                <button className="sm-px-4  rounded-md bg-legendary-500 px-2 py-3 lg:px-6">
                  Learn More
                </button>
                <button className="sm-px-4 rounded-md border border-legendary-500 bg-transparent px-2 py-2 text-legendary-500 lg:px-6">
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </section>
        <CArdsFilterView
          showFilters={isChangeVoteOpen}
          setDisplayVid={setDisplayVid}
        />
        {displayVid && (
          <PlayVideo video={displayVid} setDisplayVid={setDisplayVid} />
        )}
        <section>
          <MciContainer className="mt-14 bg-gray-bg py-32">
            <h1 className="mb-14 text-center text-[40px] font-semibold text-white">
              Featured <span className="text-legendary-500">Video</span>
            </h1>
            <div className="flex flex-col items-center justify-between gap-y-4 md:flex-row md:gap-x-4">
              <div className="relative w-full md:w-1/2">
                <button
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 transform duration-300 ease-in-out"
                  onClick={handlePlayPause}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="18.5"
                      stroke="white"
                      strokeWidth="3"
                    />
                    <path
                      d="M25.3333 20.0001L16 14.6667M16 14.6667V25.3334V14.6667ZM25.3333 20.0001L16 25.3334L25.3333 20.0001Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {videos?.[7] && process.env.NEXT_PUBLIC_API_BASE_URL && (
                  <video
                    className="w-full rounded-sm"
                    ref={ref}
                    src={process.env.NEXT_PUBLIC_API_BASE_URL + videos?.[7].url}
                    onPlay={handlePlay}
                    onPause={handlePause}
                  />
                )}
              </div>
              <div className="flex w-full flex-col items-start gap-y-4 text-white md:w-1/2">
                <h3 className="text-[32px] font-semibold">
                  {videos?.[7].title}
                </h3>
                <p className="text-[24px]">{videos?.[7].description}</p>
                <button className="rounded-md border border-legendary-500 bg-transparent px-4 py-2 text-[20px] font-medium text-legendary-500">
                  View More
                </button>
              </div>
            </div>
          </MciContainer>
        </section>
      </main>
    </StripeWrapper>
  );
}
