import React from 'react';
import { Link } from 'react-router-dom';

import student from '../../assets/backgrounds/.webp/service-student.webp';
import mentor from '../../assets/backgrounds/.webp/service-mentor.webp';
import Stats from '../../components/landing-page/Stats';

const Services = () => {
  return (
    <>
      <section>
        <article className="bg-about-header-bg bg-fixed bg-center h-[200px] w-full flex items-center justify-center">
          <div className="">
            <h1 className="text-gray-100 font-semibold text-3xl">
              Our Services
            </h1>
          </div>
        </article>
        <div className="custom-container">
          <article className="mt-6">
            <div className="container mx-auto p-4">
              <h1 className="font-semibold text-center ">
                Do you want to <span className="text-blue-700">change </span>
                your mode of learning?
              </h1>
              <hr className="max-w-[500px] mx-auto border-gray-500 my-4" />
              <h1 className="font-semibold text-center ">
                Or do you want <span className="text-blue-700">share</span> your
                knowledge?
              </h1>
              <p className="text-center pt-6">
                Maven-edu provides a platform for both mentors and students who
                want to both grow. For mentors who have the skills, knowledge,
                experience, and of course, the passion and willingness to share
                them, and for students who seek their expertise, Maven-edu is
                here to give them a positive learning environment.
              </p>
              <div className="flex flex-col ">
                {/* Left */}
                <div className="flex md:flex-row flex-col-reverse items-center py-4 gap-x-4">
                  <div className="md:w-1/2 w-full flex items-center justify-center">
                    <img
                      src={student}
                      alt="..."
                      className="object-cover max-h-[500px]"
                    />
                  </div>
                  <div className="md:w-1/2 w-full flex flex-col items-center md:items-start">
                    <h2 className="font-semibold my-4 text-blue-700 uppercase text-center md:text-left">
                      Want to top on your class?
                    </h2>
                    <h3 className="font-semibold pb-4 text-center md:text-left">
                      Welcome to our Student's Portal.
                    </h3>
                    <p className="pb-2">
                      Maven-edu is pleased to introduce to you the online
                      learning platform that will be your partner in education.
                      Enroll now! So we can start your journey.
                    </p>
                    <div className="flex gap-2 md:flex-row flex-col mb-4">
                      <Link to="/register" className="rounded-btn-dark">
                        Become a Student
                      </Link>
                      <Link to="/login" className="rounded-btn-light">
                        Login as a Student
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Left */}
                <div className="flex md:flex-row-reverse flex-col-reverse items-center py-4">
                  <div className="md:w-1/2 w-full flex items-center justify-center">
                    <img
                      src={mentor}
                      alt="..."
                      className="object-cover max-h-[500px] "
                    />
                  </div>
                  <div className="md:w-1/2 w-full flex flex-col items-center md:items-start">
                    <h2 className="font-semibold my-4 text-blue-700 uppercase text-center md:text-left">
                      Willing to share your knowledge for FREE?
                    </h2>
                    <h3 className="font-semibold pb-4 text-center md:text-left">
                      Welcome to our Mentor's Portal.
                    </h3>
                    <p className="p-2">
                      Mentoring is an excellent way to build leadership skills,
                      empathy, and teachings. Be a part of someone's career
                      transformation. Take an hour to share your experiences and
                      knowledge!
                    </p>
                    <div className="flex md:gap-4 gap-2 md:flex-row flex-col mb-4">
                      <Link to="/become-a-mentor" className="rounded-btn-dark">
                        Become a Mentor
                      </Link>
                      <Link to="/mentor-login" className="rounded-btn-light">
                        Login as a Mentor
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <Stats />
    </>
  );
};

export default Services;
