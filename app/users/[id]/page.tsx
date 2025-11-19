import MciContainer from '@/app/components/MciContainer';
import { getSingleArtist } from '@/lib/services/artist';
import Image from 'next/image';
import SocailMediaRenderer from '../components/SocailMediaRenderer';
import VideoCard from '../components/VideoCard';
import ReactCountryFlag from 'react-country-flag';

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const userId = Number(id);
  const me = await getSingleArtist(userId);

  return (
    <div className="pb-20 text-white">
      <MciContainer className="mt-[80px]">
        <h1 className="mb-10 text-[48px] font-semibold">Profile</h1>
        <div className="flex w-full flex-col items-start justify-start gap-y-8 md:flex-row md:gap-x-10">
          <div className="xl:h[520px] relative h-[300px] w-full overflow-clip rounded-lg sm:h-[350px] md:h-[460px] md:w-[525px] 2xl:h-[560px]">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${me.artist.avatar.url}`}
              className="rounded-lg p-1"
              fill
              alt="singer image"
              loading="lazy"
            />
          </div>
          <div className="flex w-full flex-col gap-y-4 md:w-1/2">
            <div className="flex flex-row items-center justify-start gap-x-4">
              <p className="2l:text-2xl text-sm md:text-lg lg:text-xl">
                {me.artist.name}
              </p>
              <ReactCountryFlag
                countryCode={me.artist.location.country}
                style={{ fontSize: '2em' }}
              />
            </div>
            <p className="2l:text-2xl flex flex-row items-center justify-start gap-x-4 text-sm text-white/60 md:text-lg lg:text-xl">
              verified{' '}
              <svg
                className="w-4 md:w-5 lg:w-6 xl:w-7 2xl:w-8"
                // width="32"
                // height="32"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_304_326)">
                  <path
                    d="M14.6673 7.38674V8.00007C14.6665 9.43769 14.201 10.8365 13.3402 11.988C12.4794 13.1394 11.2695 13.9817 9.89089 14.3893C8.51227 14.797 7.03882 14.748 5.6903 14.2498C4.34177 13.7516 3.19042 12.8308 2.40796 11.6248C1.6255 10.4188 1.25385 8.99212 1.34844 7.55762C1.44303 6.12312 1.99879 4.75762 2.93284 3.66479C3.86689 2.57195 5.12917 1.81033 6.53144 1.4935C7.93371 1.17668 9.40083 1.32163 10.714 1.90674"
                    stroke="#11F789"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.6667 2.6665L8 9.33984L6 7.33984"
                    stroke="#11F789"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_304_326">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>

            <p className="2l:text-2xl text-sm md:text-lg lg:text-xl">
              age: {me.artist.age || 'Immortal'}
            </p>
            <p className="2l:text-2xl text-sm md:text-lg lg:text-xl">
              Country: {me.artist.name}
            </p>
            <div className="flex flex-row items-center justify-start gap-x-4">
              <p className="2l:text-2xl text-sm md:text-lg lg:text-xl">
                Social info:
              </p>
              <SocailMediaRenderer socials={me.artist.socialMedias} />
            </div>
            <p className="2l:text-2xl text-sm md:text-lg lg:text-xl ">Bio</p>
            <p className="2l:text-2xl text-sm md:text-lg lg:text-xl">
              {me.artist.bio}
            </p>
          </div>
        </div>

        <h1 className="mb-6 mt-20 text-2xl font-semibold text-white">{`Uploaded Videos (${me.artist.videos.length})`}</h1>
        <div className="flex w-full flex-row flex-wrap items-center justify-start gap-x-7 gap-y-10">
          {me.artist.videos.map((video, index) => {
            return <VideoCard key={`${index}-${video.id}`} video={video} />;
          })}
        </div>
      </MciContainer>
    </div>
  );
}
