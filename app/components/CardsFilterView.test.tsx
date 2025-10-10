import { screen, render, waitFor, RenderOptions } from '@testing-library/react';
import CArdsFilterView from './CardsFilterView';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { VoteContext, ContextType } from '@/lib/context/vote context';
import { ReactElement } from 'react';

describe('Test card display view component', () => {
  const setDisplayVid = jest.fn();
  const queryClient = new QueryClient();
  // Reset QueryClient between tests
  afterEach(() => {
    queryClient.clear();
  });

  it("filters shouldn't render", async () => {
    renderWithProviders(
      <CArdsFilterView showFilters={false} setDisplayVid={setDisplayVid} />,
    );
    // waitFor keeps running queryByTestId untill it's true, or it timesout,
    // currently it is expected to be Null which is the immidiat case that's why it returns true
    await waitFor(() => {
      // queryBy looks into the DOM immedietly, it doesn't wait, it is not async
      expect(screen.queryByText(/Filters/i)).not.toBeInTheDocument();
    });
  });

  it('filters shouldn render', () => {
    renderWithProviders(
      <CArdsFilterView showFilters={true} setDisplayVid={setDisplayVid} />,
    );
    // use findBy if you expect something to eventually show-up, it waits, it's async
    expect(screen.getByTestId('filters-section')).toBeInTheDocument();
  });

  it('tests for change vote is open', () => {
    const mockSetterFn = jest.fn();
    const mockVoteContextValue = {
      isVoteOpen: true,
      currentVoteVideoId: 177,
      isChangeVoteOpen: true,
      setIsChangeVoteOpen: mockSetterFn,
      setIsVoteOpen: mockSetterFn,
      setClientSecret: mockSetterFn,
      clientSecret: 'test',
    };
    render(
      <VoteContext.Provider value={mockVoteContextValue}>
        <QueryClientProvider client={queryClient}>
          <CArdsFilterView showFilters={true} setDisplayVid={setDisplayVid} />
        </QueryClientProvider>
      </VoteContext.Provider>,
    );
    expect(screen.getByTestId('vote-preview')).toBeInTheDocument();
  });
});

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  voteContextValue?: Partial<ContextType>;
}

function renderWithProviders(
  ui: ReactElement,
  { voteContextValue, ...renderOptions }: CustomRenderOptions = {},
) {
  const queryClient = new QueryClient();
  const defaultVoteContext: ContextType = {
    setCurrentVoteVideoId: jest.fn(),
    isVoteOpen: true,
    currentVoteVideoId: 177,
    isChangeVoteOpen: true,
    setIsChangeVoteOpen: jest.fn(),
    setIsVoteOpen: jest.fn(),
  };

  return render(
    <VoteContext.Provider
      value={{ ...defaultVoteContext, ...voteContextValue }}
    >
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    </VoteContext.Provider>,
    renderOptions,
  );
}
