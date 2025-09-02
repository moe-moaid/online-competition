import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { videoType } from "./types/videoType";

export function useGetListVideos() {
  return useQuery<videoType []>({
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    queryKey: ["videos"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}videos`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
  });
}
