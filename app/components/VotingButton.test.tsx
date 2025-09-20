import { useState } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import VotingButton from "./VotingButton";
import { VoteContext } from "@/lib/context/vote context";
import PaymentForm from "./PaymentForm";

describe("make sure voting button opens voting dialog", () => {
  beforeAll(() => {
    render(<VoteWrapper currentVideoId={7} />);
  });

  it("tests dom change when the button is clicked", async () => {
    const votingButton = screen.queryByTestId("vote-button");
    // const votingDialog = screen.queryByTestId('payment-dialog');
    if(votingButton)
    fireEvent.click(votingButton);
    await waitFor(() => {
      expect(screen.getByTestId("payment-dialog")).toBeInTheDocument();
   });
  });
});

const VoteWrapper = ({ currentVideoId }: { currentVideoId: number }) => {
  const [isVoteOpen, setIsVoteOpen] = useState<boolean>(false);
  const [currentVoteVideoId, setCurrentVoteVideoId] = useState<
    number | undefined
  >(undefined);
  const [isChangeVoteOpen, setIsChangeVoteOpen] = useState<boolean>(false);

  const voteContext = {
    isVoteOpen,
    currentVoteVideoId,
    setIsVoteOpen,
    setCurrentVoteVideoId,
    isChangeVoteOpen,
    setIsChangeVoteOpen,
  };

  return (
    <VoteContext.Provider value={voteContext}>
      <PaymentForm />
      <VotingButton currentVideoId={currentVideoId} />
    </VoteContext.Provider>
  );
};
