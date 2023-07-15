import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { BsLinkedin, BsFacebook } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

import defaultAvatar from '../../../assets/profiles/default-avatar-s.jpg';

const StudentProfile = () => {
  const navigate = useNavigate();

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
          console.log(err);
        }
      }
    };
    getCurrentUser();
  }, []);

  const [userAbout, setUserAbout] = useState([]);
  useEffect(() => {
    const getProfileAbout = async () => {
      const response = await axios.get(
        'http://localhost:8000/api/student/profile/about',
        {
          headers: {
            Authorization: localStorage.getItem('jwt'),
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            withCredentials: true
          }
        }
      );
      setUserAbout(response.data);
    };
    getProfileAbout();
  }, []);

  const [userEducation, setUserEducation] = useState([]);
  useEffect(() => {
    const getProfileAbout = async () => {
      const response = await axios.get(
        'http://localhost:8000/api/student/profile/education',
        {
          headers: {
            Authorization: localStorage.getItem('jwt'),
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            withCredentials: true
          }
        }
      );
      setUserEducation(response.data);
    };
    getProfileAbout();
  }, []);

  return (
    <section className="rounded-section">
      <div className="custom-container">
        <h1 className="mb-6">Profile</h1>
        <div className="">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-1 mb-2 text-white bg-blue-600 hover:bg-blue-700"
            title="Test"
          >
            Back
          </button>

          <div className="flex md:flex-row flex-col justify-between  items-center p-6 border border-gray-300">
            <div className="flex md:flex-row flex-col md:items-start items-center gap-3">
              <div className="">
                <img
                  src={defaultAvatar}
                  alt=""
                  className="rounded-full w-32 h-2w-32 border-blue-500 border-4"
                />
              </div>
              <div className="flex md:items-start items-center">
                <article className="md:text-left text-center">
                  <h4 className="font-medium">
                    {currentStudent.f_name + ' ' + currentStudent.l_name}
                  </h4>
                  <p className="text-gray-500">{currentStudent.access}</p>
                  {/* <div className="mt-4">
                    Recovery Code:{' '}
                    <span className="font-bold text-red-600">
                      {currentStudent.recovery_code}
                    </span>
                  </div> */}
                </article>
              </div>
            </div>
          </div>
          {/* <p className="my-2 font-medium">
            NOTE: Please save this RECOVERY CODE because we don't have
            email-based forgot password setup
          </p> */}
          <div className=""></div>
          <div className="p-6 border border-gray-300 my-6 border-b-2 border-b-blue-600">
            <h3 className="font-medium">About me</h3>
            {userAbout.map((about, index) => (
              <article key={index}>
                <hr className="my-5 border border-gray-200" />
                <p>{about.bio}</p>
              </article>
            ))}
          </div>

          <div className="p-6 border border-gray-300 my-6 border-b-2 border-b-blue-600">
            <h3 className="font-medium">Personal Information</h3>
            <hr className="my-5 border border-gray-200" />
            {userAbout.map((about, index) => (
              <div className="grid md:grid-cols-2  gap-3" key={index}>
                <span className="flex gap-1">
                  Sex:
                  <p className="font-medium">{about.sex}</p>
                </span>
                <span className="flex gap-1">
                  Age:
                  <p className="font-medium">{about.age}</p>
                </span>
                <span className="flex gap-1 ">
                  Contact Number:
                  <p className="font-medium">{about.phone_number}</p>
                </span>
                <span className="flex gap-1 ">
                  Address:
                  <p className="font-medium">{about.address}</p>
                </span>
              </div>
            ))}
          </div>

          <div className="p-6 border border-gray-300 my-6 border-b-2 border-b-blue-600">
            <h3 className="font-medium">Education </h3>
            <hr className="my-5 border border-gray-200" />
            {userEducation.map((education, index) => (
              <div className="grid  grid-rows-2  gap-3" key={index}>
                <div className="flex md:flex-row flex-col justify-between">
                  <span className="font-semibold">
                    {education.college}
                    <p className=" font-normal">College</p>
                  </span>
                  <span className="font-semibold md:text-right text-center">
                    {education.college_yr}
                    <p className=" font-normal">College year Graduate</p>
                  </span>
                </div>
                <div className="flex md:flex-row flex-col justify-between">
                  <span className="font-semibold ">
                    {education.high_school}
                    <p className=" font-normal">High School</p>
                  </span>
                  <span className="font-semibold md:text-right text-center">
                    {education.hs_yr}
                    <p className=" font-normal">High School year Graduated</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProfile;
