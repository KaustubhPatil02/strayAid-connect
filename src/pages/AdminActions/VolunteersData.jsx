// Actions.js
import { useEffect, useState } from 'react';
// import { get, ref } from 'firebase/database';
// import {database} from '../../firebase/firebase'; // Import db from firebase.js

export function VolunteersData() {
    const [peopleData, setPeopleData] = useState([]);
    const databaseURL = 'https://strayaid-connect-default-rtdb.firebaseio.com/landingPage-VolunteersData.json';
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(databaseURL);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setPeopleData(data ? Object.values(data) : []);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Volunteers Data</h2>
            {/* <p className="mt-1 text-sm text-gray-700">
              This is a list of all employees. You can add new employees, edit or delete existing
              ones.
            </p> */}
          </div>
          <div>
            {/* <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new employee
            </button> */}
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
  <tr className="divide-x divide-gray-200">
    <th
      scope="col"
      className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
    >
      <span>First Name</span>
    </th>
    <th
      scope="col"
      className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
    >
      <span>Last Name</span>
    </th>
    <th
      scope="col"
      className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
    >
      Email
    </th>
    <th
      scope="col"
      className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
    >
      Phone Number
    </th>
    <th
      scope="col"
      className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
    >
      Location
    </th>
  </tr>
</thead>
<tbody className="divide-y divide-gray-200 bg-white">
  {peopleData.map((person, index) => (
    <tr key={index} className="divide-x divide-gray-200">
      <td className="whitespace-nowrap px-4 py-4">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{person.firstName}</div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-4">
        <div className="text-sm text-gray-900">{person.lastName}</div>
      </td>
      <td className="whitespace-nowrap px-12 py-4">
        <div className="text-sm text-gray-900">{person.email}</div>
      </td>
      <td className="whitespace-nowrap px-4 py-4">
        <div className="text-sm text-gray-900">{person.phoneNum}</div>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
        {person.loc}
      </td>
    </tr>
  ))}
</tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full border-gray-300">
          <div className="mt-2 flex items-center justify-end">
            <div className="space-x-2">
              {/* <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}