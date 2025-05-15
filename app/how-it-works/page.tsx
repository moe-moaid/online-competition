import React from "react";
import MciContainer from "../components/MciContainer";
const point_icon = (
  <svg
    width="85"
    height="58"
    viewBox="0 0 85 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      y="0.705206"
      width="39.0957"
      height="39.0957"
      rx="3.5"
      transform="matrix(0.709002 0.705206 -0.709002 0.705206 28.9297 1.17835)"
      stroke="#252525"
    />
    <rect
      width="40.0957"
      height="40.0957"
      rx="4"
      transform="matrix(0.709002 0.705206 -0.709002 0.705206 56.5703 0.970459)"
      fill="#252525"
    />
  </svg>
);
const Points = [
  {
    title:
      "Each participant is required to submit a video of themselves singing in any language to participate in the competition.",
  },
  {
    title:
      "The participant will be asked to create an account where they need to share the following details:",
    ul: [
      "Name",
      "Title",
      "Contact Information",
      "Email ID",
      "Age",
      "Nationality",
      "Selection of Music Category",
    ],
  },
  {
    title:
      "Upon creation of the account, which will offer a unique ID, the participant will receive a link within 24 hours.",
  },
  {
    title: "The first entry is free of charge.",
  },
  {
    title:
      "People will be encouraged to vote their favorite contestant. Each vote will be charged USD 3.",
  },
  {
    title:
      "The competition will be in Stages, and the highest number of votes will qualify the best talents to the next stage until the final stage. If the participant will be eliminated from the competition, they will have the chance to re-register, where they will have to pay a fee of:",
    ul: ["Round 2 will be USD 100", "Round 3 will be USD 250"],
  },
];
function page() {
  return (
    <MciContainer className="flex flex-col h-screen items-stretch w-full">
      <div className="absolute inset-0 z-0 bg-[url('/how-it-works.png')] bg-cover bg-center h-full w-full" />
      <div className="absolute inset-0 bg-black/90" />
      <h1 className=" relative text-white font-semibold text-[48px] mb-5 mt-10">
        How it <span className="text-legendary-500">Works</span>
      </h1>
      <div className="text-white relative">
        {Points.map((point, i) => (
          <div
            key={`${i} - ${point.title}`}
            className={`flex flex-row ${
              point.ul ? "items-start" : "items-center"
            } gap-x-4 mb-6`}
          >
            <div className="">{point_icon}</div>
            <div className="">
              <p className={`${point.ul ? "mt-4" : "mt-0"}`}>{point.title}</p>
              {point.ul && (
                <ul className="list-disc ms-4 mt-2">
                  {point.ul.map((list, i) => (
                    <li key={`${i} - ${list}`}>{list}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </MciContainer>
  );
}

export default page;
