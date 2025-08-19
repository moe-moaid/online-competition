"use client";
import React, { useEffect, useRef, useState } from "react";
import { useGetListVideos } from "@/lib/getListService";
import { videoType } from "@/lib/types/videoType";
import Image from "next/image";
import CustomControls from "./components/CustomControls";
import Filter from "./components/Filters";
import MciContainer from "../components/MciContainer";
import { lazy } from "react";
import { useVoteContext } from "@/lib/context/vote context";
import clsx from "clsx";
const VidCard = lazy(() => import("../components/VidCard"));

function Vote() {
  const { data: videos } = useGetListVideos();
  const [displayVid, setDisplayVid] = useState<string | undefined>();
  const { isVoteOpen, setIsVoteOpen, currentVideoId } = useVoteContext();

  console.log(currentVideoId);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  function playVideo() {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  }

  useEffect(() => {
    if (videoRef.current?.ended) {
      setIsVideoPlaying(false);
    }
  }, []);

  if (!videos || videos.length === 0)
    return (
      <p className="text-white font-bold text-[42px] text-center">
        No videos found
      </p>
    );

  return (
    <div className={`relative ${isVoteOpen && 'h-screen overflow-hidden'}`}>
      {isVoteOpen && (
        <div
          className="bg-black/20 absolute top-0 left-0 bottom-0 right-0 z-20 backdrop-blur-sm hover:cursor-pointer transition-transform duration-1000 ease-in-out"
          onClick={() => setIsVoteOpen(false)}
        />
      )}

      {/* top videos seciton */}
      <section className="h-[580px] relative">
        {!isVideoPlaying && (
          <div className="absolute bg-black/70 top-0 bottom-0 start-0 end-0 z-0" />
        )}
        <video
          ref={videoRef}
          className="w-full h-full object-cover absolute"
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${videos?.[0].url}`}
          onEnded={() => setIsVideoPlaying(false)}
          controlsList="nodownload"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          preload="metadata"
        />
        <div className="flex flex-row justify-start h-full ms-[160px]">
          <div className="h-full overflow-y-auto start-[150px] top-0 flex flex-col gap-y-4 items-start text-white">
            <div className="z-10 pe-10 border-e border-white">
              <h1 className="z-10">Videos</h1>
              {videos?.map((video: videoType, i: number) => {
                return (
                  <div key={`${video.title} - ${i}`} className="mb-4">
                    <video
                      className="w-[270px] rounded-sm"
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${video.url}`}
                    />
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex flex-row justify-start items-center gap-x-4">
                        <div className="relative w-10 h-10 rounded-full overflow-clip">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${video.artist.avatar.url}`}
                            fill
                            alt="singer image"
                            loading="lazy"
                          />
                        </div>
                        <div className="">
                          <p>{video.title}</p>
                          <p>{`By ${video.artist.name}`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={`text-white flex flex-col justify-end ps-10 pb-40 z-10 ${
              isVideoPlaying && "w-full"
            }`}
          >
            {!isVideoPlaying ? (
              <>
                <h1 className="text-[72px] font-bold text-transparent [-webkit-text-stroke:2px_white] capitalize">
                  {videos?.[0].title}
                </h1>
                <p className="text-[40px] font-medium underline mb-6">
                  by {videos?.[0].artist.name}
                </p>
                <button
                  className="bg-legendary-500 text-white rounded-full px-6 py-3 flex flex-row gap-x-4 w-fit justify-between items-center flex-shrink"
                  onClick={playVideo}
                >
                  <p className="text-[24px]">Play Video</p>
                  <span>
                    <svg
                      width="15"
                      height="20"
                      viewBox="0 0 15 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.742348 0.154431C0.00534203 0.584573 -0.000601596 0.664177 2.40459e-05 10.0454C0.000493277 18.5391 0.0120676 18.8864 0.307996 19.3726C0.692609 20.0048 1.2438 20.1547 2.03649 19.8427C2.92584 19.4927 14.3141 11.6407 14.6277 11.1612C14.7741 10.9373 14.9297 10.4866 14.9735 10.1594C15.1237 9.03856 14.8406 8.78815 8.5283 4.45946C5.31063 2.25296 2.42955 0.343412 2.1258 0.216328C1.4842 -0.0522569 1.12415 -0.0682403 0.742348 0.154431Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </>
            ) : (
              <CustomControls
                currentVideo={videoRef.current}
                isVideoPlaying={isVideoPlaying}
                setIsVideoPlaying={setIsVideoPlaying}
              />
            )}
          </div>
        </div>
      </section>
      {/* filters and videos section */}
      <section className="">
        <MciContainer className="flex flex-col md:flex-row items-start gap-x-9 justify-start mt-16">
          <Filter />
          <div>
            <h6 className="text-white text-[24px] mb-5">Videos</h6>
            <div className="flex flex-col md:flex-row gap-6 flex-wrap">
              {videos?.map((video: videoType, i: number) => {
                return (
                  <VidCard
                    video={video}
                    key={`${video.title} - ${i}`}
                    setDisplayVid={setDisplayVid}
                  />
                );
              })}
            </div>
          </div>
        </MciContainer>
      </section>
    </div>
  );
}

export default Vote;
