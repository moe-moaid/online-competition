'use client';
import React from "react";
import { useGetListVideos } from "@/lib/getListService";
import VidCard from "./components/VidCard";
import { videoType } from "@/lib/types/videoType";
import MciContainer from "./components/MciContainer";

export default function Home() {
  const { data: videos, error: vid_error } = useGetListVideos();
  console.log('Videos List ===', videos);
  return (
    <>
      <main>
          <MciContainer className="flex flex-row flex-wrap justify-center items-ceneter gap-4">
          {videos && videos.map((video: videoType, i: number) => (
            <VidCard key={`${video.title} - ${i}`} title={video.title} country="USA" isVerified artist="someone" artistImageUrl="https://picsum.photos/200" songThumbnailUrl="https://picsum.photos/200"/>
          )) }
          </MciContainer>
      </main>
    </>
  );
}


