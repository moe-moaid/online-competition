import React from "react";

type Props = {
  country: string;
  title: string;
  artist: string;
  isVerified: boolean;
  imageUrl: string;
};
function VidCard({ country, title, artist, isVerified, imageUrl }: Props) {
  return (
    <div className="p-5">
      <div className="relative">
        <p className="absolute top-0 left-1/2 -translate-x-1/2 px-2 py-1 rounded-bl-lg rounded-br-lg bg-legendary-500 font-semibold text-[20px]">
          {country}
        </p>
      </div>
    </div>
  );
}

export default VidCard;
