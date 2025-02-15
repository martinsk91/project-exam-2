import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const VenuesList = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch('https://v2.api.noroff.dev/holidaze/venues');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setVenues(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
  
    };

    fetchVenues();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600">
        <div className="text-xl font-semibold">Error: {error}</div>
      </div>
    );
  }

  console.log(venues.data)
  return (
    <div className="m-8 space-y-6">
      <h2 className="text-3xl font-bold text-center mb-4">Venues</h2>
      <ul className="space-y-4">
        {venues.data.map((venue) => (
          <li
            key={venue.id}
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all flex flex-col md:flex-row w-full"
          >
            <img
              src={venue?.media?.[0]?.url || 'https://via.placeholder.com/150'}
              alt="description"
              className="rounded-md w-[300px] h-[300px] fit-image"
            />
            <div className='md:flex md:flex-col md:justify-between w-full'>
            <div className="mt-4 md:mt-0 md:ml-4">
              <h3 className="text-xl font-semibold text-gray-800 break-words">{venue.name}</h3>
            
            </div>
            <div className="mt-4 md:mt-0 md:ml-4">
              <p>price: {venue.price}</p>
              <p>Rating: {venue.rating}</p>
            </div>
            <div className='flex justify-end'>
            <Link
                to={`/venue/${venue.id}`}
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all inline-block"
              >
                View Details
              </Link>
              </div>
            </div>
        
          </li>
        ))}
      </ul>

    </div>
  );
  
};

export default VenuesList;


