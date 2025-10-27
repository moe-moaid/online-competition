import { gql } from 'graphql-request';

export const CAST_VOTE = gql`
  mutation CastVote($videoId: Int!) {
    castVote(videoId: $videoId) {
      id
      videoId
    }
  }
`;

export const CREATE_PAYMENT_INTENT = `
  mutation CreatePaymentIntent($videoId: Int!) {
  createPaymentIntent(videoId: $videoId)
}
`;
