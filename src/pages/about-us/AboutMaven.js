import React from 'react';

import { BsFillCheckCircleFill } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';

import aboutBg from '../../assets/backgrounds/.webp/about-us.webp';
import AboutMavenFaqs from './AboutMavenFaqs';

const AboutMaven = () => {
  return (
    <article className="">
      <div className="container w-full mx-auto flex flex-col-reverse lg:flex-row">
        <div className="lg:w-2/5 w-full p-4">
          <h5 className="text-blue-800 md:pt-0 pt-2">
            What is this Maven-edu?
          </h5>
          <h2 className="font-semibold">
            <span className="text-blue-700 font-bold">Maven-edu</span>, An
            E-mentoring scheduling platform{' '}
          </h2>
          <p className="py-6 text-justify">
            <span className="font-semibold italic">Maven</span> means that it is
            the best way to show that someone loves knowledge and loves to share
            it. They will often have a great deal of knowledge in a particular
            subject (or multiple subjects). They will always be happy to share
            what they know too.
          </p>
          <h3 className="font-semibold pb-3">
            Maven-edu offers the following:
          </h3>
          <div className="px-2">
            <h4 className="flex items-center gap-2 font-medium py-1">
              <span>
                <BsFillCheckCircleFill size={20} className="text-blue-700 " />
              </span>
              Convience
            </h4>
            <h4 className="flex items-center gap-2 font-medium py-1">
              <span>
                <BsFillCheckCircleFill size={20} className="text-blue-700" />
              </span>
              Flexibility
            </h4>
            <h4 className="flex items-center gap-2 font-medium py-1">
              <span>
                <BsFillCheckCircleFill size={20} className="text-blue-700" />
              </span>
              Easy to access
            </h4>
          </div>
          <h3 className="pt-5 font-semibold">Keep in touch</h3>
          <div className="flex items-center gap-2 font-normal py-1 pl-2">
            <span>
              <FaEnvelope size={20} className="text-blue-700 " />
            </span>
            <h5 className="">maven.edu05@gmail.com</h5>
          </div>
          <h3 className="font-semibold my-5">More about Maven-edu:</h3>
          <AboutMavenFaqs />
        </div>
        <div className="lg:w-3/5 w-full p-2 ">
          <img
            src={aboutBg}
            alt=""
            className="block md:h-[700px] h-[500px] w-full object-cover"
          />
        </div>
      </div>
    </article>
  );
};

export default AboutMaven;
