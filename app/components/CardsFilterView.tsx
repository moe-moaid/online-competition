"use client";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { useGetListVideos } from "@/lib/api/getListService";
import { videoType } from "@/lib/types/videoType";
import Filter from "../vote/components/Filters";
import MciContainer from "./MciContainer";
import { lazy } from "react";
import { useVoteContext } from "@/lib/context/vote context";
import VotePreview from "../vote/components/VotePreview";
import clsx from "clsx";
const VidCard = lazy(() => import("./VidCard"));

type Props = {
  showFilters?: boolean;
  setDisplayVid: Dispatch<SetStateAction<string | undefined>>;
};
function CArdsFilterView({ showFilters, setDisplayVid }: Props) {
  const { data: videos } = useGetListVideos();
  const {
    isVoteOpen,
    currentVoteVideoId,
    isChangeVoteOpen,
    setIsChangeVoteOpen,
  } = useVoteContext();

  const currentlyVotingFor = videos?.find(
    (video) => video.id === currentVoteVideoId
  );

  if (!videos || videos.length === 0)
    return (
      <p className="text-white font-bold text-[42px] text-center">
        No videos found
      </p>
    );

  return (
    <div className={clsx("relative", isVoteOpen && "h-screen overflow-hidden")}>
      {/* filters and videos section */}
      <section
        className={clsx(
          isChangeVoteOpen
            ? "fixed inset-0 z-40 bg-black overflow-y-scroll"
            : "relative"
        )}
      >
        <MciContainer className="flex flex-col md:flex-row items-start gap-x-9 justify-start mt-16">
          {showFilters && (
            <div className="flex flex-col gap-y-6">
              <Filter />
              {isChangeVoteOpen && (
                <div className="bg-gray-bg p-5 rounded-xl">
                  <h6 className="text-white font-semibold text-[24px] mb-6">
                    Currently voting for
                  </h6>
                  <VotePreview video={currentlyVotingFor} />
                </div>
              )}
            </div>
          )}
          <div>
            <div className="flex flex-row justify-between items-center">
              <h6 className="text-white text-[24px] mb-5">
                {isChangeVoteOpen ? "Change your vote to" : "Videos"}
              </h6>
              {isChangeVoteOpen && (
                <button
                  className="text-legendary-500 text-[16px]"
                  onClick={() => setIsChangeVoteOpen(false)}
                >
                  Cancel
                </button>
              )}
            </div>
            <div className="flex flex-col md:flex-row gap-6 flex-wrap">
              {videos?.map((video: videoType, i: number) => {
                return (
                  <VidCard
                    video={video}
                    key={`${video.title} - ${i}`}
                    setDisplayVid={() => setDisplayVid(video.url)}
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

export default CArdsFilterView;
