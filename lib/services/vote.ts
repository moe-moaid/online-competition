<<<<<<< Updated upstream
// services/votes.ts
import { gqlRequest } from '@/lib/graphql/client/graphqlClient';
import { CAST_VOTE } from '@/lib/graphql/mutations/mutations';
=======
import { gqlRequest } from "@/lib/graphql/client/graphqlClient";
import { CAST_VOTE } from "@/lib/graphql/mutations/mutations";
import { CREATE_PAYMENT_INTENT } from "@/lib/graphql/mutations/mutations";
>>>>>>> Stashed changes

export async function castVote(videoId: number) {
  return gqlRequest<{ castVote: { id: number; videoId: number } }>(CAST_VOTE, {
    videoId,
  });
}
<<<<<<< Updated upstream
=======

type CreatePaymentIntentResponse = {
  createPaymentIntent: string;
};

export async function createPaymentIntent(videoId: number) {
  return gqlRequest<CreatePaymentIntentResponse>(CREATE_PAYMENT_INTENT, {
    videoId,
  });
}
>>>>>>> Stashed changes
