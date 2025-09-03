import { gqlRequest } from "@/lib/graphql/client/graphqlClient";
import { GET_ARTIST } from "../graphql/queries/queries";
import { ArtistType } from "../types/artistType";

type ArtistReturnType = {
  getArtist: ArtistType[];
};

export async function getArtist() {
  return gqlRequest<ArtistReturnType>(GET_ARTIST);
}
