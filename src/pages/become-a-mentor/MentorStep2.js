import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import homepageBg from '../../assets/backgrounds/.webp/homepage-bg.webp';

const MentorRequirements = () => {
  return (
    <>
      <section>
        <div className="custom-container flex md:flex-row flex-col-reverse">
          <div className="md:w-3/5 w-full flex flex-col md:justify-center justify-start ">
            <h4 className="mt-4 md:text-start text-center">STEP 2</h4>
            <h2 className="font-semibold text-center md:text-left ">
              {' '}
              Sharing your knowledge is admirable, but are you good enough to be
              an E-mentor?
            </h2>
            <p className="mt-4 md:text-left text-justify">
              After passing the Step 1, Step 2 is about sending your background
              information. Here are some of the requirements you need to send on
              our email account. And our team will check it before going to the
              next step. IT ALMOST OVER. Hang in there our future mentor.
            </p>

            <div className="flex flex-col gap-2 mt-4 items-start md:items-start justify-start">
              <h4>Skills and Qualification</h4>
              <span className="flex items-center gap-2">
                <AiOutlineCheck size={20} className="text-green-700" />
                Updated CV
              </span>
              <span className="flex items-center gap-2">
                <AiOutlineCheck size={20} className="text-green-700" />A
                bachelor’s degree (Diploma)
              </span>
              <span className="flex items-center gap-2">
                <AiOutlineCheck size={20} className="text-green-700" />
                Valid ID’s: (Passport, Driver's License, UMID, PhilHealth ID,
                TIN ID, Postal ID, NBI Clearance, PRC ID, PWD ID, National ID)
              </span>
              <span className="flex items-center gap-2">
                <AiOutlineCheck size={20} className="text-green-700" />
                specialized knowledge in your field
              </span>
              <span className="flex items-center gap-2">
                <AiOutlineCheck size={20} className="text-green-700" />
                2+ years of industry experience
              </span>

              <h4 className="mt-4">Technical Equipment</h4>
              <span className="flex items-center gap-2">
                <AiOutlineCheck size={20} className="text-green-700" />
                Laptop or Desktop with camera
              </span>
              <span className="flex items-center gap-2">
                <AiOutlineCheck size={20} className="text-green-700" />
                Headset / Earphones
              </span>
              <span className="flex items-center gap-2">
                <AiOutlineCheck size={20} className="text-green-700" />
                Stable internet connection
              </span>
            </div>

            <p className="mt-4 text-justify md:text-left">
              We want to help our mentors for extra income, but the{' '}
              <strong> main objective </strong>
              of our program is for the students who are eager to step up their
              mode of learning. That's why almost 100% of our E-mentors here are
              teaching for FREE.
            </p>
            <p className="mt-4 text-justify md:text-left mb-2">
              This place if for people who want to share their knowledge
              unconditionally.
            </p>

            <Link
              to="/mentor-login"
              className="large-blue-btn md:max-w-fit mt-2"
            >
              Login as a mentor
            </Link>
          </div>
          <div className="md:w-2/5 w-full">
            <div className="">
              <img
                src={homepageBg}
                alt="..."
                className="max-h-[500px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentorRequirements;
