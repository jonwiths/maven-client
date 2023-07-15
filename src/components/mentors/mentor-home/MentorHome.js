import React from 'react';
import MenteeList from './MenteeList';
// import MentorSummary from './MentorSummary';
const MentorHome = () => {
  return (
    <section className="rounded-section">
      <div className="custom-container">
        <div className="">
          <MenteeList />
        </div>
      </div>
    </section>
  );
};

export default MentorHome;
