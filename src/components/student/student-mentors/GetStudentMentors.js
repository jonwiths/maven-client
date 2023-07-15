import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../../routes/loading/Loading';
import axios from 'axios';

import defaultAvatar from '../../../assets/profiles/default-avatar-m.jpg';

const GetStudentMentors = () => {
  const [mentors, setMentors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    try {
      const getAllMentors = async () => {
        const response = await axios.get(
          'http://localhost:8000/api/student/get-all-mentors'
        );
        setMentors(response.data);
        setIsLoading(false);
      };
      getAllMentors();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="mt-6 max-h-[80vh] overflow-x-scroll">
      <p className="mb-4">Find the mentor to learn with:</p>
      <div className="grid md:grid-cols-2 grid-rows-2 gap-3 place-items-center  items-stretch">
        {isLoading ? (
          <Loading />
        ) : (
          mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="w-full max-w-sm bg-white border-2 border-gray-300 rounded-xl md:mb-10 mb-5"
            >
              <img
                className="p-8 rounded-t-lg"
                src={defaultAvatar}
                // src="/docs/images/products/apple-watch.png"
                alt="product "
              />

              <div className="px-5 pb-5 ">
                <span href="!#">
                  <h5 className="md:text-2xl text-xl font-semibold tracking-tight text-gray-700 ">
                    {mentor.f_name} {mentor.l_name}
                  </h5>
                </span>
                <div className="flex items-center mt-2.5 mb-5">
                  {/* <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg> */}
                  <span className="bg-blue-50 text-blue-700 font-semibold mr-2 px-2.5 py-0.5 rounded :bg-blue-200 ">
                    {mentor.subject}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-blue-600 ">
                    {mentor.price}
                  </span>
                  <div className="">
                    <Link
                      to={`/search/id=${mentor.id}`}
                      className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                      Visit Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GetStudentMentors;
