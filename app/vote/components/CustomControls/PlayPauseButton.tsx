import React from 'react';

type Props = {
  currentVideo: HTMLVideoElement | null;
  isVideoPlaying: boolean;
  setIsVideoPlaying: (value: boolean) => void;
};
function PlayPauseButton({
  currentVideo,
  isVideoPlaying,
  setIsVideoPlaying,
}: Props) {
  function skip(value: number) {
    if (currentVideo) currentVideo.currentTime += value;
  }
  return (
    <div className="jsutify-center flex flex-row items-center gap-x-8">
      <button onClick={() => skip(-10)}>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_223_14478)">
            <path
              d="M0.68441 11.4796L4.82697 8.96484C5.75039 8.40173 7.26076 7.48456 8.18419 6.92372L12.4627 4.40896C13.3843 3.84584 14.2804 4.29746 14.2804 5.41326V9.4631L14.9609 8.96516C15.8825 8.40204 17.3266 7.48488 18.2482 6.92404L22.3556 4.40928C23.279 3.84616 24 4.29778 24 5.41364V10.4759V14.5258V19.5881C24 20.6997 23.2439 21.1533 22.3223 20.5924L18.1798 18.0777C17.2564 17.5146 15.8822 16.5997 14.9606 16.0366L14.2801 15.5386V19.5885C14.2801 20.7001 13.384 21.1537 12.4625 20.5928L8.24992 18.0781C7.32649 17.5149 5.78095 16.6001 4.85971 16.0369L0.701601 13.5222C-0.223158 12.9577 -0.238708 12.0404 0.68441 11.4796Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_223_14478">
              <rect
                width="24"
                height="25"
                fill="white"
                transform="matrix(-1 0 0 1 24 0)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      {!isVideoPlaying ? (
        <button
          onClick={() => {
            currentVideo?.play();
            setIsVideoPlaying(true);
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.7027 10.5313L15.4946 6.90994C14.1094 6.09901 11.8438 4.77824 10.4558 3.9706L4.02004 0.349106C2.6353 -0.461726 1.27344 0.188634 1.27344 1.79499V22.207C1.27344 23.8078 2.6353 24.461 4.02059 23.6534L10.3425 20.032C11.7305 19.2243 14.0545 17.9036 15.4397 17.0926L21.6771 13.4712C23.059 12.6603 23.0852 11.339 21.7027 10.5313Z"
              fill="white"
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => {
            currentVideo?.pause();
            setIsVideoPlaying(false);
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="5" y="4" width="4" height="26" rx="1" fill="white" />
            <rect x="15" y="4" width="4" height="26" rx="1" fill="white" />
          </svg>
        </button>
      )}
      <button onClick={() => skip(10)}>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_223_15862)">
            <path
              d="M23.3156 11.4796L19.173 8.96484C18.2496 8.40173 16.7392 7.48456 15.8158 6.92372L11.5373 4.40896C10.6157 3.84584 9.71961 4.29746 9.71961 5.41326V9.4631L9.03906 8.96516C8.11746 8.40204 6.67336 7.48488 5.75182 6.92404L1.64438 4.40928C0.720952 3.84616 0 4.29778 0 5.41364V10.4759V14.5258V19.5881C0 20.6997 0.756125 21.1533 1.67767 20.5924L5.82023 18.0777C6.74365 17.5146 8.11776 16.5997 9.03936 16.0366L9.71992 15.5386V19.5885C9.71992 20.7001 10.616 21.1537 11.5375 20.5928L15.7501 18.0781C16.6735 17.5149 18.219 16.6001 19.1403 16.0369L23.2984 13.5222C24.2232 12.9577 24.2387 12.0404 23.3156 11.4796Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_223_15862">
              <rect width="24" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}

export default PlayPauseButton;
