import React, { ChangeEvent, useState } from "react";

type Props = {
  currentVideo: HTMLVideoElement | null;
};
function SoundControl({ currentVideo }: Props) {
  const [volume, setVolume] = useState<number>(0.5);
  function volumeControl(e: ChangeEvent<HTMLInputElement>) {
    const safeVolum = Number(e.target.value) / 100;
    setVolume(safeVolum);
    if (currentVideo) currentVideo.volume = safeVolum;
  }

  return (
    <div>
      <button className="group flex flex-row justify-start items-center gap-x-4">
        {volume > 0 ? (
          <svg
            width="38"
            height="24"
            viewBox="0 0 38 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#volume)">
              {/* Base speaker shape - always visible when volume > 0 */}
              <path
                d="M14.8683 1.42381L8.65199 6.01771C7.58869 6.8026 6.72011 7.28261 6.72011 7.08558C6.72011 6.89357 5.64031 6.73495 4.32007 6.73495H2.40004C1.07979 6.73495 0 7.81744 0 9.13498V14.4127C0 15.7352 1.07979 16.8128 2.40004 16.8128H4.32007C5.64031 16.8128 6.72011 16.7575 6.72011 16.6857C6.72011 16.6138 7.58914 17.2017 8.65206 17.984L14.8684 22.5752C15.9339 23.3578 16.8003 22.9209 16.8003 21.601V2.4007C16.8003 1.08091 15.9339 0.641627 14.8683 1.42381Z"
                fill="white"
              />

              {/* Small volume wave - shows for low volume */}
              <path
                d="M22.2702 7.875L20.5184 9.58615C21.1544 10.0182 21.6006 10.7121 21.6006 11.535C21.6006 12.3656 21.1544 13.0591 20.5181 13.4888L22.2699 15.2C23.3236 14.3191 24.0002 13.0135 24.0002 11.5351C24.0006 10.0569 23.3236 8.75589 22.2702 7.875Z"
                fill="white"
              />

              {/* Medium volume wave - shows for medium volume */}
              {volume > 0.4 && (
                <path
                  d="M25 7 C27 10, 27 14, 25 17"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
              )}

              {/* High volume wave - shows for high volume */}
              {volume > 0.7 && (
                <path
                  d="M28 5 C31 10, 31 14, 28 19"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
              )}
            </g>
            <defs>
              <clipPath id="volume">
                <rect width="38" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          // Muted icon when volume is 0
          <svg
            width="38"
            height="24"
            viewBox="0 0 38 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#mute)">
              <path
                d="M14.8683 1.42381L8.65199 6.01771C7.58869 6.8026 6.72011 7.28261 6.72011 7.08558C6.72011 6.89357 5.64031 6.73495 4.32007 6.73495H2.40004C1.07979 6.73495 0 7.81744 0 9.13498V14.4127C0 15.7352 1.07979 16.8128 2.40004 16.8128H4.32007C5.64031 16.8128 6.72011 16.7575 6.72011 16.6857C6.72011 16.6138 7.58914 17.2017 8.65206 17.984L14.8684 22.5752C15.9339 23.3578 16.8003 22.9209 16.8003 21.601V2.4007C16.8003 1.08091 15.9339 0.641627 14.8683 1.42381Z"
                fill="white"
              />
              <line
                x1="19.5"
                y1="8.5"
                x2="22.5"
                y2="15.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="22.5"
                y1="8.5"
                x2="19.5"
                y2="15.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <clipPath id="mute">
                <rect width="38" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}

        <input
          className="accent-legendary-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
          type="range"
          min={0}
          max={100}
          onChange={(e) => volumeControl(e)}
          defaultValue={volume * 100}
        />
      </button>
    </div>
  );
}

export default SoundControl;
