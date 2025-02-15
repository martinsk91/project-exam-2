import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VenueDetailPage = () => {
  const { id } = useParams(); 
  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); 

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/holidaze/venues/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setVenue(data);
        setLoading(false);

      
        if (data.media && data.media.length > 0) {
          setSelectedImage(data.media[0].url);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVenue();
  }, [id]);

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


  if (!venue) {
    return null; 
  }


  const firstImage = venue.data.media?.[0]?.url || 'https://via.placeholder.com/150'; 

  return (
    <div className="w-full flex justify-center">
      <div className="m-8 max-w-[1600px] flex flex-col items-center w-full">
        <h2 className="text-3xl font-bold mb-4">{venue.data.name}</h2>


        <img
          src={selectedImage || firstImage}  
          alt="Venue"
          className="rounded-md w-full  md:w-[500px] h-auto mb-4"
        />

     
        <div className="flex space-x-2">
          {venue.data.media && venue.data.media.map((image, index) => (
            <button
              key={index}
              className="rounded-md w-[50px] h-[50px] mb-4"
              onClick={() => setSelectedImage(image.url)}  
            >
              <img
                src={image.url || 'https://via.placeholder.com/150'}
                alt={`${image.alt} ${index}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <p className="text-lg mb-4 md:w-[500px]">{venue.data.description}</p>
        <p className="font-semibold">Price: {venue.data.price}</p>
        <p className="font-semibold">Rating: {venue.data.rating}</p>
      </div>
    </div>
  );
};

export default VenueDetailPage;



