import React from "react";
type Props = {
  country: string;
};
// type Props = {
//   country: string;
//   title: string;
//   artist: string;
//   isVerified: boolean;
//   imageUrl: string;
// };
// function VidCard({ country, title, artist, isVerified, imageUrl }: Props) {
function VidCard({ country }: Props) {
  return (
    <div className="p-5 text-white bg-gray-bg w-[320px] h-[420px] rounded-[20px]">
      <div className="relative bg-teal-600 w-full h-full rounded-[20px]">
        <p className="absolute top-0 left-1/2 -translate-x-1/2 px-6 py-1 rounded-bl-lg rounded-br-lg bg-legendary-500 font-semibold text-[20px]">
          {country}
        </p>
      </div>
    </div>
  );
}

export default VidCard;
