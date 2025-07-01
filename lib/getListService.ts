import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function useGetListVideos() {
  return useQuery({
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
