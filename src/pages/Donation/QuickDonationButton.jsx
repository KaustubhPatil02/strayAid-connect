// components/QuickDonationButtons.js

import React from 'react';
import './Donation.css'
// import { Plus, Minus } from 'lucide-react'
// import '../App.css'
const QuickDonationButtons = ({ onQuickDonate }) => {
  return (
    <div className='relative flex items-center space-x-8 justify-center py-4'>      
      <button
        type="button"
        // onClick={onQuickDonate}
        onClick={() => onQuickDonate(10)}
        className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Donate $10
      </button>
      <button
        type="button"
        // onClick={onQuickDonate(10)}
        onClick={() => onQuickDonate(20)}
        className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Donate $20
      </button>
      {/* <button className="donation-button" onClick={() => onQuickDonate(10)}>Donate $10</button>
      <button className="donation-button" onClick={() => onQuickDonate(20)}>Donate $20</button> */}
      
    </div>
  );
};

export default QuickDonationButtons;


