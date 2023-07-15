import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <section className=" bg-gray-800">
      <div className="container w-full mx-auto flex items-center justify-between md:gap-0 gap-4 sm:flex-row flex-col px-4 py-8">
        <div className="md:w-3/5 w-full md:mt-0 flex flex-col items-center">
          <h2 className="md:text-4xl text-2xl text-gray-100 text-center  md:pt-0">
            Be part of our growing community.
          </h2>
          <h2 className="md:text-4xl text-2xl text-gray-100 text-center  md:pt-0">
            Enroll now and be our student.
          </h2>
        </div>
        <Link to="/register" className="large-blue-btn">
          Enroll Now
        </Link>
      </div>
    </section>
  );
};

export default SignUp;
