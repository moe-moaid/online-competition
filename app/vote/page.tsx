"use client";
import React from "react";
import { useGetListVideos } from "@/lib/getListService";
import { videoType } from "@/lib/types/videoType";

function Vote() {
  const { data: videos, error: vid_error } = useGetListVideos();
  return (
    <>
      <section className="h-[580px] relative">
        <video
          className="w-full h-full object-cover"
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${videos?.[0].url}`}
          controls
        />
        <div className="absolute h-full overflow-y-auto start-[150px] top-0 flex flex-col gap-y-2 items-start text-white">
          <h1>Videos</h1>
          {videos?.map((video: videoType, i: number) => {
            return (
              <div key={`${video.title} - ${i}`}>
                <video
                  className="w-[320px] h-[250px] rounded-sm"
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${video.url}`}
                  controls
                />
                <p>{video.title}</p>
                <p>{video.artist.name}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Vote;
