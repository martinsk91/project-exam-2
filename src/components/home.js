import React from "react";
import backgroundImage from '../images/cabin.jpg';

function Home() {
  return (
    <>
    <div className="relative w-full max-w-[1600px] mx-auto h-[300px] md:h-[500px] p-5">
      <img 
        src={backgroundImage} 
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="p-6 max-w-lg mx-auto relative z-10 text-center">
        <h1 className="text-xl font-bold text-white mb-4 p-4 bg-black bg-opacity-60">
          Welcome to Holidaze!
        </h1>
      </div>
    </div>
    <div className="relative w-full max-w-[1440px] mx-auto h-[300px] md:h-[500px] m-20 text-lg">
        <p className="p-2">Explore, book, and experience the perfect getaway with Holidaze! Whether you're planning a relaxing vacation or an adventurous retreat, our platform connects you with the best venues for your needs.</p>
        <ul className="list-disc list-inside p-2">
            <li>Search and Discover: Browse through a wide range of stunning venues tailored to your travel preferences.</li>
            <li>Easy Bookings: Find your perfect place, check availability, and make your booking in just a few clicks.</li>
            <li>Manage Your Trips: Keep track of all your bookings and upcoming stays, and access them anytime.</li>
        </ul>
        <p className="p-2">Sign up now to start your journey with Holidaze – where great holidays begin!</p>
    </div>
    
    
    </>
  );
}

export default Home;