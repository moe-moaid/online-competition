import React from "react";
import PlayPauseButton from "./PlayPauseButton";
import SoundControl from "./SoundControl";

type Props = {
  currentVideo: HTMLVideoElement | null;
  isVideoPlaying: boolean;
  setIsVideoPlaying: (value: boolean) => void;
};
function CustomControls({
  currentVideo,
  isVideoPlaying,
  setIsVideoPlaying,
}: Props) {
  function skip(value: number) {
    if (currentVideo) currentVideo.currentTime += value;
  }

  return (
    <div className="flex flex-col w-full">
      {/* progress bar */}

      <div className="z-10 flex flex-row justify-between items-center">
        {/* Volume control */}
        {/* <SoundControl /> */}

        {/* <div> */}
          {/* play, pose, and seek buttons  ▶️⏸️ ⏪️⏩️ */}
          <PlayPauseButton
            currentVideo={currentVideo}
            isVideoPlaying={isVideoPlaying}
            setIsVideoPlaying={setIsVideoPlaying}
          />
        {/* </div> */}

        {/* Full screen toggle */}
      </div>
    </div>
  );
}

export default CustomControls;
