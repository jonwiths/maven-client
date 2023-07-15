import React from 'react';

// import aboutBg from '../../assets/background/1080x1920.jpg';
import aboutBg from '../../assets/backgrounds/.webp/objectives.webp';

const Objectives = () => {
  return (
    <article className="">
      <div className="container w-full mx-auto flex flex-col-reverse md:flex-row-reverse">
        <div className="md:w-1/2 w-full p-4 ">
          <h5 className="text-blue-800 md:pt-0 pt-2">Objectives</h5>
          <div className="VISION mb-5">
            <h2 className="font-semibold">
              OUR
              <span className="text-blue-700 font-bold"> OBJECTIVES</span>
            </h2>
            <p className="pt-3 text-justify">
              Maven-edu was made to assist students who want to advance or
              enhance their knowledge, especially those who are struggling with
              a particular subject. This is accomplished by giving mentees
              support, direction, and coaching from mentors with more expertise.
            </p>
          </div>
          <h5 className="text-blue-800 md:pt-0 pt-2">Mission and Vision</h5>
          <div className="VISION mb-5">
            <h2 className="font-semibold">
              OUR
              <span className="text-blue-700 font-bold"> VISION</span>
            </h2>
            <p className="pt-3 text-justify">
              To empower future professionals the confidence they need to learn,
              communicate, and value the knowledge and skills that will aid them
              succeed in their chosen career paths.
            </p>
          </div>
          <div className="MISSION">
            <h2 className="font-semibold">
              OUR
              <span className="text-blue-700 font-bold"> MISSION</span>
            </h2>
            <p className="pt-3 text-justify">
              Maven-edu aims to provide top-quality academic services that
              foster the development of knowledge and skills through one-on-one
              online discussions with the convenience of choosing the time that
              works best for them. Maven-Edu intends to achieve personal
              educational goals.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full p-2 ">
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

export default Objectives;
