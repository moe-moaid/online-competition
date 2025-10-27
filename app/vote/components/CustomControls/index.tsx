import React, { useEffect, useState } from 'react';
import PlayPauseButton from './PlayPauseButton';
import SoundControl from './SoundControl';

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
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  function handleFullscreen() {
    if (!document.fullscreenElement) {
      if (currentVideo?.requestFullscreen) {
        currentVideo.requestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFull = !!document.fullscreenElement;
      setIsFullscreen(isFull);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () =>
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);
  return (
    <div className="flex w-full flex-col">
      {/* progress bar */}

      <div className="z-10 flex flex-row items-center justify-between">
        {/* Volume control */}
        <SoundControl currentVideo={currentVideo} />

        {/* play, pose, and seek buttons  ▶️⏸️ ⏪️⏩️ */}
        <PlayPauseButton
          currentVideo={currentVideo}
          isVideoPlaying={isVideoPlaying}
          setIsVideoPlaying={setIsVideoPlaying}
        />

        {/* Full screen toggle */}
        <button onClick={handleFullscreen}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.17181 12.4998L3.34206 18.5708L0 15.0875V24.9998H9.51581L6.17181 21.5164L12 15.4458L9.17181 12.4998Z"
              fill="white"
            />
            <path
              d="M14.4842 0L17.8282 3.48333L12 9.55397L14.8282 12.5L20.6579 6.42897L24 9.9123V0H14.4842Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CustomControls;
