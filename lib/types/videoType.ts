import { Category } from "./videoUploadFormType";

export type videoType = {
  artistId: number;
  artist: { name: string; location: { country: string } };
  category: Category;
  description: string;
  title: string;
  url: string;
  createdAt: string;
  updatedAtAt: string;
};
