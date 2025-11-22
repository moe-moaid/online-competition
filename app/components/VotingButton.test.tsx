import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import VotingButton from './VotingButton';
import { VoteProvider } from '@/lib/context/voteContext';
import PaymentForm from './PaymentForm';

describe('make sure voting button opens voting dialog', () => {
  beforeAll(() => {
    render(
      <VoteProvider>
        <PaymentForm />
        <VotingButton currentVideoId={7} />
      </VoteProvider>,
    );
  });

  it('tests dom change when the button is clicked', async () => {
    const votingButton = screen.queryByTestId('vote-button');
    if (votingButton) fireEvent.click(votingButton);
    await waitFor(() => {
      expect(screen.getByTestId('payment-dialog')).toBeInTheDocument();
    });
  });
});
