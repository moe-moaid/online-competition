import React from "react";
import PlayPauseButton from "./PlayPauseButton";

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
  return (
    <div>
      {/* play pose button  ▶️⏸️ */}
      <PlayPauseButton
        currentVideo={currentVideo}
        isVideoPlaying={isVideoPlaying}
        setIsVideoPlaying={setIsVideoPlaying}
      />
      {/* Seek Buttons  ⏪️⏩️*/}
      {/* Volume control */}
      {/* Full screen toggle */}
    </div>
  );
}

export default CustomControls;
