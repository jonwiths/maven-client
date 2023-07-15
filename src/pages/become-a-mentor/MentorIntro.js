import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaHandsHelping, FaLightbulb } from 'react-icons/fa';
import { MdConnectWithoutContact } from 'react-icons/md';

import homepageBg from '../../assets/backgrounds/.webp/homepage-bg.webp';

const MentorIntro = () => {
  return (
    <article className="py-5">
      <div className="w-full container mx-auto p-4 flex items-center flex-col">
        <h1 className="font-semibold text-center py-6">
          Want to share knowledge and become an E-Mentor?{' '}
        </h1>
        <h4 className="md:text-center ">
          Help us build a new world of sharing knowledge to the future leaders.{' '}
        </h4>
        <h4 className="md:text-center mb-4">
          Join the high quality instructors who are passionate to share their
          expertise and help students grow.
        </h4>
        <Link to="/mentor-login" className="large-blue-btn">
          Login as a mentor
        </Link>
        <div className="w-full">
          <p className="text-center my-4">
            Being an E-mentor must have the following:
          </p>
          <div className="flex gap-4 md:flex-row flex-col items-center md:justify-center justify-start">
            <span className="flex items-center gap-2">
              <AiOutlineCheck size={20} className="text-green-700 " />
              Bachelor's Degree
            </span>
            <span className="flex items-center gap-2">
              <AiOutlineCheck size={20} className="text-green-700" />
              2+ years of industry experience
            </span>
            <span className="flex items-center gap-2">
              <AiOutlineCheck size={20} className="text-green-700" />
              Willingness in sharing knowledge
            </span>
          </div>
        </div>
        <div className="py-4">
          <img
            src={homepageBg}
            alt="..."
            className="h-[500px] border-4 object-cover"
          />
        </div>
        <div className="mt-12">
          <h2 className="font-semibold text-center">
            You are not just sharing knowledge.
          </h2>
          <h2 className="font-semibold text-center pb-4">
            You are helping the future of your industry.
          </h2>
          <div className="flex gap-x-5 gap-y-7 mt-6 md:flex-row flex-col">
            <div className="bg-gray-50 flex flex-col items-center border-2 border-gray-300 rounded-xl py-6 px-8">
              <FaHandsHelping size={30} className="text-blue-700 mb-2" />
              <p className="text-center">You are helping others grow</p>
            </div>
            <div className="bg-gray-50 flex flex-col items-center border-2 border-gray-300 rounded-xl py-6 px-8">
              <FaLightbulb size={30} className="text-blue-700 mb-2" />
              <p className="text-center">You are giving them fresh ideas</p>
            </div>
            <div className="bg-gray-50 flex flex-col items-center border-2 border-gray-300 rounded-xl py-6 px-8">
              <MdConnectWithoutContact
                size={30}
                className="text-blue-700 mb-2"
              />
              <p className="text-center">You are making connections</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MentorIntro;
