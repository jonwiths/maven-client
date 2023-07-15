import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillCopy } from 'react-icons/ai';
import { BsBookmarkHeartFill } from 'react-icons/bs';

import data from './history-data';
import defaultAvatar from '../../../assets/profiles/default-avatar-s.jpg';

const MentorHistory = () => {
  const [history, setHistory] = useState([]);
  const [mentorLink, setMentorLink] = useState([]);

  const [comment, setComment] = useState('');
  const [rate, setRate] = useState('');

  const [historyID, setHistoryID] = useState('');
  const [mentorID, setMentorID] = useState('');

  const [openModal, setOpenModal] = useState(false);
  const openModalBtn = (e) => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    const getBookedMentors = async () => {
      const response = await axios.get(
        'http://localhost:8000/api/mentor/get-mentor-history',
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

  const [isExpand, setIsExpand] = useState(false);
  const expandBtn = (e) => {
    e.preventDefault();
    setIsExpand(!isExpand);
  };

  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setErrMsg('');
    }, 4000);
  }, [errMsg]);

  return (
    <>
      <section className="rounded-section">
        <div className="custom-container">
          <h1>Mentor History</h1>
          <div className="max-h-[80vh] overflow-x-scroll">
            <div className="">
              <div className="">
                <p className="my-4">
                  You can take a look back your past meetings anytime here:
                </p>
              </div>
              <div className="">
                {data.map((mentor, index) => (
                  <article key={index} className="">
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
                              {mentor.s_fname} {mentor.s_lname}
                            </h3>

                            <p className="text-gray-500">Student</p>

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
                              {mentor.duration}
                            </span>
                          </div>
                          <div className="font-normal ">
                            Time:{' '}
                            <span className="font-medium">
                              {mentor.start} to {mentor.end}
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
                            Student ID:{' '}
                            <span className="md:mt-0 mt-2 font-medium">
                              {mentor.s_id}
                            </span>
                          </p>
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

export default MentorHistory;
