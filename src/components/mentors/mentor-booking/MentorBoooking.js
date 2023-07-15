import React from 'react';
import GetBooking from './GetBooking';

const MentorBoooking = () => {
  return (
    <>
      <section className="rounded-section">
        <div className="custom-container">
          <h1>Booking</h1>
          <h3 className="my-4">Your incoming meeting is here</h3>
          <GetBooking />
        </div>
      </section>
    </>
  );
};

export default MentorBoooking;
