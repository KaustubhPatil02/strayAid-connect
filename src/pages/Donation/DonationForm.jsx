// components/DonationForm.js

import React from 'react';
import PaymentForm from './PaymentForm';

const DonationForm = ({ onDonate }) => {
  const handlePaymentSuccess = (token) => {
    // Handle the token, e.g., send it to your server for processing
    console.log('Payment success! Token:', token);

    // For simplicity, assume the payment was successful
    onDonate( /* Amount */ );
  };

  return (
    <div>
      <h2>Donation Form</h2>
      <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
    </div>
  );
};

export default DonationForm;
