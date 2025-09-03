import { gql } from "graphql-request";

export const GET_VIDEOS = gql`
  query GetVideos {
    videos {
      id
      title
      url
      createdAt
    }
  }
`;

export const GET_ARTIST = gql`
  query GetArtists {
    artists {
      name
      age
      email
      phone
      locationId
      videos {
        id
        title
        url
        createdAt
      }
    }
  }
`;
