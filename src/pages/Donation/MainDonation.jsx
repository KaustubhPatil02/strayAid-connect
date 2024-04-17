import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Progress from '../Donation/Progress';
import QuickDonationButtons from '../Donation/QuickDonationButton';
// import DonationButton from './components/DonationButton';
// import DonationForm from './components/DonationForm';
import PaymentForm from '../Donation/PaymentForm';
import { database } from '../../pages/firebase';
// import AdminPage from './AdminPage';
import DonationPage from '../Donation/DonationPage';
import { resetDonationProgress, setAdminStatus } from '../../pages/actions';
import AccidentForm from '../../pages/AccidentForm'
import './Donation.css'


const stripePromise = loadStripe('pk_test_51OqBBySAiODbXNxVcI1DDQEMzE9s3nSaVB5y53qsPL8O9zwiii9ygmHJqSW8yfSh5aQ27oly2Hy5A8f5bWgYNoxL009intw30n');

const MainDonation = () => {
  const [donationProgress, setDonationProgress] = useState(0);
  const [targetAmount] = useState(100);
  const isAdmin = useSelector((state) => state.isAdmin);
  const dispatch = useDispatch();

  useEffect(() => {
    const donationProgressRef = database.ref('donationProgress');
    donationProgressRef.on('value', (snapshot) => {
      const progress = snapshot.val();
      setDonationProgress(progress || 0);
    });

    return () => {
      donationProgressRef.off('value');
    };
  }, []);

  const handleDonation = (amount) => {
    database.ref('donationProgress').set(donationProgress + amount);
  };

  const handleResetLimit = () => {
    if (isAdmin) {
      database.ref('donationProgress').set(0);
      dispatch(resetDonationProgress());
    } else {
      alert('You do not have permission to reset the limit.');
    }
  };
  const [accidents, setAccidents] = useState([]);

  useEffect(() => {
    // Fetch accident details from Firebase Database
    const accidentsRef = database.ref('accidents');
    accidentsRef.on('value', (snapshot) => {
      const accidentsData = snapshot.val();
      if (accidentsData) {
        const accidentsArray = Object.values(accidentsData);
        setAccidents(accidentsArray);
      }
    });

    return () => {
      accidentsRef.off('value');
    };
  }, []);
  return (
    <section className="overflow-hidden">
      <header className="sticky top-0 z-30 w-full border-b bg-white pb-2 ">
        <div className="mx-auto flex max--7xl items-center justify-between px-4 py-2">
          <div className="inline-flex items-center space-x-2 ">
            <a href="/">
              <span className="font-bold">Go Back </span>
            </a>

          </div>


        </div>
      </header>
      <div>
        <center>
          <h1 className='text-4xl font-semibold'>Donation</h1>
        </center>
        <div className="flex flex-col items-center justify-center pl-[15rem]">
  {accidents.map((accident, index) => (
    <div className="flex flex-col items-center justify-center grid grid-row-2 md:grid-cols-3 gap-4" key={index}>
      <p className='text-center'>{accident.details}</p>
      {accident.imageUrl && 
        <img src={accident.imageUrl}
          className='grid grid-cols-2 md:grid-cols-3 gap-3 p-4 max-w-[500px] md:max-w-[500px] place-items-center' 
        />
      }
    </div>
  ))}
</div>
        <Progress current={donationProgress} target={targetAmount} />
        {/* <QuickDonationButtons onQuickDonate={handleDonation} /> */}
        <Elements stripe={stripePromise}>
          <PaymentForm onPaymentSuccess={() => console.log('Payment success!')} />
        </Elements>
        {/* <DonationButton openForm={() => alert('Open Donation Form')} /> */}
        {/* <DonationForm onDonate={handleDonation} /> */}

        {/* <AdminPage /> */}
        {/* <DonationPage />
        <h2>Accident Details</h2>

        <AccidentForm />
        {isAdmin && <button onClick={handleResetLimit}>Reset Donation Limit (Admin Only)</button>} */}

      </div>
      <hr className="mt-6" />
      <footer className='px-4 py-10 sticky'>
        <p className="text-xs font-semibold text-gray-900 md:text-base text-center ">© 2023-StrayAidConnect </p>

      </footer>
    </section>
  );
};

export default MainDonation;
