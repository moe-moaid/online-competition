import React from 'react';
import MciContainer from '../components/MciContainer';
import MciInput from '../components/MciInput';
import { Button } from '@/components/ui/button';

function page() {
  return (
    <MciContainer className="relative z-0 h-full bg-[url('/how-it-works.png')] bg-cover bg-center bg-no-repeat py-[120px] text-white">
      <div className="absolute inset-0 -z-10 bg-black/80" />
      <div className="mx-auto w-full rounded-lg bg-gray-bg px-2 py-12 sm:px-10 md:w-4/5 md:px-14 lg:w-3/5 lg:px-24 xl:w-2/5">
        <h1 className="mb-10 w-full text-center text-[48px] font-semibold">
          log<span className="text-legendary-500">in</span>
        </h1>
        <form className="flex w-full flex-col items-center justify-center gap-y-6">
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
          <Button
            className="w-full bg-legendary-500 py-6"
            variant="default"
            size="lg"
          >
            login
          </Button>
        </form>
      </div>
    </MciContainer>
  );
}

export default page;
