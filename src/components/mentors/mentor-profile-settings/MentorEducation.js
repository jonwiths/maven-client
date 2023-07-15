import React, { useState } from 'react';
import axios from 'axios';

const blockInvalidChar = (e) =>
  ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

const MentorEducation = () => {
  const [college, setCollege] = useState('');
  const [collegeYr, setCollegeYr] = useState(2023);
  const [highSchool, setHighSchool] = useState('');
  const [highSchoolYr, setHighSchoolYr] = useState(2023);

  const handlePersonalInfo = async (e) => {
    e.preventDefault();
    await axios.put(
      'http://localhost:8000/api/mentor/update/education',
      {
        college: college,
        college_yr_graduate: collegeYr,
        high_school: highSchool,
        hs_yr_graduated: highSchoolYr
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
    setCollege('');
    setCollegeYr('');
    setHighSchool('');
    setHighSchoolYr('');
  };

  return (
    <div className="md:p-6 p-2 border border-gray-300 my-6 border-b-2 border-b-blue-600">
      <h3 className="font-medium">My Education</h3>
      <p className="my-2 text-sm font-medium text-red-400">
        NOTE: This is a batch update format. You need to update all the input,
        leaving them blank before saving will affect your personal info.
      </p>
      <article>
        <hr className="my-5 border border-gray-200" />
        <p className="font-medium  pb-8">Update your education background</p>
        <form action="" method="POST" className="">
          <div className="flex md:flex-row flex-col justify-between w-full ">
            <div className="">
              <p>Enter college school name</p>
              <input
                type="text"
                name="college"
                placeholder="Type something here..."
                className="w-full max-w-[500px] mb-4 p-3 border-2 border-gray-700 outline-none rounded-2xl cursor-pointer"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                maxLength={100}
              />
            </div>
            <div className="">
              <p>Enter year graduated</p>
              <input
                type="number"
                name="college_yr"
                id="age"
                value={collegeYr}
                onKeyDown={blockInvalidChar}
                onChange={(e) => {
                  setCollegeYr(e.target.value.slice(0, 4));
                }}
                placeholder="Year graduated"
                className="w-full max-w-[150px] mb-4 p-3 border-2 border-gray-700 outline-none rounded-2xl cursor-pointer"
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-between w-full ">
            <div className="">
              <p>Enter highschool name</p>
              <input
                type="text"
                name="high_school"
                placeholder="Type something here..."
                className="w-full max-w-[500px] mb-4 p-3 border-2 border-gray-700 outline-none rounded-2xl cursor-pointer"
                value={highSchool}
                onChange={(e) => setHighSchool(e.target.value)}
                maxLength={100}
              />
            </div>
            <div className="">
              <p>Enter year graduated</p>
              <input
                type="number"
                name="high_school_yr"
                value={highSchoolYr}
                onKeyDown={blockInvalidChar}
                onChange={(e) => {
                  setHighSchoolYr(e.target.value.slice(0, 4));
                }}
                placeholder="Year graduated"
                className="w-full max-w-[150px] mb-4 p-3 border-2 border-gray-700 outline-none rounded-2xl cursor-pointer"
              />
            </div>
          </div>

          <button onClick={handlePersonalInfo} className="small-blue-btn">
            Update Education
          </button>
        </form>
      </article>
    </div>
  );
};

export default MentorEducation;
