import axios from "axios";
import { useMutation } from "@tanstack/react-query";

type Params = {
  data: FormData;
};

export function useUploadVideo() {
  return useMutation({
    mutationFn: async ({ data }: Params) => {
      console.log("data from api ===", data);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_UPLOAD_VIDEO_API_URL}videos/upload`,
          data,
           {
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
