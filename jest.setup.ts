import React from "react";
import "@testing-library/jest-dom";

jest.mock("react-social-icons", () => ({
  SocialIcon: () => React.createElement("div"),
}));

jest.mock("@/lib/api/getListService", () => ({
  useGetListVideos: () => ({
    data: [
      {
        id: 177,
        title: "Video 1 Title",
        description: "Description for video 1, a Hip Pop masterpiece.",
        category: "Hip Pop",
        url: "uploads/videos/video-0.mp4",
        artistId: 41,
        createdAt: "2025-07-24T12:15:38.262Z",
        updatedAt: "2025-07-24T12:15:38.262Z",
        artist: {
          name: "Alice Smith",
          location: {
            country: "USA",
          },
          avatar: {
            url: "uploads/avatars/av-1.png",
          },
        },
      },
    ],
  }),
}));
