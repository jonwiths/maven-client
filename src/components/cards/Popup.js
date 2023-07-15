import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logos/maven-logo-wtext.png';

const Popup = ({ open, close, navigate }) => {
  return open ? (
    <div className="relative z-40">
      <section className="fixed top-0 p-4 left-0 right-0 w-full h-full  flex items-center justify-center ">
        <div className="relative w-full h-full max-h-[600px] md:max-w-[500px]  max-w-full bg-blue-100 flex items-center justify-center  flex-col opacity-100 p-4 rounded-2xl shadow-2xl border-blue-700 border">
          <div className="absolute top-1 right-1 rounded-2xl ">
            <button
              onClick={close}
              className="p-2 hover:font-medium hover:text-red-600 text-red-600"
            >
              Close
            </button>
          </div>
          <img src={logo} alt="" className=" w-28 h-auto mt-5" />
          <div className="text-center h-full overflow-y-auto">
            <h2 className="mt-4 ">Welcome to maven-edu</h2>
            <h4 className="my-1 ">We have special offer for you!</h4>

            <h1 className="mt-1 ">ENROLL NOW</h1>
            <p className="">and get</p>
            <h1 className="text-green-600 mt-1">2 YEARS</h1>
            <h1 className="text-green-600 mb-2">FREE ACCESS</h1>
            <h2>TO ALL MENTORS AND ALL CONTENTS</h2>
            <p className="my-4">
              As our community is starting to grow we have this special offer
              for everyone, as the Maven-edu org and our passionate mentors
              agreed to do this, for a limited period of time.
            </p>
            <button onClick={navigate} className="rounded-btn-dark px-8 py-4">
              Enroll Now!
            </button>
          </div>
        </div>
      </section>
    </div>
  ) : (
    ''
  );
};

export default Popup;
