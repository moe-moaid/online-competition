import { screen, render, waitFor } from "@testing-library/react";
import CArdsFilterView from "./CardsFilterView";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { VoteProvider } from "@/lib/context/vote context";

describe("Test card display view component", () => {
  const setDisplayVid = jest.fn();
  test("filters shouldn't render", async () => {
    const queryClient = new QueryClient();
    render(
      <VoteProvider>
        <QueryClientProvider client={queryClient}>
          <CArdsFilterView showFilters={false} setDisplayVid={setDisplayVid} />
        </QueryClientProvider>
      </VoteProvider>
    );
    await waitFor(() => {
      expect(screen.queryByTestId("filters-section")).toBeNull();
    });
  });

  test("filters shouldn render", async () => {
    const queryClient = new QueryClient();
    render(
      <VoteProvider>
        <QueryClientProvider client={queryClient}>
          <CArdsFilterView showFilters={true} setDisplayVid={setDisplayVid} />
        </QueryClientProvider>
      </VoteProvider>
    );
    const filters = await screen.findByTestId("filters-section");
    expect(filters).toBeInTheDocument();
  });
});
