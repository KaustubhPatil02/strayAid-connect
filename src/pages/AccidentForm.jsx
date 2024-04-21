import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { database, storage } from './firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AccidentForm = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const accidentDetailsRef = useRef();
  const donationmoney = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const accidentsRef = database.ref('accidents');
    const handleValueChange = (snapshot) => {
      const accidents = snapshot.val();
      const allImages = [];
      for (let id in accidents) {
        allImages.push({ id, ...accidents[id] });
      }
      setUploadedImages(allImages);
    };

    accidentsRef.on('value', handleValueChange);

    return () => {
      accidentsRef.off('value', handleValueChange);
    };
  }, []);

  const handleImageChange = useCallback((e) => {
    if (e.target.files[0]) {
      imageRef.current = e.target.files[0];
    }
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const imageStorageRef = storage.ref(`images/${imageRef.current.name}`);
    await imageStorageRef.put(imageRef.current);

    try {
      const imageUrl = await imageStorageRef.getDownloadURL();

      database.ref('accidents').push({
        details: accidentDetailsRef.current.value,
        donationdetails: donationmoney.current.value,
        imageUrl: imageUrl,
      });

      toast.success('Accident details submitted successfully!');
    } catch (error) {
      toast.error('An error occurred while submitting the accident details.');
    }
  }, []);

  // const handleDelete = useCallback(async (id, imageUrl) => {
  //   const imageStorageRef = storage.refFromURL(imageUrl);
  //   await imageStorageRef.delete();
  
  //   // Delete the accident from the database
  //   database.ref('accidents').child(id).remove();
  // }, []);
  const handleDelete = useCallback(async (id, imageUrl) => {
    const imageStorageRef = storage.refFromURL(imageUrl);
    await imageStorageRef.delete();
  
    // Delete the accident from the database
    await database.ref('accidents').remove();
  
    // Update the state
    setUploadedImages(prevImages => prevImages.filter(image => image.id !== id));
  }, []);
  const isValidUrl = useMemo(() => (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
      <label className="mb-4">
  Accident Details:
  <input type='text' className='border-black outline-none border-b w-[10rem]' ref={accidentDetailsRef} />
</label>
<label className="mb-4">
  Required Donation:
  <input type='text' className='border-black outline-none border-b w-[10rem]' ref={donationmoney} />
</label>

        <br />
        <br />
        <label>
          Upload Image:
          <input type="file" onChange={handleImageChange} />
        </label>
        <br />
        <br />
        <div className='flex items-center justify-center'>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Upload
          </button>
        </div>
      </form>
      <br />
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className='flex items-center justify-center h-full'>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all uploaded accident images. You can delete existing ones.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-500 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-500">
                  <thead className="bg-green-500">
                    <tr>
                      <th scope="col" className="px-4 py-3.5 text-left text-sm font-bold text-gray-900">
                        <span>Image</span>
                      </th>
                      <th scope="col" className=" bg-red-600 px-4 py-3.5 text-left text-sm  text-black font-bold">
                        <span>Delete</span>
                      </th>
                        {/* <span>delete</span> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">

                    {uploadedImages.map((image, index) => (
                              // console.log(image, index),
                      
                      <tr key={index}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              {isValidUrl(image.imageUrl) && (
                                <img className="h-[2rem] w-[6rem] object-cover" src={image.imageUrl} alt={`Uploaded ${index}`} />
                              )}
                            </div>
                          </div>
                        </td>
                              {/* console.log(image, index) */}
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <button onClick={(e) => { e.preventDefault(); handleDelete(image.id, image.imageUrl); }} className="text-red-500 hover:text-red-700">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccidentForm;