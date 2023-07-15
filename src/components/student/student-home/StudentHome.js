import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GetMentorTiming from './GetMentorTiming';

const StudentHome = () => {
  const [errMsg, setErrMsg] = useState('');

  const [currentStudent, setCurrentStudent] = useState([]);
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/student/current-user',
          {
            headers: {
              Authorization: localStorage.getItem('jwt'),
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              withCredentials: true
            }
          }
        );
        setCurrentStudent(response.data);
      } catch (err) {
        if (err) {
          setErrMsg(err.response.data);
          // console.log(err);
        }
      }
    };
    getCurrentUser();
  }, []);

  return (
    <section className="rounded-section overflow-hidden">
      <div className="custom-container upper ">
        <div className="">
          <div className="">
            <h1>
              Welcome, {currentStudent.f_name} {currentStudent.l_name}
            </h1>
            <h3 className="my-4 ">
              These are the available mentors right now.
            </h3>
          </div>
          <div className="">
            <GetMentorTiming />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentHome;
