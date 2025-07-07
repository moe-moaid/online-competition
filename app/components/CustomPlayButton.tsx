import React, { SetStateAction } from "react";

type Props = {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
};

function CustomPlayButton({ videoRef, isPlaying, setIsPlaying }: Props) {
  function play() {
    if (videoRef.current) {
      if (videoRef.current && isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  }
  return (
    <button
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      onClick={play}
    >
      <svg
        width="168"
        height="168"
        viewBox="0 0 168 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M167.375 84C167.375 67.51 162.485 51.3903 153.324 37.6794C144.162 23.9684 131.141 13.282 115.906 6.97158C100.671 0.661126 83.9075 -0.989978 67.7343 2.22706C51.5611 5.44411 36.7052 13.3848 25.0449 25.045C13.3847 36.7052 5.44405 51.5612 2.227 67.7344C-0.990039 83.9075 0.661064 100.671 6.97152 115.906C13.282 131.141 23.9684 144.162 37.6793 153.324C51.3903 162.485 67.5099 167.375 84 167.375C106.112 167.375 127.319 158.591 142.955 142.955C158.591 127.319 167.375 106.112 167.375 84Z"
          fill="#040404"
          fillOpacity="0.75"
        />
        <path
          d="M115.012 87.0161L71.5119 116.016C70.9659 116.38 70.3314 116.59 69.6759 116.621C69.0204 116.653 68.3685 116.506 67.7898 116.197C67.2112 115.887 66.7274 115.426 66.3902 114.863C66.053 114.3 65.8749 113.656 65.875 113V55.0001C65.8753 54.3444 66.0535 53.701 66.3906 53.1386C66.7276 52.5761 67.2109 52.1157 67.789 51.8062C68.3671 51.4967 69.0183 51.3498 69.6732 51.3811C70.3282 51.4124 70.9624 51.6208 71.5083 51.9841L115.008 80.9841C115.505 81.3151 115.912 81.7636 116.193 82.2897C116.475 82.8159 116.622 83.4034 116.622 84.0001C116.622 84.5968 116.475 85.1843 116.193 85.7104C115.912 86.2365 115.505 86.685 115.008 87.0161H115.012Z"
          fill="white"
        />
      </svg>
    </button>
  );
}

export default CustomPlayButton;
