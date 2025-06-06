import React from "react";
import MciContainer from "../components/MciContainer";

const Rules = [
  {
    number: "01",
    title: "Upload Video",
    desc: "Each participant is allowed to upload 1 video.",
  },
  {
    number: "02",
    title: "Unique ID",
    desc: "Each participant will receive a unique ID upon creation of the Account.",
  },
  {
    number: "03",
    title: "Multiple IDs",
    desc: "If the Participant creates multiple IDs, only the first video will be taken into consideration.",
  },
  {
    number: "04",
    title: "Final Stage",
    desc: "The Final will feature only the first 10 highest voted participants",
  },
  {
    number: "05",
    title: "After Final",
    desc: "After the Final, the winner will be contacted by our team within 48 hours to be informed about the next steps!",
  },
];
function page() {
  return (
    <MciContainer className="py-[120px] bg-cover bg-center bg-no-repeat bg-[url('/how-it-works.png')] relative z-0">
      <div className="absolute inset-0 bg-black/80 -z-10" />
      <div className="flex flex-col items-center text-white">
        <h1 className="font-bold text-[40px]">
          Rules of <span className="text-legendary-500">Mackie</span>
        </h1>
        <p>Rules are simple, so simple you can't mess up, listed below</p>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap text-white justify-center px-12">
        {Rules.map((rule, i) => (
          <div
            key={`${rule.number} - ${i}`}
            className="flex flex-row jsutify-start lg:w-1/3 items-start"
          >
            <p className="font-bold text-[120px] text-white/20 -top-1/2">
              {rule.number}
            </p>
            <div className="self-center translate-y-1/2 w-full">
              <h4 className="font-bold text-[16px] md:text-[18px] lg:text-[20px]">
                {rule.title}
              </h4>
              <p className="text-[12px] md:text-[14px] lg:text-[16px]">
                {rule.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </MciContainer>
  );
}

export default page;
