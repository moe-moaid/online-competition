import axios from "axios";
import { useMutation } from "@tanstack/react-query";

type Params = {
  data: FormData;
};

export function useUploadVideo() {
  const AXIOS = axios.create({
    baseURL: process.env.NEXT_PUBLIC_UPLOAD_VIDEO_API_URL,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    url: process.env.NEXT_PUBLIC_UPLOAD_VIDEO_API_URL + "/videos",
  });

  return useMutation({
    mutationFn: async ({ data }: Params) => {
      const response = await AXIOS.request({
        data,
      });
      return response.data;
    },
  });
}
