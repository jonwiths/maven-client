import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import defaultAvatar from '../../../assets/profiles/default-avatar-s.jpg';
import data from './booking-data';

// import allstudents from '../../../localdata/student/allMentors';

const GetBooking = () => {
  const [bookedStudents, setBookedStudents] = useState([]);

  // useEffect(() => {
  //   const getBookedStudents = async () => {
  //     const response = await axios.get(
  //       'http://localhost:8000/api/mentor/get-booked-students',
  //       {
  //         headers: {
  //           Authorization: localStorage.getItem('jwt'),
  //           'Content-Type': 'application/json',
  //           'Cache-Control': 'no-cache',
  //           withCredentials: true
  //         }
  //       }
  //     );
  //     setBookedStudents(response.data);
  //   };
  //   getBookedStudents();
  // }, []);

  const [errMsg, setErrMsg] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setErrMsg('');
    }, 4000);
  }, [errMsg]);

  const [scheduleID, setScheduleID] = useState('');
  const [studentID, setStudentID] = useState('');
  const [meetingLink, setMeetingLink] = useState('');

  const [openFinishModal, setOpenFinishModal] = useState(false);
  const openFinishModalBtn = () => {
    setOpenFinishModal(!openFinishModal);
  };

  const handleFinishMeetingBtn = async (e) => {
    e.preventDefault();
    try {
      if (studentID.trim() === '' || scheduleID.trim() === '') {
        setErrMsg('Fill up SCHEDULE ID or MENTOR ID');
      } else if (scheduleID.trim().length < 15) {
        setErrMsg('SCHEDULE ID must be 15 characters or more');
      } else if (studentID.trim().length < 15) {
        setErrMsg('STUDENT ID must be 15 characters or more');
      } else if (studentID.trim() !== bookedStudents[0].student_id) {
        setErrMsg('STUDENT ID IS NOT THE SAME');
      } else if (scheduleID.trim() !== bookedStudents[0].create_id) {
        setErrMsg('SCHEDULE ID IS NOT THE SAME');
      } else {
        await axios.post(
          'http://localhost:8000/api/mentor/set-finish-booking',
          {
            schedule_id: scheduleID,
            student_id: studentID
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
        setScheduleID('');
        setStudentID('');
        setOpenFinishModal(!openFinishModal);
        window.location.reload();
      }
    } catch (err) {
      // console.log(err);
      setErrMsg(err.response.data);
    }
  };

  return (
    <>
      <div className=" h-full overflow-x-scroll">
        <div className="">
          <div className="">
            <p className="mb-4">Mentor Booking:</p>
          </div>
          <div className="">
            {data.map((student, index) => (
              <article key={index} className="">
                {index === 0 ? (
                  <>
                    <p className="font-medium mb-1">Your Next Meeting:</p>
                    <div className="border-4 border-blue-900 bg-blue-100 rounded-2xl px-2 py-4 mb-5">
                      <div className="flex md:flex-row flex-col justify-between md:px-4 px-0">
                        {/* Image */}
                        <div className="flex md:flex-row flex-col gap-x-3 justify-center items-center">
                          <div className="rounded-full overflow-hidden">
                            <img
                              src={defaultAvatar}
                              alt=""
                              className="w-32 h-24 object-cover rounded-full border-4 border-blue-700"
                            />
                          </div>
                          <div className="mt-4 md:mt-0 flex w-full flex-col justify-center items-center md:items-start">
                            <h3 className=" font-semibold md:text-start text-center">
                              {student.subject}
                            </h3>
                            <p className="md:mb-0 mb-2 text-gray-500 md:text-left text-center">
                              {student.f_name} {student.l_name}
                            </p>

                            <span className="md:text-left text-center mb-2">
                              <p>
                                Meeting Link:{' '}
                                <input
                                  type="text"
                                  value={student.meeting_link}
                                  onChange={(e) =>
                                    setMeetingLink(e.target.value)
                                  }
                                  className="outline-none border border-blue-600 p-1 text-sm"
                                />{' '}
                              </p>
                            </span>
                            <span className="md:text-left text-center">
                              <p>
                                Meeting Topic:{' '}
                                <input
                                  type="text"
                                  value={student.topic}
                                  className="outline-none border border-blue-600 p-1"
                                />{' '}
                              </p>
                            </span>
                          </div>
                        </div>
                        {/* Content */}
                        <div className="flex flex-col md:items-end items-center">
                          <div className="font-normal md:mt-4 mt-2">
                            Date:{' '}
                            <span className="font-medium">{student.date}</span>
                          </div>
                          <div className="font-normal ">
                            Duration:{' '}
                            <span className="font-medium">
                              {student.duration}
                            </span>
                          </div>
                          <div className="font-normal ">
                            Time:{' '}
                            <span className="font-medium">
                              {student.start}:00 to {student.end}:00
                            </span>
                          </div>
                          <div className="font-normal ">
                            Status:{' '}
                            <span className="font-medium">
                              {' '}
                              {student.status}{' '}
                              <span className="font-normal">by</span>{' '}
                              {student.s_fname} {student.s_lname}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* <div className="w-full flex md:flex-row justify-between items-center flex-col gap-2 md:mt-2 mt-4">
                        <span className=" w-full mx-auto flex md:flex-row justify-start flex-col gap-2 md:mt-2 mt-4">
                          <button
                            className="py-2 px-3 bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-lg outline-none"
                            onClick={openFinishModalBtn}
                          >
                            Finish Meeting
                          </button>
                        </span>
                        <div className="flex flex-col justify-end w-full">
                          <div className="w-full text-right">
                            MEETING ID:{' '}
                            <span className="font-medium">
                              {' '}
                              {student.create_id}
                            </span>
                          </div>
                          <div className="w-full text-right">
                            STUDENT ID:{' '}
                            <span className="font-medium"> {student.id}</span>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <hr className="my-4 border border-gray-300" />
                    <p className="font-medium mb-1">Standby Meeting(s):</p>
                  </>
                ) : (
                  <div className="border border-blue-900 rounded-2xl px-2 py-4 mb-2">
                    <div className="flex md:flex-row flex-col justify-between md:px-4 px-0">
                      {/* Image */}
                      <div className="flex md:flex-row flex-col gap-x-3 justify-center items-center">
                        <div className="rounded-full overflow-hidden">
                          <img
                            src={defaultAvatar}
                            alt=""
                            className="w-32 h-24 object-cover rounded-full border-4 border-blue-700"
                          />
                        </div>
                        <div className="mt-4 md:mt-0 flex w-full flex-col justify-center items-center md:items-start">
                          <h3 className=" font-semibold md:text-start text-center">
                            {student.subject}
                          </h3>
                          <p className="md:mt-0 mt-2 text-gray-500 md:text-left text-center">
                            {student.f_name} {student.l_name}
                          </p>

                          <span className="md:text-left text-center mb-2">
                            <p>
                              Meeting Link:{' '}
                              <input
                                type="text"
                                value={student.meeting_link}
                                onChange={(e) => setMeetingLink(e.target.value)}
                                className="outline-none border border-blue-600 p-1 text-sm"
                              />{' '}
                            </p>
                          </span>
                          <span className="md:text-left text-center text-sm">
                            <p>
                              Meeting Topic:{' '}
                              <input
                                type="text"
                                value={student.topic}
                                className="outline-none border border-blue-600 p-1"
                              />{' '}
                            </p>
                          </span>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex flex-col md:items-end items-center">
                        <div className="font-normal md:mt-4 mt-2">
                          Date:{' '}
                          <span className="font-medium">{student.date}</span>
                        </div>
                        <div className="font-normal ">
                          Duration:{' '}
                          <span className="font-medium">
                            {student.duration}
                          </span>
                        </div>
                        <div className="font-normal ">
                          Time:{' '}
                          <span className="font-medium">
                            {student.start}:00 to {student.end}:00
                          </span>
                        </div>
                        <div className="font-normal ">
                          Status:{' '}
                          <span className="font-medium">
                            {' '}
                            {student.status}{' '}
                            <span className="font-normal">by</span>{' '}
                            {student.s_fname} {student.s_lname}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* <div className="w-full flex md:flex-row justify-between items-center flex-col gap-2 md:mt-2 mt-4">
                      <span className=" w-full mx-auto flex md:flex-row justify-start flex-col gap-2 md:mt-2 mt-4">
                        <button
                          className="py-2 px-3 bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-lg outline-none"
                          onClick={openFinishModalBtn}
                        >
                          Finish Meeting
                        </button>
                      </span>
                      <div className="flex flex-col justify-end w-full">
                        <div className="w-full text-right">
                          MEETING ID:{' '}
                          <span className="font-medium">
                            {' '}
                            {student.create_id}
                          </span>
                        </div>
                        <div className="w-full text-right">
                          STUDENT ID:{' '}
                          <span className="font-medium"> {student.id}</span>
                        </div>
                      </div>
                    </div> */}
                  </div>
                )}
              </article>
            ))}
          </div>
          <div className="">
            <div
              value={openFinishModal}
              id="popup-modal"
              tabIndex="-1"
              className={
                !openFinishModal
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
                    onClick={openFinishModalBtn}
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
                          htmlFor="student_id"
                          className="text-sm text-left mt-3"
                        >
                          Student ID
                        </label>
                        <input
                          type="text"
                          placeholder="Enter STUDENT ID"
                          name="student_id"
                          value={studentID}
                          onChange={(e) => {
                            setStudentID(e.target.value);
                          }}
                          className="w-full p-1 outline-none border border-blue-700"
                          maxLength={25}
                        />
                        <label
                          htmlFor="schedule_id"
                          className="text-sm text-left mt-3"
                        >
                          Schedule ID
                        </label>
                        <input
                          type="text"
                          placeholder="Enter SCHEDULE ID"
                          name="schedule_id"
                          value={scheduleID}
                          onChange={(e) => {
                            setScheduleID(e.target.value);
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
                      Press <span className="font-bold">'Yes'</span> to Finish
                      Meeting
                    </h3>
                    <button
                      data-modal-hide="popup-modal"
                      type="button"
                      className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 md:my-0 my-2"
                      onClick={handleFinishMeetingBtn}
                    >
                      Yes, I'm sure
                    </button>
                    <button
                      data-modal-hide="popup-modal"
                      type="button"
                      className="text-gray-700 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none  rounded-lg border border-gray-400 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10   outline-none"
                      onClick={openFinishModalBtn}
                    >
                      No, cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetBooking;
