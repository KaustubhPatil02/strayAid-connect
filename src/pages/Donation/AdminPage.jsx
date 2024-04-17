import React, { useEffect, useState } from 'react'
import DonationPage from './DonationPage'
import AccidentForm from '../AccidentForm'
import { useDispatch, useSelector } from 'react-redux';
import { database } from '../firebase';
import { resetDonationProgress, setAdminStatus } from '../actions';
import { useNavigate } from 'react-router-dom';

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
      <DonationPage />
      <h2 className="text-2xl font-bold mb-4">Accident Details</h2>
      <AccidentForm />
      {isAdmin && <button className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleResetLimit}>Reset Donation Limit (Admin Only)</button>}
    </div>
  )
}

export default AdminPage