import React from 'react';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';

import aboutTeam from '../../localdata/landing-page/aboutTeam';

const Team = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-10 ">
        {aboutTeam.map((member) => (
          <div className="mb-6 lg:mb-0 hover:-translate-y-4" key={member.id}>
            <div className="bg-white block rounded-lg shadow-lg">
              <div className=" bg-no-repeat bg-cover">
                <img
                  src={member.img_url}
                  className="w-full rounded-t-lg"
                  alt="..."
                />
              </div>
            </div>

            <div className="p-6 mb-6 text-gray-50 bg-blue-700 border-blue-700 rounded-br-lg rounded-bl-lg outline-none shadow-none">
              <h4 className="font-bold">{member.name}</h4>
              <p>{member.role}</p>
              <div className="flex items-center gap-3 justify-center mt-3">
                <a
                  href={member.linked_in}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin size={20} />
                </a>
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
