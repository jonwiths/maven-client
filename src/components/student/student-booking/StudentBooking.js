import React from 'react';
import GetStudentBooking from './GetStudentBooking';

const StudentBooking = () => {
  return (
    <section className="rounded-section">
      <div className="custom-container">
        <h1>Student Booking</h1>
        <h3 className="my-4">Your incoming meeting is here</h3>
        <GetStudentBooking />
      </div>
    </section>
  );
};

export default StudentBooking;
