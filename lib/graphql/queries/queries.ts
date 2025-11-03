import { gql } from 'graphql-request';

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

export const GET_ARTISTS = gql`
  query GetArtists {
    artists {
      name
      age
      email
      phone
      bio
      location{
      country
      address
      }
      videos {
        id
        title
        url
        createdAt
      }
      socialMedias {
        id
        platform
        link
      }
    }
  }
`;

export const GET_ARTIST = gql`
  query GetArtist($id: Int!) {
    artist(id: $id) {
      name
      age
      email
      phone
      bio
      location{
      country
      address
      }
      videos {
        id
        title
        url
        createdAt
      }
      socialMedias {
        id
        platform
        link
      }
    }
  }
`;
