import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../navigation/Navbar';
import Footer from '../footer/Footer';
const LandingPageLayout = () => {
  return (
    <>
      <Navbar className="" />
      <div className="h-full bg-gray-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LandingPageLayout;
