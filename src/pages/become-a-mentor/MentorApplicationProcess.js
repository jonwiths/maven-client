import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

import MentorStep1 from './MentorStep1';

const MentorApplicationProcess = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col p-4 ">
        <h1 className="font-semibold text-center my-4">
          E-Mentor Application Process
        </h1>
        <div className="grid md:grid-cols-4 gap-x-2 mt-4">
          <div
            className="flex flex-col items-center p-4 border-4 bg-white mb-2 
          rounded-2xl text-gray-700 border-blue-700 cursor-pointer  shadow-inner"
          >
            <FaLightbulb size={30} className />
            <p className="mt-2 text-center">STEP 1</p>
            <h4 className="font-semibold text-center uppercase">
              Apply online
            </h4>
            <p className="mt-2 py-2 px-4 bg-blue-700 rounded-xl text-white font-medium">
              YOU ARE HERE
            </p>
            <p className="text-justify md:text-center mt-3">
              Your adventure can begin by sending us an email.
            </p>
          </div>
          <div
            className="flex flex-col items-center p-4 border-4 border-blue-300 bg-blue-200
          mb-2 rounded-2xl text-gray-700 cursor-pointer"
          >
            <FaLightbulb size={30} className />
            <p className="mt-2 text-center">STEP 2</p>
            <h4 className="font-semibold text-center uppercase">
              Wait for confirmation
            </h4>
            <p className="text-justify md:text-center mt-3">
              Our team will get back to you as soon as we receive your email.
            </p>
          </div>
          <div
            className="flex flex-col items-center p-4 border-4 border-blue-300 bg-blue-200 mb-2 
          rounded-2xl text-gray-700 cursor-pointer"
          >
            <FaLightbulb size={30} className />
            <p className="mt-2 text-center">STEP 3</p>
            <h4 className="font-semibold text-center uppercase">
              Meet the team
            </h4>
            <p className="text-justify md:text-center mt-3">
              Let's get to know one another and pass the assessment.
            </p>
          </div>
          <div
            className="flex flex-col items-center p-4 border-4 border-blue-300 bg-blue-200 mb-2 
          rounded-2xl text-gray-700 cursor-pointer"
          >
            <FaLightbulb size={30} className />
            <p className="mt-2 text-center">STEP 4</p>
            <h4 className="font-semibold text-center">Start teaching</h4>
            <p className="text-justify md:text-center mt-3">
              Start teaching after opening the necessary number of slots.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center mt-10">
          <p>Go now and apply using our contact info</p>
          <p className="md:mt-4 mt-6 font-semibold text-center">
            If you still have more questions about being an e-mentor, feel free
            to message us.
          </p>
          <p className="mt-2">Email: maven.edu05@gmail.com</p>
          <p className="mt-2">Phone: (+63)912 345 6789</p>
        </div>
      </div>
      <hr className="border text-gray-800 mt-6" />
    </section>
  );
};

export default MentorApplicationProcess;
