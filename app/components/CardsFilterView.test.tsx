import { screen, render, waitFor } from "@testing-library/react";
import CArdsFilterView from "./CardsFilterView";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { VoteProvider } from "@/lib/context/vote context";

describe("Test card display view component", () => {
  const setDisplayVid = jest.fn();
  it("filters shouldn't render", async () => {
    const queryClient = new QueryClient();
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
    const queryClient = new QueryClient();
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

});
