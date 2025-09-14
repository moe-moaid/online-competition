import { screen, render, waitFor } from "@testing-library/react";
import CArdsFilterView from "./CardsFilterView";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { VoteProvider, VoteContext } from "@/lib/context/vote context";

describe("Test card display view component", () => {
  const setDisplayVid = jest.fn();
  const queryClient = new QueryClient();
  it("filters shouldn't render", async () => {
    render(
      <VoteProvider>
        <QueryClientProvider client={queryClient}>
          <CArdsFilterView showFilters={false} setDisplayVid={setDisplayVid} />
        </QueryClientProvider>
      </VoteProvider>
    );
    // waitFor keeps running queryByTestId untill it's true, or it timesout,
    // currently it is expected to be Null which is the immidiat case that's why it returns true
    await waitFor(() => {
      // queryBy looks into the DOM immedietly, it doesn't wait, it is not async
      expect(screen.queryByTestId("filters-section")).toBeNull();
    });
  });

  it("filters shouldn render", async () => {
    render(
      <VoteProvider>
        <QueryClientProvider client={queryClient}>
          <CArdsFilterView showFilters={true} setDisplayVid={setDisplayVid} />
        </QueryClientProvider>
      </VoteProvider>
    );
    // use findBy if you expect something to eventually show-up, it waits, it's async
    expect(await screen.findByTestId("filters-section")).toBeInTheDocument();
  });

  it("tests for change vote is open", () => {
    const mockSetterFn = jest.fn();
    const mockVoteContextValue = {
      isVoteOpen: true,
      currentVoteVideoId: 177,
      isChangeVoteOpen: true,
      setIsChangeVoteOpen: mockSetterFn,
      setIsVoteOpen: mockSetterFn,
    };
    render(
      <VoteContext.Provider value={mockVoteContextValue}>
        <QueryClientProvider client={queryClient}>
          <CArdsFilterView showFilters={true} setDisplayVid={setDisplayVid} />
        </QueryClientProvider>
      </VoteContext.Provider>
    );
    expect(screen.getByTestId("vote-preview")).toBeInTheDocument();
  });
});
