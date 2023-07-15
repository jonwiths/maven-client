import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineRise } from 'react-icons/ai';
import { BiHappyBeaming } from 'react-icons/bi';
import { FaHandsHelping } from 'react-icons/fa';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';

const CoreValues = () => {
  return (
    <article>
      <div className="container mx-auto w-full p-4">
        <h1 className="text-center p-4 bg-blue-100 ">
          <span className="text-blue-700">CORE</span> VALUES
        </h1>
        <div className="grid md:grid-cols-4 mt-6 gap-4">
          <div className="flex flex-col items-center gap-2 mb-2">
            <BiHappyBeaming size={30} />
            <h3 className="text-center font-medium">
              Tutoring makes a difference
            </h3>
            <p className="md:text-center text-justify">
              We’re going to challenge you to go above and beyond what you think
              is achievable in terms of enhancing your knowledge. 
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 mb-2">
            <AiOutlineRise size={30} />
            <h3 className="text-center font-medium">Lift others up</h3>
            <p className="md:text-center text-justify">
              Self-studying is good, but getting help from others is better.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 mb-2">
            <FaHandsHelping size={30} />
            <h3 className="text-center font-medium">We bring knowledge.</h3>
            <p className="md:text-center text-justify">
              We operate under the premise that knowledge is power.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 mb-2">
            <MdOutlineConnectWithoutContact size={30} />
            <h3 className="text-center font-medium">Connecting knowledge</h3>
            <p className="md:text-center text-justify">
              The finest connections are those where both sides have a vested
              interest in the success of the exchange of knowledge.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CoreValues;
