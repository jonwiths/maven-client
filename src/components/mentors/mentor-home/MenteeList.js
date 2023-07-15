import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { BsBookmarkHeartFill, BsSearch } from 'react-icons/bs';

import data from './dashboard-data';

const MenteeList = () => {
  // const handleSearchBtn = () => {
  //   // console.log(search);

  //   searchRef.current.focus();

  //   getStudentBooking.filter((booking) =>
  //     booking.name.toLocaleLowerCase().includes(search)
  //   );
  // };

  const [getTimings, setGetTimings] = useState([]);
  useEffect(() => {
    const getBookedMentors = async () => {
      const response = await axios.get(
        'http://localhost:8000/api/mentor/get-own-timings',
        {
          headers: {
            Authorization: localStorage.getItem('jwt'),
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            withCredentials: true
          }
        }
      );
      setGetTimings(response.data);
    };
    getBookedMentors();
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const openModalBtn = () => {
    setOpenModal(!openModal);
  };

  const [scheduleID, setScheduleID] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setErrMsg('');
    }, 4000);
  }, [errMsg]);

  const handleDeleteScheduleTiming = async (e) => {
    e.preventDefault();
    try {
      if (scheduleID.trim() === '') {
        setErrMsg('Fill up SCHEDULE MEETIND ID ');
      } else if (scheduleID.trim().length < 15) {
        setErrMsg('MEETING ID must be 15 characters or more');
      } else {
        await axios.post(
          'http://localhost:8000/api/mentor/delete-own-timings',
          {
            sched_id: scheduleID
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
        setOpenModal(!openModal);
        window.location.reload();
      }
    } catch (err) {
      setErrMsg(err.response.data);
      // console.log(err.response.data);
    }
  };

  return (
    <section className=" w-full p-0 md:p-4 h-full">
      <div className="p-4 bg-gray-100 rounded-2xl ">
        <h1>Mentor Booking Summary</h1>
        {/* <div className="flex lg:flex-row flex-col justify-between my-6  ">
          <span className="flex justify-between items-center gap-2 border-2 p-1 lg:mb-0 mb-4">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search name here..."
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-1 outline-none border-none bg-gray-100"
              maxLength={20}
              autoComplete="false"
            />
            <span className="sm:block hidden">
              <BsSearch />
            </span>
            <button
              className="lg:block hidden py-2 px-4 rounded-2xl text-white bg-blue-600 hover:bg-blue-700"
              onClick={() => handleSearchBtn(search)}
            >
              Search
            </button>
          </span>
          <div className="">
            <h3>{new Date().toDateString()}</h3>
          </div>
        </div> */}

        {/* {search && (
          <p className="text-gray-500 mt-4">
            Search result of: <span>' {search} '</span>
          </p>
        )} */}
        {/* Table */}
        <div className="  overflow-scroll md:h-[600px] h-screen w-full  mt-6">
          <table className=" w-full text-left text-white p-4 rounded-2xl">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3 ">
                  meeting Schedule ID
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Schedule Date
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Schedule Duration
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Start to End
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-left">
              {data.map((booking, index) => (
                <tr
                  className={
                    booking.status === 'Posted'
                      ? 'text-gray-700 bg-blue-50 border-blue-900 border-b-2 gap-x-10 border-spacing-y-4'
                      : booking.status === 'Booked'
                      ? 'text-gray-700 bg-blue-200 border-blue-900 border-b-2 gap-x-10 border-spacing-y-4'
                      : 'text-gray-700 bg-red-200 border-blue-900 border-b-2 gap-x-10 border-spacing-y-4'
                  }
                  key={index}
                >
                  <td className=" px-6 py-4   ">{booking.id}</td>
                  <td className="px-6 py-4 ">{booking.date}</td>
                  <td className="px-6 py-4 ">{booking.duration} hour/s</td>
                  <td className="px-6 py-4  ">{booking.status}</td>
                  <td className="px-6 py-4  ">
                    {booking.start}:00 to {booking.end}:00
                  </td>
                  <td className="px-6 py-4 ">
                    <button
                      disabled={
                        booking.status === 'Finished' ||
                        booking.status === 'Posted'
                          ? false
                          : true
                      }
                      className={
                        booking.status === 'Booked'
                          ? 'p-2 bg-gray-700 rounded-lg text-white cursor-pointer'
                          : 'p-2 bg-red-600 hover:bg-red-700 rounded-lg text-white cursor-pointer'
                      }
                      onClick={openModalBtn}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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
                      Press <span className="font-bold">'Yes'</span> to confirm
                      Delete
                    </h3>
                    <button
                      data-modal-hide="popup-modal"
                      type="button"
                      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 md:my-0 my-2"
                      onClick={handleDeleteScheduleTiming}
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
        </div>
      </div>
    </section>
  );
};

export default MenteeList;
