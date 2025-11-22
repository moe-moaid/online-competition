'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useGetListVideos } from '@/lib/api/getListService';
import { videoType } from '@/lib/types/videoType';
import Image from 'next/image';
import CustomControls from './components/CustomControls';
import { useVoteContext } from '@/lib/context/vote context';
import CArdsFilterView from '../components/CardsFilterView';
import PlayVideo from '../components/PlayVideo';

function Vote() {
  const { data: videos } = useGetListVideos();
  const [displayVid, setDisplayVid] = useState<string | undefined>();
  const { isVoteOpen, setIsVoteOpen } = useVoteContext();

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
      <p className="text-center text-[42px] font-bold text-white">
        No videos found
      </p>
    );

  return (
    <div className={`relative ${isVoteOpen && 'h-screen overflow-hidden'}`}>
      {isVoteOpen && (
        <>
          <div
            className="absolute bottom-0 left-0 right-0 top-0 z-20 bg-black/20 backdrop-blur-sm transition-transform duration-1000 ease-in-out hover:cursor-pointer"
            onClick={() => setIsVoteOpen(false)}
          />
        </>
      )}

      {displayVid && (
        <PlayVideo video={displayVid} setDisplayVid={setDisplayVid} />
      )}

      {/* top videos seciton */}
      <section className="relative h-[580px]">
        {!isVideoPlaying && (
          <div className="absolute bottom-0 end-0 start-0 top-0 z-0 bg-black/70" />
        )}
        <video
          ref={videoRef}
          className="absolute h-full w-full object-cover"
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${videos?.[0].url}`}
          onEnded={() => setIsVideoPlaying(false)}
          controlsList="nodownload"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          preload="metadata"
        />
        <div className="ms-[160px] flex h-full flex-row justify-start">
          <div className="start-[150px] top-0 flex h-full flex-col items-start gap-y-4 overflow-y-auto text-white">
            <div className="z-10 border-e border-white pe-10">
              <h1 className="z-10">Videos</h1>
              {videos?.map((video: videoType, i: number) => {
                return (
                  <div key={`${video.title} - ${i}`} className="mb-4">
                    <video
                      className="w-[270px] rounded-sm"
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${video.url}`}
                    />
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row items-center justify-start gap-x-4">
                        <div className="relative h-10 w-10 overflow-clip rounded-full">
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
            className={`z-10 flex flex-col justify-end pb-40 ps-10 text-white ${
              isVideoPlaying && 'w-full'
            }`}
          >
            {!isVideoPlaying ? (
              <>
                <h1 className="text-[72px] font-bold capitalize text-transparent [-webkit-text-stroke:2px_white]">
                  {videos?.[0].title}
                </h1>
                <p className="mb-6 text-[40px] font-medium underline">
                  by {videos?.[0].artist.name}
                </p>
                <button
                  className="flex w-fit flex-shrink flex-row items-center justify-between gap-x-4 rounded-full bg-legendary-500 px-6 py-3 text-white"
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
      <CArdsFilterView showFilters={true} setDisplayVid={setDisplayVid} />
    </div>
  );
}

export default Vote;
