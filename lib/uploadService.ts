import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { VideoUploadFormType } from "./types/videoUploadFormType";

type Params = {
  data: VideoUploadFormType;
};

export function useUploadVideo() {
  return useMutation({
    mutationFn: async ({ data }: {data: FormData}) => {

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}videos/upload`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / (progressEvent.total || 1)
            );
            console.log(`Upload Progress: ${percentCompleted}%`);
          },
        }
      );
      return response.data;
    },
  });
}
