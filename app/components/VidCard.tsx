import Image from 'next/image';
import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import VotingButton from './VotingButton';
import { videoType } from '@/lib/types/videoType';
import { useVoteContext } from '@/lib/context/vote context';

type Props = {
  video: videoType;
  setDisplayVid: Dispatch<SetStateAction<string | undefined>>;
};

function VidCard({ video, setDisplayVid }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [overlay, setOverlay] = useState<boolean>(false);
  const {
    id,
    title,
    artist: {
      name,
      location: { country },
      avatar: { url },
    },
    url: videoUrl,
  } = video;
  const { isChangeVoteOpen, setCurrentVoteVideoId, setIsChangeVoteOpen } =
    useVoteContext();
  const isVerified = true;
  function playPauseController() {
    if (ref.current && !isChangeVoteOpen) {
      setDisplayVid?.(videoUrl);
    } else if (isChangeVoteOpen) {
      setCurrentVoteVideoId?.(id);
      setIsChangeVoteOpen(false);
    }
  }
  function handleHover() {
    setOverlay(!overlay);
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
              overlay && 'opacity-100'
            } bottom-0 bg-black/65 duration-300 ease-in-out`}
          />
          <video
            ref={ref}
            className="h-full w-full object-cover"
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${videoUrl}`}
          />
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
              <circle cx="20" cy="20" r="18.5" stroke="white" strokeWidth="3" />
              <path
                d="M25.3333 20.0001L16 14.6667M16 14.6667V25.3334V14.6667ZM25.3333 20.0001L16 25.3334L25.3333 20.0001Z"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <p className="absolute left-1/2 top-0 -translate-x-1/2 rounded-bl-lg rounded-br-lg bg-legendary-500 px-6 py-1 text-[20px] font-semibold">
          {country}
        </p>
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-start justify-start gap-x-4">
          <div className="relative h-10 w-10 overflow-clip rounded-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`}
              fill
              alt="singer image"
              loading="lazy"
            />
          </div>
          <div className="flex-flex-col gap-y-4">
            <p className="text-[18px] font-medium">{title}</p>
            <p className="flex flex-row items-center gap-x-2 font-medium text-white-text">
              By {`${name} `}
              {isVerified && (
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_304_326)">
                      <path
                        d="M14.6673 7.38674V8.00007C14.6665 9.43769 14.201 10.8365 13.3402 11.988C12.4794 13.1394 11.2695 13.9817 9.89089 14.3893C8.51227 14.797 7.03882 14.748 5.6903 14.2498C4.34177 13.7516 3.19042 12.8308 2.40796 11.6248C1.6255 10.4188 1.25385 8.99212 1.34844 7.55762C1.44303 6.12312 1.99879 4.75762 2.93284 3.66479C3.86689 2.57195 5.12917 1.81033 6.53144 1.4935C7.93371 1.17668 9.40083 1.32163 10.714 1.90674"
                        stroke="#11F789"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.6667 2.6665L8 9.33984L6 7.33984"
                        stroke="#11F789"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_304_326">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              )}
            </p>
          </div>
        </div>
        <VotingButton currentVideoId={id} />
      </div>
    </div>
  );
}

export default VidCard;
