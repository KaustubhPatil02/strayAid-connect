// AccidentForm.js

import React, { useState } from 'react';
import { database, storage } from './firebase'; // Make sure to import your Firebase instance

const AccidentForm = () => {
  const [accidentDetails, setAccidentDetails] = useState('');
  const [image, setImage] = useState(null);

  const handleDetailsChange = (e) => {
    setAccidentDetails(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload image to Firebase Storage
    const imageRef = storage.ref(`images/${image.name}`);
    await imageRef.put(image);

    // Get image URL from Firebase Storage
    const imageUrl = await imageRef.getDownloadURL();

    // Save accident details and image URL to Firebase Database
    database.ref('accidents').push({
      details: accidentDetails,
      imageUrl: imageUrl,
    });

    alert('Accident details submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Accident Details:
        <textarea value={accidentDetails} onChange={handleDetailsChange} />
      </label>
      <br />
      <label>
        Upload Image:
        <input type="file" onChange={handleImageChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AccidentForm;
