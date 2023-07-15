import React from 'react';
import { Outlet } from 'react-router-dom';

import ANavbar from '../navbar/ANavbar';

const AdminLayout = () => {
  return (
    <>
      <ANavbar />

      <Outlet />
    </>
  );
};

export default AdminLayout;
