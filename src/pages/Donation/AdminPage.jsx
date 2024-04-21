import React, { useEffect, useState } from 'react'
import DonationPage from './DonationPage'
import AccidentForm from '../AccidentForm'
import { useDispatch, useSelector } from 'react-redux';
import { database } from '../firebase';
import { resetDonationProgress, setAdminStatus } from '../actions';
import { useNavigate, Link } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();
  const isAdmin = useSelector((state) => state.isAdmin);
  const dispatch = useDispatch();
  

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('isAdmin');
      navigate('/login');
    }
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
    <div className="flex flex-col items-center justify-center min-h-screen py-2 w-full">
     <div className="pr-10 pb-10 gap-[10rem]">
     <button className="self-end px-4 py-2 mt-4 bg-red-500 text-white rounded hover:bg-red-700 mr-4 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5" onClick={handleLogout}>Logout</button>
<Link to="/actions" className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5">
  Reports
</Link>
<Link to="/volunteers" className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5">
  Volunteers Data
</Link>
</div>
      <DonationPage />
      <h2 className="text-2xl font-bold mb-4">Accident Details</h2>
      <AccidentForm />
      {isAdmin && <button className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleResetLimit}>Reset Donation Limit (Admin Only)</button>}
      {/* <Link to="/actions">Actions</Link> */}


    </div>
  )
}

export default AdminPage