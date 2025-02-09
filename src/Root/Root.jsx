import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router-dom';

import { useState, useEffect } from 'react';
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
        <div className='bg-[#252734]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;