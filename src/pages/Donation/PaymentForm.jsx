// PaymentForm.js

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import '../../App.css'
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
      <div className="flex justify-center items-center ">
  <div className="w-1/2">
    <CardElement className='border-b border-gray-700' />
  </div>
</div>
      {/* <CardElement className='border-b border-gray-700' /> */}
      <button className="donation-button rounded-full bg-black text-white mt-5 " type="submit">Donate Now</button>
    </form>
  );
};

export default PaymentForm;
