import React, { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router-dom';

import LoadingSpinner from '../Component/LoadingSpinner'; // Import the loading spinner

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {/* Inline CSS for the animation */}
      <style>
        {`
          @keyframes renboEffect {
            0% {
              background-color: #23144B;
            }
            50% {
              background-color: #252734;
            }
            100% {
              background-color: #23144B;
            }
          }

          .bg-animated {
            animation: renboEffect 5s infinite ease-in-out;
          }
        `}
      </style>
      
      <div className='bg-[#252734] bg-animated'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Root;
