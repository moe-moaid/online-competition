'use client';
import React, { Dispatch, SetStateAction } from 'react';
import { useGetListVideos } from '@/lib/api/getListService';
import { videoType } from '@/lib/types/videoType';
import Filter from '../vote/components/Filters';
import MciContainer from './MciContainer';
import { lazy } from 'react';
import { useVoteContext } from '@/lib/context/voteContext';
import VotePreview from '../vote/components/VotePreview';
import clsx from 'clsx';
const VidCard = lazy(() => import('./VidCard'));

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
    (video: videoType) => video.id === currentVoteVideoId,
  );

  if (!videos || videos.length === 0)
    return (
      <p className="text-center text-[42px] font-bold text-white">
        No videos found
      </p>
    );

  return (
    <div className={clsx('relative', isVoteOpen && 'h-screen overflow-hidden')}>
      {/* filters and videos section */}
      <section
        className={clsx(
          isChangeVoteOpen
            ? 'fixed inset-0 z-40 overflow-y-scroll bg-black'
            : 'relative',
        )}
      >
        <MciContainer className="mt-16 flex flex-col items-start justify-start gap-x-9 md:flex-row">
          {showFilters && (
            <div
              className="flex flex-col gap-y-6"
              data-testid="filters-section"
            >
              <Filter />
              {isChangeVoteOpen && (
                <div className="rounded-xl bg-gray-bg p-5">
                  <h6 className="mb-6 text-[24px] font-semibold text-white">
                    Currently voting for
                  </h6>
                  <VotePreview video={currentlyVotingFor} />
                </div>
              )}
            </div>
          )}
          <div>
            <div className="flex flex-row items-center justify-between">
              <h6 className="mb-5 text-[24px] text-white">
                {isChangeVoteOpen ? 'Change your vote to' : 'Videos'}
              </h6>
              {isChangeVoteOpen && (
                <button
                  className="text-[16px] text-legendary-500"
                  onClick={() => setIsChangeVoteOpen(false)}
                >
                  Cancel
                </button>
              )}
            </div>
            <div className="flex flex-col flex-wrap gap-6 md:flex-row">
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
