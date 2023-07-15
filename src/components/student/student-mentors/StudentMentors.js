import React from 'react';
import GetStudentMentors from './GetStudentMentors';

const StudentMentors = () => {
  return (
    <section className="rounded-section">
      <div className="custom-container">
        <h1>Mentors</h1>
        <GetStudentMentors />
      </div>
    </section>
  );
};

export default StudentMentors;
