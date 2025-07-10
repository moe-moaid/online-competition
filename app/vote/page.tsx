'use client';
import React from 'react'
import { useGetListVideos } from '@/lib/getListService';

function Vote() {
  const { data: videos, error: vid_error } = useGetListVideos();
  return (
    <div>
        {/* <section className=''> */}
            <div className="relative w-full h-[580px]">
                <video className='w-full h-[580px] object-cover' src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${videos?.[0].url}`}/>
            </div>
        {/* </section> */}
    </div>
  )
}

export default Vote
