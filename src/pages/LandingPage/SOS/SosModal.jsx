import { ArrowLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Mock data for hospitals
const hospitals = [
  { id: 1, name: 'Hospital 1', latitude: 19.42744733443158, longitude: 72.82585851564259 },
  { id: 2, name: 'Hospital 3', latitude: 19.42744733443158, longitude: 72.82585851564259 },
  { id: 3, name: 'Hospital 2', latitude: 27.656761, longitude: 77.269005 },
  { id: 4, name: 'Hospital 2', latitude: 34.052235, longitude: -118.243683 },
  // more hospitals...
];

// Determine if a hospital is nearby
const isNearby = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km

  return distance <= 10; // Change this to the maximum distance you want
};

const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};


export function SosModal() {
  const navigate = useNavigate();
  const [nearbyHospitals, setNearbyHospitals] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Fetch nearby hospitals using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });

          // Filter the hospitals based on the current location
          const nearbyHospitals = hospitals.filter((hospital) => {
            // Determine if a hospital is nearby
            return isNearby(latitude, longitude, hospital.latitude, hospital.longitude);
          });

          setNearbyHospitals(nearbyHospitals);
        },
        (error) => {
          console.error('Error getting current position:', error);
        }
      );
    }
  }, []);

  const handleClick = () => {
    navigate('/');
  };

  // Rest of your component...

  return (
    // <div className="py-10 pl-10 ">
    //   <div className="text-center">
    //     <p className="text-base font-semibold text-black">SOS</p>
    //     <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
    <div className="py-10  flex flex-col items-center justify-center bg-black  text-white">
  <div className="text-center">
    <p className="font-semibold text-white text-4xl">SOS</p>
    <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
        Nearby Emergency Service
        </h1>
        <div className='mt-5'>
        {currentLocation ? (
  <p className='text-blue-400'>
    Current Location: {currentLocation.latitude}, {currentLocation.longitude}
  </p>
) : (
  <p className="mt-4 text-base leading-7 text-gray-600">
    Sorry, we couldn't find your current location. Please turn on your location services and try again. 
  </p>
  )}
        </div>
        
      </div>
      <div className="mt-8">
  <h2 className="text-xl font-semibold text-white">Nearby Hospitals</h2>
  {/* {currentLocation && (
    <p>
      Current Location: {currentLocation.latitude}, {currentLocation.longitude}
    </p>
  )} */}
  {/* <ul>
    {nearbyHospitals.map((hospital) => (
      <li key={hospital.id}>{hospital.name}</li>
    ))}
  </ul> */}
  <ul className='text-yellow-500'>
  {nearbyHospitals.map((hospital) => (
    <li key={hospital.id}>
      {hospital.name}
      <a 
        href={`https://www.google.com/maps/search/?api=1&query=${hospital.latitude},${hospital.longitude}`} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        View on Google Maps
      </a>
    </li>
  ))}
</ul>
</div>
<div className="mt-4 flex items-center justify-center gap-x-3">
          <button
            type="button"
            onClick={handleClick}
            className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <ArrowLeft size={16} className="mr-2" />
            Go back
          </button>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Contact us
          </button>
        </div>
    </div>
    
    );
}
//  import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { ArrowLeft } from 'lucide-react';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// // Mock data for hospitals
// const hospitals = [
//     { id: 1, name: 'Hospital 1', latitude: 19.42744733443158, longitude: 72.82585851564259 },
//     { id: 2, name: 'Hospital 2', latitude: 34.052235, longitude: -118.243683 },
//     { id: 3, name: 'Hospital 2', latitude: 27.656761, longitude: 77.269005 },
//     { id: 4, name: 'Hospital 2', latitude: 34.052235, longitude: -118.243683 },
//     // more hospitals...
// ];

// // Determine if a hospital is nearby
// const isNearby = (lat1, lon1, lat2, lon2) => {
//     const R = 6371; // Radius of the earth in km
//     const dLat = deg2rad(lat2 - lat1);
//     const dLon = deg2rad(lon2 - lon1);
//     const a =
//         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//         Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
//         Math.sin(dLon / 2) * Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c; // Distance in km

//     return distance <= 10; // Change this to the maximum distance you want
// };

// const deg2rad = (deg) => {
//     return deg * (Math.PI / 180);
// };

// export function SosModal() {
//     const navigate = useNavigate();
//     const [nearbyHospitals, setNearbyHospitals] = useState([]);
//     const [currentLocation, setCurrentLocation] = useState(null);

//     useEffect(() => {
//         // Fetch nearby hospitals using Geolocation API
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const { latitude, longitude } = position.coords;
//                     setCurrentLocation({ latitude, longitude });

//                     // Filter the hospitals based on the current location
//                     const nearbyHospitals = hospitals.filter((hospital) => {
//                         // Determine if a hospital is nearby
//                         return isNearby(latitude, longitude, hospital.latitude, hospital.longitude);
//                     });

//                     setNearbyHospitals(nearbyHospitals);
//                 },
//                 (error) => {
//                     console.error('Error getting current position:', error);
//                 }
//             );
//         }
//     }, []);

//     const handleClick = () => {
//         navigate('/');
//     };

//     return (
//         <div className="py-10">
//             <div className="text-center">
//                 <p className="text-base font-semibold text-black">SOS</p>
//                 <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
//                     Nearby Emergency Service
//                 </h1>
//                 <p className="mt-4 text-base leading-7 text-gray-600">
//                     Sorry, we couldn&apos;t find the page you&apos;re looking for.
//                 </p>
//                 {currentLocation && (
//                     <p>
//                         Current Location: {currentLocation.latitude}, {currentLocation.longitude}
//                     </p>
//                 )}
//             </div>
//             {/* <h2 className="text-xl font-semibold text-black items-center justify-center">Nearby Hospitals</h2> */}
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', gap:5 }}>
//                 <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//                     <GoogleMap
//                         mapContainerStyle={{ width: '900px', height: '400px' }}
//                         center={currentLocation}
//                         zoom={30}
//                     >
//                         {nearbyHospitals.map((hospital) => (
//                             <Marker key={hospital.id} position={{ lat: hospital.latitude, lng: hospital.longitude }} />
//                         ))}
//                     </GoogleMap>
//                 </LoadScript>
//             </div>
//             <div className="mt-4 flex items-center justify-center gap-x-3">
//                 <button
//                     type="button"
//                     onClick={handleClick}
//                     className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                 >
//                     <ArrowLeft size={16} className="mr-2" />
//                     Go back
//                 </button>
//                 <button
//                     type="button"
//                     className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                 >
//                     Contact us
//                 </button>
//             </div>
//         </div>
//     );
// } 


//  modal
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Modal from 'react-modal';
// import { ArrowLeft } from 'lucide-react';

// // Mock data for hospitals
// const hospitals = [
//   { id: 1, name: 'VVMC', latitude: 19.42744733443158, longitude: 72.82585851564259 },
//   { id: 2, name: 'Hospital 2', latitude: 34.052235, longitude: -118.243683 },
//   { id: 3, name: 'Hospital 2', latitude: 27.656761, longitude: 77.269005 },
//   { id: 4, name: 'Hospital 2', latitude: 34.052235, longitude: -118.243683 },
//   // more hospitals...
// ];

// // Determine if a hospital is nearby
// const isNearby = (lat1, lon1, lat2, lon2) => {
//   const R = 6371; // Radius of the earth in km
//   const dLat = deg2rad(lat2 - lat1);
//   const dLon = deg2rad(lon2 - lon1);
//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
//     Math.sin(dLon / 2) * Math.sin(dLon / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   const distance = R * c; // Distance in km

//   return distance <= 10; // Change this to the maximum distance you want
// };

// const deg2rad = (deg) => {
//   return deg * (Math.PI / 180);
// };

// Modal.setAppElement('#root'); // replace '#root' with the id of your app's root element

// export function SosModal() {
//   const navigate = useNavigate();
//   const [nearbyHospitals, setNearbyHospitals] = useState([]);
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   useEffect(() => {
//     // Fetch nearby hospitals using Geolocation API
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setCurrentLocation({ latitude, longitude });

//           // Filter the hospitals based on the current location
//           const nearbyHospitals = hospitals.filter((hospital) => {
//             // Determine if a hospital is nearby
//             return isNearby(latitude, longitude, hospital.latitude, hospital.longitude);
//           });

//           setNearbyHospitals(nearbyHospitals);
//         },
//         (error) => {
//           console.error('Error getting current position:', error);
//         }
//       );
//     }
//   }, []);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={openModal}>Open SOS Modal</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="SOS Modal"
//       >
//         {/* Your existing modal content here */}
//         <button onClick={closeModal}>Close</button>
//       </Modal>
//     </div>
//   );
// }