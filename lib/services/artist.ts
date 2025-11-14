import { gqlRequest } from '@/lib/graphql/client/graphqlClient';
import { GET_ARTISTS, GET_ARTIST } from '../graphql/queries/queries';
import { ArtistType } from '../types/artistType';

type ArtistsReturnType = {
  getArtist: ArtistType[];
};

type ArtistReturnType = {
  artist: ArtistType;
};

export async function getArtists() {
  return gqlRequest<ArtistsReturnType>(GET_ARTISTS);
}

export async function getSingleArtist(id: number) {
  return gqlRequest<ArtistReturnType>(GET_ARTIST, { id });
}
