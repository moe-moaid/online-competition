import { videoType } from "@/lib/types/videoType";
import Image from "next/image";
import React from "react";

function VotePreview({ video }: { video?: videoType }) {
  return (
    <div data-testid= "vote-preview">
      <div className="relative w-full h-full rounded-lg overflow-clip">
        <div className={`absolute inset-0 bg-black/65`} />
        <video
          className="w-full h-full object-cover"
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${video?.url}`}
        />

        <svg
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
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
      </div>
      <div className="flex flex-row justify-start items-start gap-x-4 mt-4">
        <div className="relative rounded-full w-10 h-10 overflow-clip">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${video?.artist.avatar.url}`}
            fill
            alt="singer image"
            loading="lazy"
          />
        </div>
        <div className="flex-flex-col gap-y-4">
          <p className="font-medium text-[14px] text-white">{video?.title}</p>
          <p className="flex flex-row items-center gap-x-2 font-medium text-gray-text text-[12px]">
            By {`${video?.artist.name} `}
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
          </p>
        </div>
      </div>
    </div>
  );
}

export default VotePreview;
