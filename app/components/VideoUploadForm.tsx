import { Category, VideoUploadFormType } from '@/lib/types/videoUploadFormType';
import { useUploadVideo } from '@/lib/api/uploadService';
import MciInput from './MciInput';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
function VideoUploadForm() {
  const { mutate, data, error } = useUploadVideo();
  const { register, handleSubmit, watch, setValue } =
    useForm<VideoUploadFormType>();
  const selectedGener = watch('category');
  const categories: Category[] = [
    'Hip Pop',
    'Rap',
    'RNB',
    'Afrobeat',
    'Raggae',
    'Dancehall',
    'Reggarton',
    'Others',
  ];
  const handleFormSubmission = (values: VideoUploadFormType) => {
    const req_body = new FormData();
    const file = values.video?.[0];
    req_body.append('video', file);
    req_body.append('tittle', values.title);
    req_body.append('decrtiption', values.description);
    req_body.append('category', values.category);
    req_body.append('artistId', '1');

    mutate({
      data: req_body,
    });
  };
  return (
    <form
      className="flex flex-row items-stretch justify-center gap-x-4 px-14"
      onSubmit={handleSubmit(handleFormSubmission)}
    >
      <div className="flex flex-col gap-y-4">
        <MciInput
          {...register('title')}
          name="title"
          label="Song Name"
          placeholder="Enter sont name"
          required
          fullWidth
        />
        <div className="flex flex-col gap-y-2">
          <p className="text-white">
            Description<span className="text-red-600">*</span>
          </p>
          <textarea
            {...register('description')}
            className="resize-none rounded-lg border border-white bg-transparent p-4 text-white outline-none hover:border-legendary-500 focus:border-legendary-500"
            cols={5}
            rows={7}
            placeholder="Add Desctiption"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-white">
            Category<span className="text-red-600">*</span>
          </p>
          <DropdownMenu {...register('category')}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex flex-row items-center justify-between hover:bg-white"
              >
                {selectedGener || 'Select Category'}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="bottom"
              align="start"
              className="w-[--radix-dropdown-menu-trigger-width] min-w-full bg-white"
            >
              {categories.map((category, i) => (
                <DropdownMenuItem
                  className="focus:cursor-pointer focus:bg-lightGray-bg focus:text-white"
                  key={`${category} - ${i}`}
                  onSelect={() => {
                    setValue('category', category);
                  }}
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex flex-col self-stretch">
        <div className="flex h-full flex-col items-center justify-center rounded-lg border border-white px-4">
          <input
            id="video"
            {...register('video')}
            type="file"
            accept=".mp4"
            required
            hidden
          />
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9471 15.053C16.6979 14.8087 16.3628 14.6719 16.0138 14.6719C15.6648 14.6719 15.3297 14.8087 15.0804 15.053L11.0804 18.9197C10.9389 19.0364 10.8231 19.1811 10.7401 19.3447C10.6571 19.5082 10.6087 19.6872 10.598 19.8703C10.5873 20.0534 10.6145 20.2368 10.6779 20.4089C10.7412 20.581 10.8395 20.7382 10.9664 20.8706C11.0933 21.0031 11.2462 21.1079 11.4154 21.1786C11.5847 21.2492 11.7668 21.2842 11.9502 21.2813C12.1336 21.2784 12.3144 21.2376 12.4813 21.1617C12.6483 21.0857 12.7978 20.9761 12.9204 20.8397L14.6671 19.1464V26.6664C14.6671 27.02 14.8076 27.3591 15.0576 27.6092C15.3077 27.8592 15.6468 27.9997 16.0004 27.9997C16.3541 27.9997 16.6932 27.8592 16.9432 27.6092C17.1933 27.3591 17.3338 27.02 17.3338 26.6664V19.213L19.0538 20.9464C19.1777 21.0713 19.3252 21.1705 19.4877 21.2382C19.6501 21.3059 19.8244 21.3407 20.0004 21.3407C20.1764 21.3407 20.3507 21.3059 20.5132 21.2382C20.6757 21.1705 20.8231 21.0713 20.9471 20.9464C21.0721 20.8224 21.1713 20.6749 21.2389 20.5125C21.3066 20.35 21.3415 20.1757 21.3415 19.9997C21.3415 19.8237 21.3066 19.6494 21.2389 19.4869C21.1713 19.3244 21.0721 19.177 20.9471 19.053L16.9471 15.053Z"
              fill="white"
            />
            <path
              d="M23.5599 9.33363C23.0158 7.7617 21.9953 6.39846 20.6403 5.43358C19.2853 4.46871 17.6633 3.9502 15.9999 3.9502C14.3364 3.9502 12.7144 4.46871 11.3594 5.43358C10.0044 6.39846 8.98392 7.7617 8.43986 9.33363C7.24193 9.49408 6.11015 9.97717 5.16559 10.7312C4.22104 11.4853 3.49924 12.4819 3.07741 13.6146C2.65559 14.7472 2.54961 15.9732 2.7708 17.1614C2.992 18.3496 3.53205 19.4553 4.33319 20.3603C4.42997 20.5308 4.56313 20.6778 4.7232 20.7909C4.88328 20.904 5.06633 20.9805 5.25931 21.0148C5.4523 21.0491 5.65047 21.0404 5.83973 20.9894C6.02899 20.9384 6.20466 20.8463 6.35426 20.7196C6.50385 20.593 6.62368 20.4349 6.70521 20.2566C6.78675 20.0784 6.82797 19.8843 6.82596 19.6883C6.82395 19.4923 6.77875 19.2992 6.69358 19.1227C6.60841 18.9461 6.48536 18.7905 6.33319 18.667C5.81735 18.0902 5.47984 17.3763 5.36158 16.6116C5.24331 15.847 5.34937 15.0644 5.66689 14.3588C5.98442 13.6532 6.49978 13.0548 7.15052 12.6362C7.80126 12.2176 8.55944 11.9967 9.33319 12.0003H9.46653C9.77846 12.0066 10.0827 11.9033 10.3263 11.7084C10.57 11.5135 10.7375 11.2393 10.7999 10.9336C11.0447 9.72799 11.6988 8.64406 12.6513 7.8655C13.6039 7.08693 14.7963 6.66162 16.0265 6.66162C17.2568 6.66162 18.4492 7.08693 19.4017 7.8655C20.3543 8.64406 21.0084 9.72799 21.2532 10.9336C21.3155 11.2393 21.4831 11.5135 21.7267 11.7084C21.9703 11.9033 22.2746 12.0066 22.5865 12.0003H22.6665C23.4403 11.9967 24.1985 12.2176 24.8492 12.6362C25.4999 13.0548 26.0153 13.6532 26.3328 14.3588C26.6504 15.0644 26.7564 15.847 26.6381 16.6116C26.5199 17.3763 26.1824 18.0902 25.6665 18.667C25.5491 18.7987 25.4589 18.9524 25.4013 19.1192C25.3438 19.286 25.3198 19.4626 25.331 19.6387C25.3422 19.8148 25.3882 19.987 25.4664 20.1452C25.5446 20.3034 25.6534 20.4445 25.7865 20.5603C26.0296 20.7747 26.3424 20.8932 26.6665 20.8936C26.8558 20.8934 27.0429 20.8528 27.2154 20.7747C27.3878 20.6965 27.5416 20.5825 27.6665 20.4403C28.4899 19.5369 29.049 18.4245 29.2828 17.2248C29.5166 16.025 29.4161 14.7841 28.9922 13.6376C28.5683 12.4911 27.8373 11.4833 26.8793 10.7242C25.9212 9.96515 24.7729 9.48409 23.5599 9.33363Z"
              fill="white"
            />
          </svg>
          <label
            className="text-gray-text underline hover:cursor-pointer"
            htmlFor="video"
          >
            Drag your video here or import from your PC
          </label>
        </div>
        <button type="button" className="text-white">
          Cancel
        </button>
        <button
          type="submit"
          className="hover:outline-solid rounded-lg bg-legendary-500 py-2 text-white  transition-all duration-300  ease-in-out hover:bg-transparent hover:text-legendary-500 hover:outline-1 hover:outline-legendary-500"
        >
          Upload
        </button>
      </div>

      {error && <p className="text-amber-500">Error uploading video</p>}
      {error && <p className="text-amber-500">Error uploading video</p>}
      {data && <p className="text-lime-500">Upload successful!</p>}
    </form>
  );
}

export default VideoUploadForm;
