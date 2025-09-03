import { gql } from "graphql-request";

export const CAST_VOTE = gql`
  mutation CastVote($videoId: Int!) {
    castVote(videoId: $videoId) {
      id
      videoId
    }
  }
`;
