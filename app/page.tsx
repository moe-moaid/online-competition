"use client";
import React from "react";
import { useGetListVideos } from "@/lib/getListService";
import VidCard from "./components/VidCard";
import { videoType } from "@/lib/types/videoType";
import MciContainer from "./components/MciContainer";

export default function Home() {
  const { data: videos, error: vid_error } = useGetListVideos();
  return (
    <>
      <main>
        <section>
          <h1 className="text-white text-center my-12 text-[40px] font-semibold">
            Videos
          </h1>
          <MciContainer className="flex flex-row flex-wrap justify-center items-ceneter gap-4">
            {videos &&
              videos.map((video: videoType, i: number) => (
                <VidCard
                  key={`${video.title} - ${i}`}
                  title={video.title}
                  country={video.artist.location.country}
                  isVerified
                  artist={video.artist.name}
                  avatarUrl={video.artist.avatar.url}
                  songThumbnailUrl={video.url}
                />
              ))}
          </MciContainer>
        </section>
      </main>
    </>
  );
}
