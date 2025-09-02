"use client";
import { useVoteContext } from "@/lib/context/vote context";
import { videoType } from "@/lib/types/videoType";
import React from "react";

type Props = {
  currentVideoId: number;
};
function VotingButton({ currentVideoId }: Props) {
  const {
    setIsVoteOpen,
    setCurrentVoteVideoId,
    isChangeVoteOpen,
    setIsChangeVoteOpen,
  } = useVoteContext();
  return (
    <button
      className="w-14 h-14"
      onClick={() => {
        if (isChangeVoteOpen) {
          setCurrentVoteVideoId?.(currentVideoId);
          setIsChangeVoteOpen(false);
        } else {
          setIsVoteOpen(true);
          setCurrentVoteVideoId?.(currentVideoId);
        }
      }}
    >
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
  );
}

export default VotingButton;
