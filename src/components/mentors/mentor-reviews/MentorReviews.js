import React, { useEffect, useState } from 'react';
import axios from 'axios';

import data from './review-data';
import defaultAvatar1 from '../../../assets/profiles/default-avatar-s.jpg';

const MentorReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    try {
      const getReviews = async () => {
        const response = await axios.get(
          'http://localhost:8000/api/mentor/get-reviews',
          {
            headers: {
              Authorization: localStorage.getItem('jwt'),
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              withCredentials: true
            }
          }
        );
        setReviews(response.data);
        // console.log(response.data);
      };
      getReviews();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <section className="rounded-section">
      <div className="custom-container">
        <h1>Mentor Reviews</h1>
        <div className=" overflow-x-scroll">
          <p className="my-4">Here's the feedback of your past students:</p>
          <div className="my-3">
            {data.map((review, index) => (
              <div
                className="flex md:flex-row flex-col  items-center p-6 border border-gray-300 overflow-x-scroll"
                key={index}
              >
                <div className="flex md:flex-row w-full flex-col md:items-start items-center gap-3">
                  <div className="">
                    <img
                      src={defaultAvatar1}
                      alt=""
                      className="rounded-full md:w-28  w-full h-24 border-blue-500 border-4"
                    />
                  </div>
                  <div className="flex md:items-start items-center md:w-full ">
                    <article className="md:text-left text-center ">
                      <h4 className="font-medium">{review.s_fname}</h4>
                      <p className="">
                        {' '}
                        STUDENT ID:{' '}
                        <span className="font-medium">{review.s_id}</span>{' '}
                      </p>
                      <p className="">
                        {' '}
                        Review ID:{' '}
                        <span className="font-medium">{review.id}</span>{' '}
                      </p>
                      <p className="text-gray-500 mt-3">Student feedback</p>
                      <p className="w-full p-1 border border-blue-600">
                        {review.comment}
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorReviews;
