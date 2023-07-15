import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillCopy } from 'react-icons/ai';
import { BsBookmarkHeartFill } from 'react-icons/bs';

import defaultAvatar from '../../../assets/profiles/default-avatar-m.jpg';
import data from './history-data';

const StudentHistory = () => {
  const [history, setHistory] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [mentorLink, setMentorLink] = useState([]);

  const [rate, setRate] = useState('');
  const [comment, setComment] = useState('');

  const [historyID, setHistoryID] = useState('');
  const [mentorID, setMentorID] = useState('');

  const [openModal, setOpenModal] = useState(false);
  const openModalBtn = (e) => {
    setOpenModal(!openModal);
  };

  const [isExpand, setIsExpand] = useState(null);
  const expandBtn = (id) => {
    if (isExpand === id) {
      return setIsExpand(null);
    }
    setIsExpand(id);
  };

  // const [selected, setSelected] = useState(null);

  // const handleToggle = (id) => {
  //   if (selected === id) {
  //     return setSelected(null);
  //   }
  //   setSelected(id);
  // };

  useEffect(() => {
    const getBookedMentors = async () => {
      const response = await axios.get(
        'http://localhost:8000/api/student/get-student-history',
        {
          headers: {
            Authorization: localStorage.getItem('jwt'),
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            withCredentials: true
          }
        }
      );
      setHistory(response.data);
    };
    getBookedMentors();
  }, []);

  // useEffect(() => {
  //   const getStudentReviews = async () => {
  //     const response = await axios.get(
  //       'http://localhost:8000/api/student/get-student-reviews',
  //       {
  //         headers: {
  //           Authorization: localStorage.getItem('jwt'),
  //           'Content-Type': 'application/json',
  //           'Cache-Control': 'no-cache',
  //           withCredentials: true
  //         }
  //       }
  //     );
  //     setReviews(response.data);
  //   };
  //   getStudentReviews();
  // }, []);

  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setErrMsg('');
    }, 4000);
  }, [errMsg]);

  const storedData = localStorage.getItem('user');
  const parsedData = JSON.parse(storedData);
  const result = parsedData.result;
  // console.log(result.id);

  const submitCommentBtn = async (e) => {
    const matchingReviews = reviews.find(
      (item) =>
        item.id === historyID &&
        item.mentor_id === mentorID &&
        item.student_id === result.id
    );
    // console.log(`START History id: `, historyID);
    // console.log(`START mentorID: `, mentorID);
    // console.log(`START student id: `, result.id);
    if (comment.trim() === '') {
      setErrMsg('Please insert your comment before submit.');
    } else if (comment.trim().length <= 10) {
      setErrMsg('Please insert at least 10 words on your comment.');
    } else if (matchingReviews) {
      // console.log(`ALREADY History id: `, historyID);
      // console.log(`ALREADY mentorID: `, mentorID);

      setErrMsg('You have already reviewed this mentor.');
    } else {
      // console.log(`ELSE History id: `, historyID);
      // console.log(`ELSE mentorID: `, mentorID);
      await axios.post(
        'http://localhost:8000/api/student/set-student-review',
        {
          history_id: historyID,
          mentor_id: mentorID,
          comment: comment
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

      setErrMsg('Review Sent!');
      setHistoryID('');
      setMentorID('');
      setOpenModal(!openModal);
      setComment('');
    }
  };

  return (
    <>
      <section className="rounded-section">
        <div className="custom-container">
          <h1>Student History</h1>
          <div className="max-h-[80vh] overflow-x-scroll">
            <div className="">
              <div className="">
                <p className="my-4">
                  You can take a look back your past meetings anytime here:
                </p>
              </div>
              <div className="">
                {data.map((mentor, index) => (
                  <article key={mentor.id} className="">
                    <div className="border border-blue-900 rounded-2xl px-2 py-4 mb-2">
                      <div className="flex md:flex-row flex-col justify-between md:px-4 px-0">
                        {/* Image */}
                        <div className="flex md:flex-row flex-col gap-x-3 justify-center items-center">
                          <div className="rounded-full overflow-hidden">
                            <img
                              src={defaultAvatar}
                              alt=""
                              className="w-24 h-24 object-cover rounded-full border-4 border-blue-700"
                            />
                          </div>
                          <div className="flex flex-col justify-center items-center md:items-start">
                            <h3 className="font-semibold md:text-start text-center">
                              {mentor.m_fname} {mentor.m_lname}
                            </h3>

                            <p>
                              Subject:{' '}
                              <span className="md:mt-0 mt-2 text-gray-500">
                                {mentor.subject}
                              </span>
                            </p>

                            <p className="md:mt-0 mt-2 text-center ">
                              Date Ended: {mentor.date_ended}
                            </p>
                            <div className="font-normal text-center  gap-2 mb-2">
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

                            <p className="md:mt-0 mt-2 ">
                              Meeting ID:{' '}
                              <span className="md:mt-0 mt-2  font-medium">
                                {mentor.id}
                              </span>
                            </p>
                          </div>
                        </div>
                        {/* Content */}
                        <div className="flex flex-col md:items-end items-center">
                          <div className="font-normal md:mt-4 mt-2">
                            Date:{' '}
                            <span className="font-medium">{mentor.date}</span>
                          </div>
                          <div className="font-normal ">
                            Duration:{' '}
                            <span className="font-medium">
                              {mentor.duration} hour(s)
                            </span>
                          </div>
                          <div className="font-normal ">
                            Time:{' '}
                            <span className="font-medium">
                              {mentor.start}:00 to {mentor.end}:00
                            </span>
                          </div>
                          <p className="md:mt-0 mt-2 ">
                            Status:{' '}
                            <span className="font-medium text-red-600">
                              {' '}
                              {mentor.status}
                            </span>
                          </p>
                          <p className="md:mt-0 mt-2 ">
                            Mentor ID:{' '}
                            <span className="md:mt-0 mt-2 font-medium">
                              {mentor.m_id}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="w-full cursor-pointer">
                        {isExpand ? (
                          <div className="">
                            <form method="POST" className="mt-2 ">
                              <p
                                className="my-1 w-full p-2 bg-blue-700 text-white text-center"
                                onClick={() => expandBtn(mentor.id)}
                              >
                                Hide this section
                              </p>
                              <p className="md:text-left text-center">
                                Make your mentor level up by leaving a comment
                              </p>
                              <div className="flex flex-col mt-2">
                                <label htmlFor="comment" className="text-sm">
                                  Enter your comment
                                </label>
                                <input
                                  type="text"
                                  name="comment"
                                  className="w-full border-2 border-blue-700 p-2 outline-none"
                                  placeholder="Type something here"
                                  maxLength={255}
                                  value={comment}
                                  onChange={(e) => setComment(e.target.value)}
                                />
                                <p className="text-sm mt-1 text-orange-700">
                                  NOTE: We don't have a number rating in our
                                  reviews, just tell them what you feel before
                                  and after your session.
                                </p>
                                <p className="my-1 text-red-600">
                                  {errMsg && errMsg}
                                </p>
                              </div>
                            </form>
                            <button
                              className="bg-blue-600 hover:bg-blue-700 md:w-fit p-2 text-white mt-2 font-medium rounded-lg"
                              onClick={openModalBtn}
                            >
                              Submit comment
                            </button>
                          </div>
                        ) : (
                          <p
                            className="my-1 w-full p-2 bg-blue-700 text-white text-center"
                            onClick={() => expandBtn(mentor.id)}
                          >
                            Leave a feedback
                          </p>
                        )}
                      </div>
                    </div>
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
                                    maxLength={17}
                                  />

                                  <label
                                    htmlFor="history_id"
                                    className="text-sm text-left mt-3"
                                  >
                                    History ID
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Enter History ID"
                                    name="history_id"
                                    value={historyID}
                                    onChange={(e) => {
                                      setHistoryID(e.target.value);
                                    }}
                                    className="w-full p-1 outline-none border border-blue-700"
                                    maxLength={17}
                                  />
                                </form>
                                <p className="text-left mt-2 text-orange-500">
                                  {errMsg && errMsg}
                                </p>
                              </div>
                              <h3 className="my-5 text-lg font-normal text-gray-800 ">
                                Press <span className="font-bold">'Yes'</span>{' '}
                                to send your review to the mentor
                              </h3>
                              <button
                                data-modal-hide="popup-modal"
                                type="button"
                                className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 md:my-0 my-2"
                                onClick={submitCommentBtn}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentHistory;
