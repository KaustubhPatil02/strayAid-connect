// DonationPage.js

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { database } from '../../pages/firebase'; // Import Firebase configuration

const DonationPage = () => {
  const [donationProgress, setDonationProgress] = useState(0);
  const donationLimit = useSelector((state) => state.donationLimit);

  useEffect(() => {
    // Listen for changes in donation progress in Firebase Database
    const donationProgressRef = database.ref('donationProgress');
    donationProgressRef.on('value', (snapshot) => {
      const progress = snapshot.val();
      setDonationProgress(progress || 0);
    });

    return () => {
      donationProgressRef.off('value');
    };
  }, []);

  return (
    <div>
      {/* <h2>Donation Page</h2> */}
      {/* <p>Donation Progress: {donationProgress}</p> */}
      {/* <p>Donation Limit: ${donationLimit}</p> */}
      {/* Your donation components and logic here */}
    </div>
  );
};

export default DonationPage;
