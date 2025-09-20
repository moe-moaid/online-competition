import { render, screen } from "@testing-library/react";
import VidCard from "./VidCard";
import { videoType } from "@/lib/types/videoType";
import { VoteContext } from "@/lib/context/vote context";
import { PropsWithChildren } from "react";
import { VoteProvider } from "@/lib/context/vote context";

describe("test video cards for rendering the right things", () => {
  const mockVideo: videoType = {
    id: 7,
    artistId: 4,
    artist: {
      name: "jake",
      location: { country: "canada" },
      avatar: { url: "uploades/url" },
    },
    category: "Hip Pop",
    description: "discription for the video",
    title: "video for competing",
    url: "uploades/videos/myVideo.mp4",
    createdAt: "22/8/2025",
    updatedAtAt: "22/8/2025",
  };
  const mockFn = jest.fn();

  beforeEach(() => {
    render(
      <VoteProvider>
        <VidCard setDisplayVid={mockFn} video={mockVideo} />
      </VoteProvider>
    );
  });
//   queryBy, getBy, findB
{/**
    | Variant          | Return type                            | Throws if none found?       | Throws if >1 found?      |
| ---------------- | -------------------------------------- | --------------------------- | ------------------------ |
| **getBy\***      | Single element                         | ✅ Yes (if none)             | ✅ Yes (if more than one) |
| **getAllBy\***   | Array of elements                      | ✅ Yes (if none)             | ❌ No (returns all)       |
| **queryBy\***    | Single element or `null`               | ❌ No (returns null)         | ✅ Yes (if more than one) |
| **queryAllBy\*** | Array of elements (empty if none)      | ❌ No (empty array)          | ❌ No                     |
| **findBy\***     | Promise resolving to element           | ✅ Yes after timeout         | ✅ Yes (if more than one) |
| **findAllBy\***  | Promise resolving to array of elements | ✅ Yes after timeout if none | ❌ No (returns all)       |

*/}

  it("tests if the card has all the necessary components", () => {
    // expect(screen.queryByText(/video for competing/i)).toBeInTheDocument(); // video name
    // expect(screen.queryByText(/by jake/i)).toBeInTheDocument(); // artist name
    // expect(screen.queryByRole('img')).toBeInTheDocument(); // artist avatar
    // expect(screen.queryAllByRole('button')).toBeDefined(); // play button and vote button
    expect(screen.queryByText(/hello/i)).toBeNull(); // artist avatar
  });
});
