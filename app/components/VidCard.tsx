import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
// type Props = {
//   country: string;
// };
type Props = {
  country: string;
  title: string;
  artist: string;
  isVerified: boolean;
  songThumbnailUrl: string;
  artistImageUrl: string;
};
function VidCard({
  country,
  title,
  artist,
  isVerified,
  songThumbnailUrl,
  artistImageUrl,
}: Props) {
  return (
    <div className="p-5 text-white bg-gray-bg w-[380px] h-[480px] rounded-[20px]">
      <div className="relative w-full h-[360px] rounded-[20px] mb-6 overflow-clip">
        <div className="relative w-full h-full">
          <Image
            src={songThumbnailUrl}
            fill
            alt="song thumbnail"
            objectFit="cover"
            loading="lazy"
          />
        </div>
        <p className="absolute top-0 left-1/2 -translate-x-1/2 px-6 py-1 rounded-bl-lg rounded-br-lg bg-legendary-500 font-semibold text-[20px]">
          {country}
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row justify-start items-start gap-x-4">
          <div className="relative rounded-full w-10 h-10 overflow-clip">
            <Image src={artistImageUrl} fill alt="singer image" loading="lazy"/>
          </div>
          <div className="flex-flex-col gap-y-4">
            <p className="font-medium text-[18px]">{title}</p>
            <p className="flex flex-row items-center gap-x-2 font-medium text-white-text">
              By {`${artist} `}
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
        <button className="w-14 h-14">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="52"
              height="52"
              rx="26"
              fill="#18AEBF"
              stroke="#252525"
              strokeWidth="4"
            />
            <path
              d="M23 38H20C19.4696 38 18.9609 37.7893 18.5858 37.4142C18.2107 37.0391 18 36.5304 18 36V29C18 28.4696 18.2107 27.9609 18.5858 27.5858C18.9609 27.2107 19.4696 27 20 27H23M30 25V21C30 20.2044 29.6839 19.4413 29.1213 18.8787C28.5587 18.3161 27.7956 18 27 18L23 27V38H34.28C34.7623 38.0055 35.2304 37.8364 35.5979 37.524C35.9654 37.2116 36.2077 36.7769 36.28 36.3L37.66 27.3C37.7035 27.0134 37.6842 26.7207 37.6033 26.4423C37.5225 26.1638 37.3821 25.9063 37.1919 25.6875C37.0016 25.4687 36.7661 25.2939 36.5016 25.1752C36.2371 25.0565 35.9499 24.9967 35.66 25H30Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default VidCard;
