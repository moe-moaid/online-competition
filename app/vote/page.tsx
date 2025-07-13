"use client";
import React from "react";
import { useGetListVideos } from "@/lib/getListService";
import { videoType } from "@/lib/types/videoType";
import Image from "next/image";

function Vote() {
  const { data: videos, error: vid_error } = useGetListVideos();
  return (
    <>
      <section className="h-[580px] relative">
        <video
          className="w-full h-full object-cover"
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${videos?.[0].url}`}
        />
        <div className="absolute h-full overflow-y-auto start-[150px] top-0 flex flex-col gap-y-2 items-start text-white">
          <h1>Videos</h1>
          {videos?.map((video: videoType, i: number) => {
            return (
              <div key={`${video.title} - ${i}`}>
                <video
                  className="w-[320px] rounded-sm"
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${video.url}`}
                />
                <div className="flex flex-row justify-start items-center gap-x-4">

<div className="relative w-10 h-10 rounded-full overflow-clip">
<Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${video.artist.avatar.url}`}
              fill
              alt="singer image"
              loading="lazy"
            />
</div>

<div className="">
                <p>{video.title}</p>
                <p>{`By ${video.artist.name}`}</p>
</div>
                </div>

              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Vote;
