import React, { PropsWithChildren } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js";
import { useVoteContext } from '@/lib/context/vote context';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

function StripeWrapper( {children}: PropsWithChildren ) {
  const { clientSecret, isVoteOpen } = useVoteContext();
  if (!clientSecret && isVoteOpen) return null;
  return (
    <Elements stripe={stripePromise} options={{clientSecret}}>
        {children}
    </Elements>
  )
}

export default StripeWrapper
