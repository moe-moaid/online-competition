import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export function useUploadVideo() {
  return useMutation({
    mutationFn: async ({ data }: { data: FormData }) => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}videos/upload`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      return response.data;
    },
  });
}
