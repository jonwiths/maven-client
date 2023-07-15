import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MentorPersonalInfo from './MentorPersonalInfo';
import MentorEducation from './MentorEducation';
import MentorExperience from './MentorExperience';

const MentorProfileSettings = () => {
  const [fbLink, setFbLink] = useState('');
  const [linkedInLink, setLinkedInLink] = useState('');

  const handleSocialMediaBtn = async (e) => {
    e.preventDefault();
    if (fbLink.trim() === '' || linkedInLink.trim() === '') {
      window.alert('Invalid both empty input');
    } else {
      await axios.put(
        'http://localhost:8000/api/mentor/update/social',
        {
          fb_link: fbLink,
          linked_in_link: linkedInLink
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
      setFbLink('');
      setLinkedInLink('');
    }
  };

  return (
    <section className="rounded-section">
      <div className="custom-container">
        <h1>Mentor Profile Settings</h1>

        <div className="p-6 border border-gray-300 my-6 border-b-2 border-b-blue-600">
          <h3 className="font-medium">Social Media</h3>
          <p className="my-2 text-sm font-medium text-red-400">
            NOTE: This is a batch update format. You need to update all the
            input, leaving one blank before saving will affect your social media
            info.
          </p>
          <hr className="my-5 border border-gray-200" />
          <form
            className="flex md:flex-row flex-col items-center gap-4"
            method="POST"
          >
            <div className="flex  flex-col justify-between w-full ">
              <p className="mb-2 font-medium">Enter fb link </p>
              <input
                type="text"
                id=""
                name="fb_link"
                value={fbLink}
                className="w-full p-3 border-2 border-gray-700 outline-none rounded-2xl mb-3"
                maxLength={255}
                placeholder="Type your updated fb profile link here"
                onChange={(e) => setFbLink(e.target.value)}
              />
            </div>
            <div className="flex  flex-col justify-between w-full ">
              <p className="mb-2 font-medium">Enter linked in link </p>
              <input
                type="text"
                id=""
                name="linked_in_link"
                value={linkedInLink}
                className="w-full p-3 border-2 border-gray-700 outline-none rounded-2xl mb-3"
                maxLength={255}
                placeholder="Type your updated linked in profile link here"
                onChange={(e) => setLinkedInLink(e.target.value)}
              />
            </div>
          </form>
          <button onClick={handleSocialMediaBtn} className="small-blue-btn">
            Update Social Media Links
          </button>
        </div>

        <MentorPersonalInfo />
        <MentorEducation />
        <MentorExperience />
      </div>
    </section>
  );
};

export default MentorProfileSettings;
