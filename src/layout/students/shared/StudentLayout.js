import React from 'react';
import { Outlet } from 'react-router-dom';

import SLeftbar from '../leftbar/SLeftbar';
import SNavbar from '../navbar/SNavbar';

const StudentLayout = () => {
  return (
    <>
      <SNavbar />
      <div className=" h-screen overflow-scroll w-full bg-gray-100 flex flex-col md:flex-row  ">
        <SLeftbar />
        <div className="w-full max-w-[1000px] max-h-[91vh]  mx-auto md:p-4 p-0 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default StudentLayout;
