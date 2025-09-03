// services/votes.ts
import { gqlRequest } from '@/lib/graphql/client/graphqlClient';
import { CAST_VOTE } from '@/lib/graphql/mutations/mutations';

export async function castVote(videoId: number) {
  return gqlRequest<{ castVote: { id: number; videoId: number } }>(CAST_VOTE, {
    videoId,
  });
}
