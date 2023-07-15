import React from 'react';
import { FaLevelUpAlt, FaSignInAlt } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';

const HowDoesItWork = () => {
  return (
    <section className="bg-white py-8">
      <div className="custom-container">
        <div className="flex flex-col items-center justify-center">
          <h3>Mentoring process</h3>
          <h1 className="mt-4">How does it work?</h1>
          <p className="mt-4">
            Looking for new learning setup? We got it for you!
          </p>
          <div className="flex lg:flex-row flex-col gap-4 mt-10 justify-around w-full ">
            <div className="how-does-it-works">
              <div className=" bg-blue-50 shadow-xl text-gray-800 rounded-full w-24 h-24 flex items-center justify-center">
                <FaSignInAlt size={50} className="" />
              </div>
              <h3>Sign Up</h3>
              <p className="text-justify">
                Are you looking to join online Learning? Now it’s very simple,
                Now Sign up.
              </p>
            </div>
            <div className="how-does-it-works">
              <div className=" bg-blue-50 shadow-xl text-gray-800 rounded-full w-24 h-24 flex items-center justify-center">
                <IoIosPeople size={50} className="" />
              </div>
              <h3>Collaborate</h3>
              <p className="text-justify">
                Collaborate on your own timing, by scheduling with mentor
                booking
              </p>
            </div>
            <div className="how-does-it-works">
              <div className=" bg-blue-50 shadow-xl text-gray-800 rounded-full w-24 h-24 flex items-center justify-center">
                <FaLevelUpAlt size={50} className="" />
              </div>
              <h3>Improvement</h3>
              <p className="text-justify">
                You can gather different skill set, and you can become mentor
                too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowDoesItWork;
