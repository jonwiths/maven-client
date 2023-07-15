import axios from 'axios';
import React, { useState } from 'react';

const blockInvalidChar = (e) =>
  ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

const MentorExperience = () => {
  const [job, setJob] = useState('');
  const [jobYrStart, setJobYrStart] = useState('');
  const [company, setCompany] = useState('');

  const handlePersonalInfo = async (e) => {
    e.preventDefault();

    await axios.put(
      'http://localhost:8000/api/mentor/update/experience',
      {
        current_job: job,
        current_job_started: jobYrStart,
        company
      },
      {
        headers: {
          Authorization: localStorage.getItem('jwt'),
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          withCredentials: true
        }
      }
    );
    setCompany('');
    setJob('');
    setJobYrStart('');
  };

  return (
    <div className="md:p-6 p-2 border border-gray-300 my-6 border-b-2 border-b-blue-600">
      <h3 className="font-medium">My Experience</h3>
      <p className="my-2 text-sm font-medium text-red-400">
        NOTE: This is a batch update format. You need to update all the input,
        leaving them blank before saving will affect your personal info.
      </p>
      <article>
        <hr className="my-5 border border-gray-200" />
        <p className="font-medium  pb-8">Update your work experience</p>
        <form action="" method="POST" className="">
          <div className="flex md:flex-row flex-col justify-between w-full ">
            <div className="">
              <p>Enter current job </p>
              <input
                type="text"
                name="current_job"
                placeholder="Type something here..."
                className="w-full max-w-[500px] mb-4 p-3 border-2 border-gray-700 outline-none rounded-2xl cursor-pointer"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </div>
            <div className="">
              <p>Enter job year started</p>
              <input
                type="number"
                name="current_job_started"
                value={jobYrStart}
                onKeyDown={blockInvalidChar}
                onChange={(e) => {
                  setJobYrStart(e.target.value.slice(0, 4));
                }}
                placeholder="Year started"
                className="w-full max-w-[150px] mb-4 p-3 border-2 border-gray-700 outline-none rounded-2xl cursor-pointer"
              />
            </div>
          </div>
          <div className="">
            <p>Enter Company</p>
            <input
              type="text"
              name="company"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
              placeholder="Company"
              className="w-full max-w-[350px] mb-4 p-3 border-2 border-gray-700 outline-none rounded-2xl cursor-pointer"
            />
          </div>

          <button onClick={handlePersonalInfo} className="small-blue-btn">
            Update Job Experience
          </button>
        </form>
      </article>
    </div>
  );
};

export default MentorExperience;
