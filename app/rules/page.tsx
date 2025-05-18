import React from "react";
import MciContainer from "../components/MciContainer";

function page() {
  return (
    <MciContainer>
      <div className="flex flex-col items-center text-white">
        <h1 className="font-bold text-[40px]">
          Rules of <span className="text-legendary-500">Mackie</span>
        </h1>
        <p>Rules are simple, so simple you can't mess up, listed below</p>
      </div>
      <div className="flex flex-row flex-wrap text-white">
              <div className="flex flex-row jsutify-start items-baseline">
          <p className="font-bold text-[120px] text-white/20">01</p>
          <div>
            <h4 className="font-bold text-[20px]">Upload Video</h4>
            <p>Each participant is allowed to upload 1 video.</p>
          </div>
        </div>
      </div>
    </MciContainer>
  );
}

export default page;
