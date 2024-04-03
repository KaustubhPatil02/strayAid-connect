import { ArrowLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Mock data for hospitals
// Updated data for hospitals
const hospitals = [
  { id: 1, name: 'Veterinary Polyclinic, Vasai. Asst Commissioner of Animal Husbandry Office', latitude: 19.359800890182438, longitude: 72.83842726619105 },
  { id: 2, name: 'Supreme Pet Clinic And Care Centre', latitude: 19.36381075113499, longitude: 72.85592658579988 },
  { id: 3, name: 'The Progressive Pet Clinic', latitude: 19.366478301434064, longitude: 72.81264995566688 },
  { id: 4, name: 'Four Paws Pet/Vet Clinic Vasai-Virar-Naigaon', latitude: 19.366964145397844, longitude: 72.81488155362017 },
  { id: 5, name: 'Urban Veterinary Care', latitude: 19.38560794140172, longitude: 72.82503374481 },
  { id: 6, name: 'Vasai Multispeciality Pet Clinic', latitude: 19.386157163663924, longitude: 72.82280185451641 },
  { id: 7, name: 'PAW Animal Welfare Foundation', latitude: 19.408920521628403, longitude: 72.82676303312368 },
  { id: 8, name: 'Animal Heart Veterinary Clinic, Spa and Pet Store', latitude: 19.413433143419937, longitude: 72.82676303312368 },
  { id: 9, name: 'ACEVET Poultry Vaccinator Mfg', latitude: 19.412958136458524, longitude: 72.85698148471124 },
  // mira-bhayandar
  { id: 10, name: "Dr. Vinayak's Pet Care Clinic", latitude: 19.301969670287722, longitude: 72.86607931703684 },
  { id: 11, name: 'Dr. Margaj Pet Clinic', latitude: 19.29305875569613, longitude: 72.87174414261057 },
  { id: 12, name: 'Dr. Dagli Pet Animal Clinic', latitude: 19.28463344479946, longitude: 72.87225912675363 },
  { id: 13, name: 'Zinnia Pet Care - Dr. Aziz D. Bate', latitude: 19.285443589687947, longitude: 72.87569235437408 },
  { id: 14, name: 'Royal Pet Clinic And Parlour.', latitude: 19.27880028329115, longitude: 72.87637899989818 },
  // thane 
  { id: 15, name: 'Hello Pet Clinic & Pet Shop', latitude: 19.27419088680429, longitude: 72.96993671420977 },
  { id: 16, name: 'Royal Pet Care Clinic', latitude: 19.268466655731345, longitude: 72.96297431935152 },
  { id: 17, name: 'Vet 4 Amazing Pets', latitude: 19.252989030118158, longitude: 72.97936963627578 },
  { id: 18, name: 'Petvets', latitude: 19.23748162333587, longitude: 72.97626160522637 },
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
    <div className="py-10  flex flex-col items-center justify-center bg-black  text-white border-b border-t">
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