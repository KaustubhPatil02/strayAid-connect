// PaymentForm.js

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import '../App.css'
const PaymentForm = ({ onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonationChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { token } = await stripe.createToken(cardElement);

      // Handle the token and donation amount, e.g., send them to your server for processing
      onPaymentSuccess(token, donationAmount);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Donation Amount:
        <input className="donation-input"
          type="number"
          min="1"
          step="1"
          value={donationAmount}
          onChange={handleDonationChange}
          required
        />
      </label>
      <CardElement />
      <button className="donation-button" type="submit">Donate Now</button>
    </form>
  );
};

export default PaymentForm;
