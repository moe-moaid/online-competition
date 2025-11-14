import { videoType } from './videoType';

type socialMedia = {
  id: number;
  platform: string;
  link: string;
};

type LocationType = {
  country: string;
  address: string;
};

export type ArtistType = {
  id: number;
  name: string;
  age: number;
  bio: string;
  email: string;
  phone: string;
  location: LocationType;
  avatar: { url: string };
  video: videoType[];
  socialMedias: socialMedia[];
};
