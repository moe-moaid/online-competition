import React, {
  useState,
  useRef,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import CustomPlayButton from "./CustomPlayButton";

function PlayVideo({
  video,
  setDisplayVid,
}: {
  video: string;
  setDisplayVid: Dispatch<SetStateAction<string | undefined>>;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaing] = useState<boolean>(true);

  useEffect(() => {
    ref.current?.play();
  }, []);

  function handleVideoClick() {
    if (isPlaying) {
      ref.current?.pause();
    }
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset bg-black/65"
        onClick={() => {
          setDisplayVid(undefined);
        }}
      />
      <div className="relative">
        <video
          ref={ref}
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${video}`}
          onPlay={() => setIsPlaing(true)}
          onPause={() => setIsPlaing(false)}
          onClick={handleVideoClick}
        ></video>
        <button
          className="absolute end-5 top-5 z-20"
          onClick={() => setDisplayVid(undefined)}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_311_909)">
              <path
                d="M20 0C9 0 0 9 0 20C0 31 9 40 20 40C31 40 40 31 40 20C40 9 31 0 20 0ZM28.75 25.25L25.25 28.75L20 23.5L14.75 28.75L11.25 25.25L16.5 20L11.25 14.75L14.75 11.25L20 16.5L25.25 11.25L28.75 14.75L23.5 20L28.75 25.25Z"
                fill="black"
                fillOpacity="0.75"
              />
              <path
                d="M28.75 25.25L25.25 28.75L20 23.5L14.75 28.75L11.25 25.25L16.5 20L11.25 14.75L14.75 11.25L20 16.5L25.25 11.25L28.75 14.75L23.5 20L28.75 25.25Z"
                fill="white"
                fillOpacity="0.85"
              />
            </g>
            <defs>
              <clipPath id="clip0_311_909">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        {!isPlaying && (
          <CustomPlayButton
            setIsPlaying={setIsPlaing}
            isPlaying={isPlaying}
            videoRef={ref}
          />
        )}
      </div>
    </div>
  );
}

export default PlayVideo;
