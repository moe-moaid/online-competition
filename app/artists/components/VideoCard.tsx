'use client';
import React, { useRef, useState } from 'react';
import VotingButton from '@/app/components/VotingButton';
import { videoType } from '@/lib/types/videoType';

type Props = {
  video: videoType;
};

function VideoCard({ video }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [overlay, setOverlay] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  function playPauseController() {
    if (ref.current && !isPlaying) {
      ref.current.play();
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      ref.current?.pause();
    }
  }

  function handleHover() {
    if (!isPlaying) setOverlay(!overlay);
  }

  return (
    <div className="h-[480px] w-[380px] rounded-[20px] bg-gray-bg p-5 text-white">
      <div className="relative mb-6 h-[360px] w-full overflow-clip rounded-[20px]">
        <div
          className="relative h-full w-full"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div
            className={`absolute left-0 right-0 top-0 origin-bottom ${
              overlay && 'opacity-0'
            } bottom-0 bg-black/65 duration-300 ease-in-out`}
          />
          <video
            ref={ref}
            className="h-full w-full object-cover hover:cursor-pointer"
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${video.url}`}
            onClick={playPauseController}
            onEnded={() => setIsPlaying(false)}
          />

          {!isPlaying && (
            <button
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ${
                overlay && 'scale-125'
              } duration-300 ease-in-out`}
              onClick={playPauseController}
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
          )}
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <p className="text-[18px] font-medium">{video.title}</p>
        <VotingButton currentVideoId={video.id} />
      </div>
    </div>
  );
}

export default VideoCard;
