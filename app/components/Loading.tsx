import React from 'react';
import { Spinner } from '@/components/ui/spinner';

function Loading({ resource }: { resource: string }) {
  return (
    <div className="flex flex-col items-center justify-start py-10">
      <p className="flex flex-row items-center justify-center gap-x-4 text-2xl font-semibold text-white">
        {`Loading ${resource}`}{' '}
        <Spinner className="size-6 text-legendary-500" />
      </p>
    </div>
  );
}

export default Loading;
