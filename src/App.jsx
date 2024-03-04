import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPageOne from "./pages/LandingPageOne";
import { VolunteeringForm } from "./pages/VolunteeringForm";
import Reports from "./pages/Reports";
// import Adopt from "./pages/Adopt";
import { Adopt } from "./pages/Adoption/Adopt";
import { List1 } from "./pages/Adoption/AdoptList/List1";
import { List2 } from "./pages/Adoption/AdoptList/List2";
// import { Donation } from "./pages/Donation/Donation";


// my imports
import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Progress from './pages/Donation/Progress';
import QuickDonationButtons from './pages/Donation/QuickDonationButton';
// import DonationButton from './components/DonationButton';
// import DonationForm from './components/DonationForm';
import PaymentForm from './pages/Donation/PaymentForm';
import { database } from './pages/firebase';
// import AdminPage from './AdminPage';
import DonationPage from './pages/DonationPage';
import { resetDonationProgress, setAdminStatus } from './pages/actions';
import AccidentForm from './pages/AccidentForm';






// function App() {
//   return (
//     <Donation/>
//     // <BrowserRouter>
//     //   <Routes>
//     //     <Route path="/">
//     //       <Route index element={<LandingPageOne />} />
//     //       <Route path="/VolunteeringForm" element={<VolunteeringForm />} />
//     //       <Route path="/Reports" element={<Reports />} />
//     //       <Route path="/Adopt" element={<Adopt />} />
//     //       <Route path="/List1" element={<List1 />} />
//     //       <Route path="/List2" element={<List2 />} />
//     //       {/* <Reports/> */}
//     //     </Route>
//     //   </Routes>
//     // </BrowserRouter>
//   );
// }

// export default App;



const stripePromise = loadStripe('pk_test_51OqBBySAiODbXNxVcI1DDQEMzE9s3nSaVB5y53qsPL8O9zwiii9ygmHJqSW8yfSh5aQ27oly2Hy5A8f5bWgYNoxL009intw30n');

const App = () => {
  const [donationProgress, setDonationProgress] = useState(0);
  const [targetAmount] = useState(1000);
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
    
    <div>
      <center>
      <h1>Donation</h1>
      </center>
      {accidents.map((accident, index) => (
        <div className="image-container" key={index}>
          <p style={{marginLeft:'10px'}}>{accident.details}</p>
          <img src={accident.imageUrl} alt={`Accident ${index}`} style={{ maxWidth: '300px' }} />
        </div>
      ))}
      <Progress current={donationProgress} target={targetAmount} />
      <QuickDonationButtons onQuickDonate={handleDonation} />
      <Elements stripe={stripePromise}>
        <PaymentForm onPaymentSuccess={() => console.log('Payment success!')} />
      </Elements>
      {/* <DonationButton openForm={() => alert('Open Donation Form')} /> */}
      {/* <DonationForm onDonate={handleDonation} /> */}
      
      {/* <AdminPage /> */}
      {/* <DonationPage /> */}
      <h2>Accident Details</h2>
   
      <AccidentForm />
      {isAdmin && <button onClick={handleResetLimit}>Reset Donation Limit (Admin Only)</button>}
      
    </div>
  );
};

export default App;
