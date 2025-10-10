import { useVoteContext } from '@/lib/context/vote context';
import { PropsWithChildren } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

function StripeWrapper({ children }: PropsWithChildren) {
  const { clientSecret } = useVoteContext();
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  );
  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      {children}
    </Elements>
  );
}

export default StripeWrapper;
