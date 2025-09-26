import { gqlRequest } from '@/lib/graphql/client/graphqlClient';
import { CAST_VOTE } from '@/lib/graphql/mutations/mutations';
import { CREATE_PAYMENT_INTENT } from '@/lib/graphql/mutations/mutations';

export async function castVote(videoId: number) {
  return gqlRequest<{ castVote: { id: number; videoId: number } }>(CAST_VOTE, {
    videoId,
  });
}

type CreatePaymentIntentResponse = {
  createPaymentIntent: string; // or whatever type the server really returns
};

export async function createPaymentIntent(videoId: number) {
  return gqlRequest<CreatePaymentIntentResponse>(CREATE_PAYMENT_INTENT, {
    videoId,
  });
}
