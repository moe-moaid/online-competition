"use client";
import React, { useRef, useState } from "react";
import { useGetListVideos } from "@/lib/getListService";
import VidCard from "./components/VidCard";
import { videoType } from "@/lib/types/videoType";
import MciContainer from "./components/MciContainer";
import Image from "next/image";

export default function Home() {
  const { data: videos, error: vid_error } = useGetListVideos();
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
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
    <>
      <main>
        <section className="w-full">
          <div className="relative h-[350px] sm:h-[550] md:h-[750px] lg:h-[980px]">
            <div className="absolute z-10 left-0 right-0 top-0 bottom-0 bg-black/45" />
            <Image src="/hero.jpg" fill alt="hero" />
            <div className="absolute start-[12px] lg:start-[90px] xl:start-[150px] top-[50%] z-50 transform -translate-y-[50%] w-max-full md:w-1/2 tracking-widest text-white">
              <h1 className="font-semibold text-[18px] lg:text-[40px] xl:text-[72px]">
                All <span className="text-legendary-500">Abroad</span>
              </h1>
              <p className="font-medium text-[12px] sm:text[16px] lg:text-[18px] xl:text-[24px]">
                Are you ready to be the next International Talent?
              </p>
              <p className="font-medium text-[12px] sm:text[16px] lg:text-[18px] xl:text-[24px]">
                Do you think you have what it takes?
              </p>
              <p className="mt-4 lg:mt-9 font-medium text-[12px] sm:text[16px] lg:text-[18px] xl:text-[24px]">
                Upload your video today and take part in our competition for a
                chance to win and be featured with an international Artist.
              </p>
              <div className="flex flex-row justify-start gap-x-4 mt-6 text-[12px] sm:text[16px] lg:text-[18px] xl:text-[20px] font-medium">
                <button className="bg-legendary-500  px-2 sm-px-4 lg:px-6 py-3 rounded-md">
                  Learn More
                </button>
                <button className="bg-transparent border border-legendary-500 text-legendary-500 px-2 sm-px-4 lg:px-6 py-2 rounded-md">
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-white text-center my-12 text-[40px] font-semibold">
            Videos
          </h1>
          <MciContainer className="flex flex-row flex-wrap justify-center items-ceneter gap-4">
            {videos &&
              videos.map((video: videoType, i: number) => (
                <VidCard
                  key={`${video.title} - ${i}`}
                  title={video.title}
                  country={video.artist.location.country}
                  isVerified
                  artist={video.artist.name}
                  avatarUrl={video.artist.avatar.url}
                  songThumbnailUrl={video.url}
                />
              ))}
          </MciContainer>
        </section>
        <section>
          <MciContainer className="mt-14 bg-gray-bg py-32">
            <h1 className="text-white text-center mb-14 font-semibold text-[40px]">
              Featured <span className="text-legendary-500">Video</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-x-4">
              <div className="relative w-full md:w-1/2">
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125 ease-in-out duration-300"
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
                <video
                className="rounded-sm w-full"
                  ref={ref}
                  src={process.env.NEXT_PUBLIC_API_BASE_URL + videos?.[7].url}
                  onPlay={handlePlay}
                  onPause={handlePause}
                />
              </div>
              <div className="flex flex-col items-start gap-y-4 text-white w-full md:w-1/2">
                <h3 className="text-[32px] font-semibold">{videos?.[7].title}</h3>
                <p className="text-[24px]">{videos?.[7].description}</p>
                <button className="bg-transparent border border-legendary-500 rounded-md text-legendary-500 text-[20px] font-medium px-4 py-2">
                  View More
                </button>
              </div>
            </div>
          </MciContainer>
        </section>
      </main>
    </>
  );
}
