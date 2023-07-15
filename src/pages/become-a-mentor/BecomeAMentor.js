import React from 'react';
import Stats from '../../components/landing-page/Stats';
import MentorApplicationProcess from './MentorApplicationProcess';
import MentorIntro from './MentorIntro';
import MentorStep1 from './MentorStep1';
import MentorStep2 from './MentorStep2';

const BecomeAMentor = () => {
  return (
    <section>
      <article className="bg-become-a-mentor-bg bg-fixed bg-center bg-cover object-cover h-[50vh] w-full flex items-center justify-center">
        <div className="">
          <h1 className="text-gray-100 font-medium text-3xl">
            Become a Mentor
          </h1>
        </div>
      </article>
      <MentorIntro />
      <MentorApplicationProcess />
      <MentorStep1 />
      <MentorStep2 />
      <Stats />
    </section>
  );
};

export default BecomeAMentor;
