import React from "react";
import MciContainer from "../components/MciContainer";
import MciInput from "../components/MciInput";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <MciContainer className="text-white h-full py-[120px] bg-cover bg-center bg-no-repeat bg-[url('/how-it-works.png')] relative z-0">
        <div className="bg-black/80 absolute inset-0 -z-10" />
      <div className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto bg-gray-bg px-2 sm:px-10 md:px-14 lg:px-24 py-12 rounded-lg">
        <h1 className="font-semibold text-[48px] text-center w-full mb-10">
          log<span className="text-legendary-500">in</span>
        </h1>
        <form className="flex flex-col gap-y-6 justify-center items-center w-full">
          <MciInput
            name="email"
            required
            label="Email"
            placeholder="Email"
            fullWidth
          />
          <MciInput
            name="password"
            required
            label="Password"
            placeholder="Password"
            fullWidth
          />
          <Button className="py-6 bg-legendary-500 w-full" variant='default' size='lg'>login</Button>
        </form>
      </div>
    </MciContainer>
  );
}

export default page;
