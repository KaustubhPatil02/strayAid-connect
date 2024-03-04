import { ChevronUp, ChevronDown } from 'lucide-react'
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { database } from '../../firebase/firebase'
export const Donation = () => {
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
    // <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <h1>hellp</h1>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2>Donation Page</h2>
          <p>Donation Progress: {donationProgress}</p>
          <p>Donation Limit: {donationLimit}</p>
        </div>
      </div>
    // </section>
  )
}
