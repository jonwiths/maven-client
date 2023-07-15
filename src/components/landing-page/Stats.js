import React, { useEffect, useState } from 'react';

import { IoIosPeople } from 'react-icons/io';
import { FaChalkboardTeacher } from 'react-icons/fa';
import axios from 'axios';

const Stats = () => {
  const [totalStudents, setTotalStudents] = useState([]);
  const [totalMentors, setTotalMentors] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const students = await axios.get(
          'http://localhost:8000/api/v1/get-total-students',
          {
            headers: {
              Authorization: localStorage.getItem('jwt'),
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              withCredentials: true
            }
          }
        );
        const mentors = await axios.get(
          'http://localhost:8000/api/v1/get-total-mentors',
          {
            headers: {
              Authorization: localStorage.getItem('jwt'),
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              withCredentials: true
            }
          }
        );

        setTotalStudents(students.data[0].total_students);
        setTotalMentors(mentors.data[0].total_mentors);
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, []);

  return (
    <article className="p-4 bg-blue-800 text-gray-100">
      <div className="container w-full mx-auto flex items-center justify-between sm:flex-row flex-col">
        <div className="pt-5 md:pt-0">
          <h2 className="lg:text-4xl text-3xl text-center md:pt-0">
            Our Growing Statistics.
          </h2>{' '}
        </div>
        <div className="py-5  flex gap-x-10 gap-y-3 sm:flex-row flex-col">
          <div className="flex gap-2 items-center">
            <IoIosPeople size={40} className="md:mr-3 mr-2" />
            <h3 className="font-bold">{totalStudents}</h3>
            <h4>Enrolled Students</h4>
          </div>
          <div className="flex gap-2 items-center">
            <FaChalkboardTeacher size={40} className="md:mr-3 mr-2" />
            <h3 className="font-bold">{totalMentors}</h3>
            <h4>Active Mentors</h4>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Stats;
