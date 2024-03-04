// StripeProvider.js

import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OqBBySAiODbXNxVcI1DDQEMzE9s3nSaVB5y53qsPL8O9zwiii9ygmHJqSW8yfSh5aQ27oly2Hy5A8f5bWgYNoxL009intw30n');

const StripeProvider = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
