// components/QuickDonationButtons.js

import React from 'react';
// import '../App.css'
const QuickDonationButtons = ({ onQuickDonate }) => {
  return (
    <div>
      <button className="donation-button" onClick={() => onQuickDonate(10)}>Donate $10</button>
      <button className="donation-button" onClick={() => onQuickDonate(20)}>Donate $20</button>
      {/* Add more buttons as needed */}
    </div>
  );
};

export default QuickDonationButtons;
