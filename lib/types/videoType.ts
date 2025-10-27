import { Category } from './videoUploadFormType';
import { ArtistType } from './artistType';

export type videoType = {
  id: number;
  artistId: number;
  artist: ArtistType;
  category: Category;
  description: string;
  title: string;
  url: string;
  createdAt: string;
  updatedAtAt: string;
};
