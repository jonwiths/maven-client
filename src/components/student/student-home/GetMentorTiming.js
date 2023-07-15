import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillCopy } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { BsFillTelephoneFill } from 'react-icons/bs';

import { BsBookmarkHeartFill, BsFacebook } from 'react-icons/bs';

import defaultImage from '../../../assets/profiles/default-avatar-m.jpg';
import Loading from '../../../routes/loading/Loading';

const GetMentorTiming = () => {
  const [mentors, setMentors] = useState([]);
  const [mentorID, setMentorID] = useState('');
  const [meetingID, setMeetingID] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSchedTimings = async () => {
      const response = await axios.get(
        'http://localhost:8000/api/student/get-sched-timings',

        {
          headers: {
            Authorization: localStorage.getItem('jwt'),
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            withCredentials: true
          }
        }
      );
      setMentors(response.data);
      setIsLoading(false);
    };
    getSchedTimings();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setErrMsg('');
    }, 4000);
  }, [errMsg]);

  const [openModal, setOpenModal] = useState(false);
  const openModalBtn = () => {
    setOpenModal(!openModal);
  };

  const handleBookMentor = async (e) => {
    e.preventDefault();
    try {
      if (meetingID.trim() === '' || meetingID.trim() === '') {
        setErrMsg('Fill up MEETING ID or MENTOR ID');
      } else if (meetingID.trim().length < 15 || mentorID.trim().length < 15) {
        setErrMsg('MEETING ID must be 15 characters or more');
      } else if (mentorID.trim().length < 15) {
        setErrMsg('MEETING ID must be 15 characters or more');
      } else {
        await axios.post(
          'http://localhost:8000/api/student/set-book-mentor',
          {
            meeting_id: meetingID,
            mentor_id: mentorID
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

        setErrMsg('Mentor Booking Success!');
        setMeetingID('');
        setMentorID('');
        setOpenModal(!openModal);
        window.location.reload();
      }
    } catch (err) {
      // console.log(err);
      setErrMsg(err.response.data);
    }
  };

  return (
    <>
      <div className="max-h-[80vh] overflow-x-scroll">
        <div className="">
          <div className="mt-5">
            <p className="mb-4">Find available mentors here</p>
          </div>
          <div className="">
            {isLoading ? (
              <Loading />
            ) : (
              mentors.map((mentor) => (
                <article key={mentor.id} className="">
                  <div className="border border-blue-900 rounded-2xl p-2 mb-2">
                    <div className="flex md:flex-row flex-col justify-between md:px-4 px-0">
                      {/* Image */}
                      <div className="flex md:flex-row flex-col gap-x-3 justify-center items-center">
                        <div className="rounded-full overflow-hidden">
                          {!mentor.profile ? (
                            <img
                              src={defaultImage}
                              alt=""
                              className="w-24 h-24 object-cover rounded-full border-2 border-blue-700 bg-blue-100"
                            />
                          ) : (
                            <img
                              // src={mentor.m_profile}
                              src={defaultImage}
                              alt=""
                              className="w-24 h-24 object-cover rounded-full border-4 border-blue-700"
                            />
                          )}
                        </div>
                        <div className="flex flex-col justify-center items-center md:items-start md:gap-0 gap-1">
                          <h3 className="font-semibold md:text-start text-center">
                            {mentor.f_name} {mentor.l_name}
                          </h3>
                          <p className="md:mt-0 mt-2 text-gray-500">
                            {mentor.subject}
                          </p>
                          <div className="font-normal md:mt-4 mt-2">
                            Date:{' '}
                            <span className="font-medium">{mentor.date}</span>
                          </div>
                          <div className="font-normal ">
                            Duration:{' '}
                            <span className="font-medium">
                              {mentor.duration} hour/s
                            </span>
                          </div>
                          <div className="font-normal ">
                            Time:{' '}
                            <span className="font-medium text-blue-800">
                              {mentor.start}:00 to {mentor.end}:00
                            </span>
                          </div>
                          <div className="font-normal text-center  gap-2 mb-2">
                            Link:{' '}
                            <span className="inline-flex items-center justify-center">
                              <input
                                type="text"
                                readOnly={true}
                                value={mentor.meeting_link}
                                className="border border-blue-600 pl-1"
                              />
                              <button
                                className=" "
                                title="Copy to clipboad"
                                onClick={() => {
                                  navigator.clipboard.writeText(
                                    mentor.meeting_link
                                  );
                                  alert('Meeting Link Copied');
                                }}
                              >
                                <AiFillCopy
                                  size={25}
                                  className="text-blue-600 hover:text-blue-800 inline"
                                />
                              </button>
                            </span>
                          </div>
                          <div className="font-normal text-center  gap-2">
                            Topic:{' '}
                            <span className="inline-flex items-center justify-center">
                              <input
                                type="text"
                                readOnly={true}
                                value={mentor.topic}
                                className="border border-blue-600 pl-1"
                              />
                              <button
                                className=" "
                                title="Copy to clipboad"
                                onClick={() => {
                                  navigator.clipboard.writeText(mentor.topic);
                                  alert('Meeting Topic Copied');
                                }}
                              >
                                <AiFillCopy
                                  size={25}
                                  className="text-blue-600 hover:text-blue-800 inline"
                                />
                              </button>
                            </span>
                          </div>
                          {/* <p className="mt-2">{mentor.description}</p> */}
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex flex-col md:items-end items-center">
                        <h3 className="font-medium text-green-600 my-2">
                          {mentor.price}
                        </h3>

                        <button
                          data-modal-target="popup-modal"
                          data-modal-toggle="popup-modal"
                          className="w-[200px] px-4 py-2 mb-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                          type="button"
                          onClick={openModalBtn}
                        >
                          Book this Mentor
                        </button>
                        <div className="flex justify-between items-center gap-2">
                          <button className="flex justify-center items-center p-2 bg-white hover:bg-gray-100 text-blue-700 border border-blue-700 rounded-full">
                            <i
                              // value={mentor.fb_link}
                              rel="noopener noreferrer"
                              target="_blank"
                              className="flex gap-1 items-center"
                              title="Facebook account"
                              onClick={() => {
                                navigator.clipboard.writeText(mentor.fb_link);
                                alert('Facebook Link Copied');
                              }}
                            >
                              <BsFacebook size={25} />
                            </i>
                          </button>

                          <button className="flex justify-center items-center p-2 bg-white hover:bg-gray-100 text-blue-700 border border-blue-700 rounded-full">
                            <i
                              rel="noopener noreferrer"
                              target="_blank"
                              className="flex gap-1 items-center"
                              title="Email address"
                              onClick={() => {
                                navigator.clipboard.writeText(mentor.email);
                                alert('Email Address Copied');
                              }}
                            >
                              <SiGmail size={25} />
                            </i>
                          </button>

                          <button className="flex justify-center items-center p-2 bg-white hover:bg-gray-100 text-blue-700 border border-blue-700 rounded-full">
                            <i
                              // href={mentor.fb_link}
                              rel="noopener noreferrer"
                              target="_blank"
                              className="flex gap-1 items-center"
                              title="Phone number"
                              onClick={() => {
                                navigator.clipboard.writeText(
                                  mentor.phone_number
                                );
                                alert('Phone Number Copied');
                              }}
                            >
                              <BsFillTelephoneFill size={25} />
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex  md:items-start items-center md:flex-row flex-col justify-between w-full mt-4 mb-2">
                      <div className="flex  items-center md:flex-row flex-col justify-between ">
                        Meeting ID:
                        <span
                          className="font-medium text-sm cursor-pointer ml-2"
                          title="Copy Meeting ID"
                          onClick={() => {
                            navigator.clipboard.writeText(mentor.id);
                            alert('Meeting ID Copied');
                          }}
                        >
                          {mentor.id}
                        </span>
                        {/* <AiFillCopy className="text-blue-600 hover:text-blue-800 inline" /> */}
                      </div>
                      <div className="flex  items-center md:flex-row flex-col justify-between ">
                        Mentor ID:
                        <span
                          className="font-medium text-sm cursor-pointer ml-2"
                          title="Copy Mentor ID"
                          onClick={() => {
                            navigator.clipboard.writeText(mentor.mentor_id);
                            alert('Mentor ID Copied');
                          }}
                        >
                          {mentor.mentor_id}{' '}
                        </span>
                        {/* <AiFillCopy className="text-blue-600 hover:text-blue-800 inline" /> */}
                      </div>
                    </div>

                    {/* <div className="w-full p-2 bg-blue-900"></div> */}
                  </div>

                  {/* MODAL */}
                  <div className="">
                    <div
                      value={openModal}
                      id="popup-modal"
                      tabIndex="-1"
                      className={
                        !openModal
                          ? 'hidden'
                          : 'fixed md:top-20 top-2 md:left-1/3 left-0  z-50 block p-4 overflow-x-hidden overflow-y-auto mx-auto w-full md:h-full'
                      }
                    >
                      <div className="relative w-full h-full max-w-md md:h-auto">
                        <div className="relative bg-white rounded-lg shadow border-blue-600 border-2">
                          <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white outline-none border border-gray-700"
                            data-modal-hide="popup-modal"
                            onClick={openModalBtn}
                          >
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                          </button>
                          <div className="p-6 text-center">
                            <BsBookmarkHeartFill
                              className="flex items-center justify-center w-full text-blue-600 mb-6"
                              size={45}
                            />
                            <div className="">
                              <form
                                method="POST"
                                className="w-full flex justify-start flex-col"
                              >
                                <label
                                  htmlFor="mentor_id"
                                  className="text-sm text-left mt-3"
                                >
                                  Mentor ID
                                </label>
                                <input
                                  type="text"
                                  placeholder="Enter MENTOR ID"
                                  name="mentor_id"
                                  value={mentorID}
                                  onChange={(e) => {
                                    setMentorID(e.target.value);
                                  }}
                                  className="w-full p-1 outline-none border border-blue-700"
                                  maxLength={25}
                                />

                                <label
                                  htmlFor="meeting_id"
                                  className="text-sm text-left mt-3"
                                >
                                  Meeting ID
                                </label>
                                <input
                                  type="text"
                                  placeholder="Enter MEETING ID"
                                  name="meeting_id"
                                  value={meetingID}
                                  onChange={(e) => {
                                    setMeetingID(e.target.value);
                                  }}
                                  className="w-full p-1 outline-none border border-blue-700"
                                  maxLength={25}
                                />
                              </form>
                              <p className="text-left mt-2 text-orange-600">
                                {errMsg && errMsg}
                              </p>
                            </div>
                            <h3 className="my-5 text-lg font-normal text-gray-800 ">
                              Press <span className="font-bold">'Yes'</span> to
                              confirm meeting with the mentor
                            </h3>
                            <button
                              data-modal-hide="popup-modal"
                              type="button"
                              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 md:my-0 my-2"
                              onClick={handleBookMentor}
                            >
                              Yes, I'm sure
                            </button>
                            <button
                              data-modal-hide="popup-modal"
                              type="button"
                              className="text-gray-700 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none  rounded-lg border border-gray-400 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10   outline-none"
                              onClick={openModalBtn}
                            >
                              No, cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetMentorTiming;
