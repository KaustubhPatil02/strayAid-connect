import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPageOne from "./pages/LandingPage/LandingPageOne";
import { VolunteeringForm } from "./pages/LandingPage/VolunteeringForm";
import Reports from "./pages/LandingPage/Reports";
import { Adopt } from "./pages/Adoption/Adopt";
import { List1 } from "./pages/Adoption/AdoptList/List1";
import { List2 } from "./pages/Adoption/AdoptList/List2";
import MainDonation from "./pages/Donation/MainDonation";
import { List3 } from "./pages/Adoption/AdoptList/List3";
import { List4 } from "./pages/Adoption/AdoptList/List4";
import { List5 } from "./pages/Adoption/AdoptList/List5";
import { List6 } from "./pages/Adoption/AdoptList/List6";
import { List7 } from "./pages/Adoption/AdoptList/List7";
import { List8 } from "./pages/Adoption/AdoptList/List8";
import { SosModal } from "./pages/LandingPage/SOS/SosModal";
import AdminPage from "./pages/Donation/AdminPage";
import { SignIn } from "./pages/othercomponents/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageOne />} index />
        <Route path="/login" element={<SignIn />} />
        <Route path="/VolunteeringForm" element={<VolunteeringForm />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/sos" element={<SosModal />} />
        <Route path="/Adopt" element={<Adopt />}>
          <Route path="List1" element={<List1 />} />
          <Route path="List2" element={<List2 />} />
          <Route path="List3" element={<List3 />} />
          <Route path="List4" element={<List4 />} />
          <Route path="List5" element={<List5 />} />
          <Route path="List6" element={<List6 />} />
          <Route path="List7" element={<List7 />} />
          <Route path="List8" element={<List8 />} />
        </Route>
        <Route path="/MainDonation" element={<MainDonation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// my imports
// import React, { useState, useEffect } from 'react';

// import { useSelector, useDispatch } from 'react-redux';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import Progress from './pages/Donation/Progress';
// import QuickDonationButtons from './pages/Donation/QuickDonationButton';
// // import DonationButton from './components/DonationButton';
// // import DonationForm from './components/DonationForm';
// import PaymentForm from './pages/Donation/PaymentForm';
// import { database } from './pages/firebase';
// // import AdminPage from './AdminPage';
// import DonationPage from './pages/DonationPage';
// import { resetDonationProgress, setAdminStatus } from './pages/actions';
// import AccidentForm from './pages/AccidentForm';






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



