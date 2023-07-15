import axios from 'axios';
import moment, { duration } from 'moment';
import React, { useEffect, useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { BsInfoCircle } from 'react-icons/bs';

const MentorTimings = () => {
  const [selectedDuration, setSelectedDuration] = useState('1');
  const [meetingLink, setMeetingLink] = useState('To be followed');

  const [selectedStart, setSelectedStart] = useState('8');
  const [selectedEnd, setSelectedEnd] = useState('9');

  const [topic, setTopic] = useState('');

  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));

  const [timingStatus, setTimingStatus] = useState('');

  const onChangeDate = (e) => {
    const newDate = moment(new Date(e.target.value)).format('YYYY-MM-DD');
    setDate(newDate);
  };

  useEffect(() => {
    setTimeout(() => {
      setTimingStatus('');
    }, 5000);
  }, [timingStatus]);

  const handleSubmitTiming = async (e) => {
    e.preventDefault();
    if (selectedDuration === 'none') {
      setTimingStatus('Please fill up selected DURATION.');
    } else if (selectedEnd === 'none' || selectedStart === 'none') {
      setTimingStatus('Please fill up START or END.');
    } else if (date <= moment(new Date()).format('YYYY-MM-DD')) {
      setTimingStatus('Choosing CURRENT DAY is INVALID.');
    } else {
      try {
        await axios.post(
          'http://localhost:8000/api/mentor/set-sched-timings',
          {
            duration: selectedDuration,
            start: selectedStart,
            end: selectedEnd,
            topic: topic.trim(),
            date,
            meeting_link: meetingLink.trim()
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
        setSelectedDuration('none');
        setSelectedStart('none');
        setSelectedEnd('none');
        setTopic('');
        setTimingStatus('Schedule has been added.');
      } catch (err) {
        setTimingStatus(err.response.data);
        // console.log(err.response.data);
      }
    }
  };

  return (
    <section className="rounded-section">
      <div className="custom-container ">
        <h1 className="mb-4">Schedule Your Free Time</h1>
        <h3 className="mb-10">Create your free time to teach</h3>
        <div className="md:max-w-[600px] w-full mx-auto">
          <div className="flex md:flex-row flex-col gap-x-4 justify-between ">
            <div className="">
              <p className="mt-4 mb-2 font-medium">Select Meeting Duration</p>

              <select
                id="duration"
                className="select-input-timings"
                name="duration"
                // defaultValue={'none'}
                value={selectedDuration}
                onChange={(e) => {
                  setSelectedDuration(e.target.value);
                  setSelectedEnd(
                    parseInt(e.target.value) + parseInt(selectedStart)
                  );
                  console.log('selectedEnd: ', selectedEnd);
                }}
              >
                <option disabled={true} value="none">
                  Duration
                </option>
                <option value="1">1 hour</option>
                <option value="2">2 hours</option>
                <option value="3">3 hours</option>
                <option value="4">4 hours</option>
                <option value="5">5 hours</option>
              </select>
              <p className="text-sm pl-1 text-red-500">required</p>
            </div>
            {/* Start time */}
            <div className="">
              <p className="mt-4 mb-2 font-medium">
                Select Meeting Start to End Time
              </p>
              <div className="flex md:flex-row flex-col gap-2 md:items-center items-start">
                <select
                  id="duration"
                  className="select-input-timings"
                  // defaultValue={'none'}
                  value={selectedStart}
                  onChange={(e) => {
                    setSelectedStart(e.target.value);
                    setSelectedEnd(
                      parseInt(e.target.value) + parseInt(selectedDuration)
                    );
                    console.log('selectedEnd: ', parseInt(selectedEnd));
                  }}
                  name="start"
                >
                  <option disabled={true} value="none">
                    Start
                  </option>
                  <option value="8">8:00 AM</option>
                  <option value="9">9:00 AM</option>
                  <option value="10">10:00 AM</option>
                  <option value="11">11:00 AM</option>
                  <option value="13">1:00 PM</option>
                  <option value="14">2:00 PM</option>
                  <option value="15">3:00 PM</option>
                  <option value="16">4:00 PM</option>
                  <option value="17">5:00 PM</option>
                </select>

                <p className="">to</p>
                <select
                  disabled={true}
                  id="duration"
                  className="select-input-timings"
                  // defaultValue={'none'}
                  value={selectedEnd}
                  onChange={(e) => {
                    setSelectedEnd(selectedStart + selectedDuration);
                    console.log(selectedEnd);
                  }}
                  name="end"
                >
                  <option disabled={true} value="none">
                    End
                  </option>
                  <option value="9">9:00 AM</option>
                  <option value="10">10:00 AM</option>
                  <option value="11">11:00 AM</option>
                  <option value="12">12:00 PM</option>
                  <option value="13">1:00 PM</option>
                  <option value="14">2:00 PM</option>
                  <option value="15">3:00 PM</option>
                  <option value="16">4:00 PM</option>
                  <option value="17">5:00 PM</option>
                  <option value="18">6:00 PM</option>
                  <option value="19">7:00 PM</option>
                  <option value="20">8:00 PM</option>
                  <option value="21">9:00 PM</option>
                  <option value="22">10:00 PM</option>
                </select>
              </div>
              <p className="text-sm pl-1 text-red-500">required</p>
            </div>
          </div>
          <div className="w-full">
            <p className="mt-4 mb-2 font-medium">Select Meeting Date</p>
            <input
              min={moment().add(1, 'day').format('YYYY-MM-DD')}
              type="date"
              name="date"
              id="sched-date"
              value={date}
              onChange={onChangeDate}
              className="select-input-timings"
            />
            <p className="text-sm pl-1 text-red-500">required</p>
          </div>

          <hr className="mb-6 mt-10 bg-black border" />
          <div className=" flex md:flex-row flex-col gap-x-5 justify-between mt-4 ">
            {/* <div className="w-full">
              <p className="mt-4 mb-2 font-medium">Additional Info of Topic</p>
              <input
                type="text"
                className="select-input-timings cursor-auto"
                placeholder="Type something..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                name="topic"
                maxLength={75}
              />
            </div> */}

            <div className="w-full">
              <p className="mt-4 mb-2 font-medium">
                Additional Info of Topic{' '}
                <span className="text-sm pl-2 text-orange-500">optional*</span>
              </p>

              <p className="text-sm pl-1 text-gray-500">
                Maximun of 255 characters*
              </p>
              <textarea
                id=""
                // cols="20"
                rows="5"
                className="select-input-timings w-full cursor-auto mb-0"
                placeholder="If you have additional topic to teach, please write it down here."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                name="topic"
                maxLength={255}
              ></textarea>
            </div>
          </div>

          <div className="w-full">
            <p className="mt-4 mb-2 font-medium">
              Enter Meeting Link{' '}
              <span className="text-sm pl-2 text-orange-500">optional*</span>
            </p>
            <textarea
              rows="5"
              type="text"
              className="select-input-timings w-full cursor-auto mb-0"
              placeholder="https://www.this-is-my-meeting-link.com/maven-edu"
              // value={meetingLink}
              onChange={(e) => setMeetingLink(e.target.value)}
              name="meeting_link"
              maxLength={255}
            />
          </div>

          <div className="mt-4 max-w-[700px]  w-full p-4 border border-gray-500 rounded-xl shadow-xl">
            <p className="mb-4 font-medium text-red-600">
              Please Read the summary carefully
            </p>
            {/* <div className="flex overflow-y-auto gap-3">
              <button
                className="booking-day-btn"
                onClick={(e) => {
                  setSelectedDay(e.target.value);
                }}
                value="Monday"
                name="day"
              >
                Monday
              </button>
              <button
                className="booking-day-btn"
                onClick={(e) => {
                  setSelectedDay(e.target.value);
                }}
                value="Tuesday"
                name="day"
              >
                Tuesday
              </button>
              <button
                className="booking-day-btn"
                onClick={(e) => {
                  setSelectedDay(e.target.value);
                }}
                value="Wednesday"
                name="day"
              >
                Wednesday
              </button>
              <button
                className="booking-day-btn"
                onClick={(e) => {
                  setSelectedDay(e.target.value);
                }}
                value="Thursday"
                name="day"
              >
                Thursday
              </button>
              <button
                className="booking-day-btn"
                onClick={(e) => {
                  setSelectedDay(e.target.value);
                }}
                value="Friday"
                name="day"
              >
                Friday
              </button>
              <button
                className="booking-day-btn"
                onClick={(e) => {
                  setSelectedDay(e.target.value);
                }}
                value="Saturday"
                name="day"
              >
                Saturday
              </button>
            </div> */}
            <hr className="my-6 bg-black border" />
            <div className="">
              <div className="flex justify-between">
                <h4 className="font-medium">Schedule Summary</h4>{' '}
              </div>
              <div className="mt-2  flex flex-col">
                {selectedDuration && (
                  <span
                    className="w-full p-2 rounded-2xl bg-gray-500 font-medium text-white flex md:flex-row 
                  flex-col gap-2 my-1"
                  >
                    <span className="flex gap-2 md:flex-row flex-col">
                      {' '}
                      | Duration
                      <p className="font-light"> - {selectedDuration} hour/s</p>
                    </span>

                    {selectedStart && (
                      <span className="flex gap-2 md:flex-row flex-col">
                        {' '}
                        | Start-End
                        <p className="font-light">
                          {' '}
                          - {selectedStart}:00 to {selectedEnd}:00
                        </p>
                      </span>
                    )}
                  </span>
                )}

                {date && (
                  <span className="w-full p-2 rounded-2xl bg-gray-500 font-medium text-white flex md:flex-row flex-col gap-2 my-1">
                    <span className="flex gap-2 md:flex-row flex-col">
                      {' '}
                      | Date
                      <p className="font-light"> - {date}</p>
                    </span>
                  </span>
                )}

                {topic && (
                  <span className="w-full p-2 rounded-2xl bg-gray-500 font-medium text-white flex md:flex-row flex-col gap-2 my-1">
                    <p>| topic - {topic}</p>
                  </span>
                )}
                {meetingLink && (
                  <span className="w-full p-2 rounded-2xl bg-gray-500 font-medium text-white flex md:flex-row flex-col gap-2 my-1">
                    <p>| Meeting Link - {meetingLink}</p>
                  </span>
                )}
              </div>
              <p className="text-sm my-4 flex md:items-center items-start  gap-1 md:text-center">
                <BsInfoCircle
                  size={20}
                  title="Be sure to check the schedule summary carefully to avoid
                misunderstanding."
                  className="md:block hidden"
                />
                Be sure to check the schedule summary carefully to avoid
                misunderstanding.
              </p>
            </div>
          </div>
          {timingStatus && (
            <p
              className={
                timingStatus === 'Schedule has been added.'
                  ? 'w-full text-green-600 mt-3'
                  : 'w-full text-red-600 mt-3'
              }
            >
              {timingStatus}
            </p>
          )}

          <div className="mt-4">
            <button className="btn-colored" onClick={handleSubmitTiming}>
              Create Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorTimings;
