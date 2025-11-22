import { render, screen } from '@testing-library/react';
import VidCard from './VidCard';
import { videoType } from '@/lib/types/videoType';
import { VoteProvider } from '@/lib/context/voteContext';

describe('test video cards for rendering the right things', () => {
  const mockVideo: videoType = {
    id: 7,
    artistId: 4,
    artist: {
      name: 'jake',
      location: { country: 'canada' },
      avatar: { url: 'uploades/url' },
    },
    category: 'Hip Pop',
    description: 'discription for the video',
    title: 'video for competing',
    url: 'uploades/videos/myVideo.mp4',
    createdAt: '22/8/2025',
    updatedAtAt: '22/8/2025',
  };
  const mockFn = jest.fn();

  beforeEach(() => {
    render(
      <VoteProvider>
        <VidCard setDisplayVid={mockFn} video={mockVideo} />
      </VoteProvider>,
    );
  });

  it('tests if the card has all the necessary components', () => {
    expect(screen.queryByText(/video for competing/i)).toBeInTheDocument(); // video name
    expect(screen.queryByText(/by jake/i)).toBeInTheDocument(); // artist name
    expect(screen.queryByRole('img')).toBeInTheDocument(); // artist avatar
    expect(screen.queryAllByRole('button')).toBeDefined(); // play button and vote button
  });

  it('makes sure there are two buttons', () => {
    const buttons = screen.queryAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
});
