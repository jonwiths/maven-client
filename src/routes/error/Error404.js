import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/logos/logo-circle.png';

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen pt-10">
      <div className="container mx-auto p-4 ">
        <div className="flex flex-col items-center text-center">
          <h1 className="my-6 ">404</h1>
          <h4 className="mb-4 ">File Not Found</h4>
          <p>
            Sorry fam, but the route that you are trying to reach isn't
            available on our website.
          </p>
          <p>But don't worry. We got you! We have plenty of place for you :)</p>

          <div className="flex gap-3 my-10  items-center md:flex-row flex-col">
            <button
              onClick={() => navigate(-1)}
              className="py-3 px-6 bg-gray-600 hover:bg-gray-700 rounded-3xl text-white font-medium"
            >
              Back One Page
            </button>
            <button
              onClick={() => navigate('/')}
              className="py-3 px-6 bg-gray-600 hover:bg-gray-700 rounded-3xl text-white font-medium"
            >
              Go to Landing Page
            </button>
          </div>

          <div className="">
            <img src={logo} alt="" className="w-20 h-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404;
