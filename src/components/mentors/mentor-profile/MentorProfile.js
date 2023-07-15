import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { BsLinkedin, BsFacebook } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import defaultAvatar from '../../../assets/profiles/default-avatar-m.jpg';

const MentorProfile = () => {
  const navigate = useNavigate();

  const [mentorProfile, setMentorProfile] = useState([]);
  const [mentorAbout, setMentorAbout] = useState([]);
  const [mentorEducation, setMentorEducation] = useState([]);

  useEffect(() => {
    try {
      const getProfileMentor = async () => {
        const response = await axios.get(
          'http://localhost:8000/api/mentor/profile/profile',
          {
            headers: {
              Authorization: localStorage.getItem('jwt'),
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              withCredentials: true
            }
          }
        );
        setMentorProfile(response.data);
      };
      getProfileMentor();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    try {
      const getProfileMentor1 = async () => {
        const response = await axios.get(
          'http://localhost:8000/api/mentor/profile/about',
          {
            headers: {
              Authorization: localStorage.getItem('jwt'),
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              withCredentials: true
            }
          }
        );
        setMentorAbout(response.data);
        // console.log(response.data);
      };
      getProfileMentor1();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    try {
      const getProfileMentor2 = async () => {
        const response = await axios.get(
          'http://localhost:8000/api/mentor/profile/education',
          {
            headers: {
              Authorization: localStorage.getItem('jwt'),
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              withCredentials: true
            }
          }
        );
        setMentorEducation(response.data);
        // console.log(response.data);
      };
      getProfileMentor2();
    } catch (err) {
      console.log(err);
    }
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

          {mentorProfile.map((profile, index) => (
            <div
              className="flex md:flex-row flex-col justify-between  items-center p-6 border border-gray-300"
              key={index}
            >
              <div className="flex md:flex-row flex-col md:items-start items-center gap-3">
                <div className="">
                  <img
                    src={defaultAvatar}
                    alt=""
                    className="rounded-full w-32 h-32 border-blue-500 border-4"
                  />
                </div>
                <div className="flex md:items-start items-center">
                  <article className="md:text-left text-center">
                    <h4 className="font-medium">
                      {profile.f_name} {profile.l_name}
                    </h4>
                    <p className="text-gray-500">{profile.access}</p>

                    <h4 className="font-medium md:my-0 my-4">Contact Me</h4>
                    <div className="flex gap-3 w-full items-center md:justify-start justify-center">
                      <a
                        href={profile.linked_in_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsLinkedin
                          className="rounded-full text-blue-500 cursor-pointer hover:text-blue-600"
                          size={35}
                        />
                      </a>
                      <a
                        href={profile.fb_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsFacebook
                          className="rounded-full text-blue-500 cursor-pointer hover:text-blue-600"
                          size={35}
                        />
                      </a>
                    </div>
                  </article>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 w-full max-w-[250px]">
                <h4 className="text-medium text-blue-600 md:mt-0 mt-4">
                  <span className="font-semibold text-2xl">FREE</span> /hour
                </h4>
                <button className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-medium">
                  <a
                    href={`https://www.facebook.com/messages`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message me
                  </a>
                </button>
              </div>
            </div>
          ))}

          {mentorAbout.map((about, index) => (
            <section key={index}>
              <div className="p-6 border border-gray-300 my-6 border-b-2 border-b-blue-600">
                <h3 className="font-medium">About me</h3>

                <hr className="my-5 border border-gray-200" />
                <p>{about.bio}</p>
              </div>

              <div className="p-6 border border-gray-300 my-6 border-b-2 border-b-blue-600">
                <h3 className="font-medium">Personal Information</h3>
                <hr className="my-5 border border-gray-200" />
                <div className="grid md:grid-cols-2  gap-3">
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
                  <span className="flex gap-1 ">
                    Industry Experience (yr):
                    <p className="font-medium">{about.yrs_exp}</p>
                  </span>
                  <span className="flex gap-1 ">
                    Current Job (Position):
                    <p className="font-medium">{about.current_job}</p>
                  </span>
                </div>
              </div>
            </section>
          ))}

          {mentorEducation.map((education, index) => (
            <section key={index}>
              <div className="p-6 border border-gray-300 my-6 border-b-2 border-b-blue-600">
                <h3 className="font-medium">Education </h3>
                <hr className="my-5 border border-gray-200" />

                <div className="grid  grid-rows-2 gap-3">
                  <div className="flex md:flex-row flex-col justify-between">
                    <span className="font-semibold">
                      {education.college}
                      <p className=" font-normal">College</p>
                    </span>
                    <span className="font-semibold md:text-end">
                      {education.college_yr_graduate}
                      <p className=" font-normal">College Year Graduated</p>
                    </span>
                  </div>
                  <div className="flex md:flex-row flex-col justify-between">
                    <span className="font-semibold">
                      {education.high_school}
                      <p className=" font-normal">High School</p>
                    </span>
                    <span className="font-semibold md:text-end">
                      {education.hs_yr_graduated}
                      <p className=" font-normal">High School Year Graduated</p>
                    </span>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {mentorEducation.map((education, index) => (
            <section key={index}>
              <div className="p-6 border border-gray-300 my-6 border-b-2 border-b-blue-600">
                <h3 className="font-medium">Experience </h3>

                <hr className="my-5 border border-gray-200" />

                <div className="grid  gap-3">
                  <div className="flex md:flex-row flex-col justify-between">
                    <span className="font-semibold">
                      {education.current_job}
                      <p className=" font-normal">{education.company}</p>
                      <p className="italic font-normal">Current Job</p>
                    </span>
                    <span className="font-semibold md:text-end">
                      <p>{education.current_job_started}</p>
                      <p className="font-normal">Year Started</p>
                    </span>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorProfile;
