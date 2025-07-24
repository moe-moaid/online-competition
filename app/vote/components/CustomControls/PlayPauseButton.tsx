import React, { useState } from "react";

type Props = {
  currentVideo: HTMLVideoElement | null;
  isVideoPlaying: boolean;
  setIsVideoPlaying: (value: boolean) => void;
};
function PlayPauseButton({ currentVideo, isVideoPlaying, setIsVideoPlaying }: Props) {
  return (
    <>
      {!isVideoPlaying ? (
      <button>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.7027 10.5313L15.4946 6.90994C14.1094 6.09901 11.8438 4.77824 10.4558 3.9706L4.02004 0.349106C2.6353 -0.461726 1.27344 0.188634 1.27344 1.79499V22.207C1.27344 23.8078 2.6353 24.461 4.02059 23.6534L10.3425 20.032C11.7305 19.2243 14.0545 17.9036 15.4397 17.0926L21.6771 13.4712C23.059 12.6603 23.0852 11.339 21.7027 10.5313Z"
            fill="white"
          />
        </svg>
      </button>
        ) : (
      <button>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="5" y="4" width="4" height="26" rx="1" fill="white" />
          <rect x="15" y="4" width="4" height="26" rx="1" fill="white" />
        </svg>
      </button>
      )}
    </>
  );
}

export default PlayPauseButton;
