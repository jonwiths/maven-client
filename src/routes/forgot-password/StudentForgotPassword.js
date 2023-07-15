import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentForgotPassword = () => {
  const navigate = useNavigate();
  const EMAIL_REGEX = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
  const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#]).{8,}$/;
  const emailRef = useRef();

  // const [userID, setUserID] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setErrMsg('');
    }, 5000);
  }, [errMsg]);

  const handleSubmitBtn = async (e) => {
    e.preventDefault();

    const getBookedMentors = async () => {
      if (emailInput.trim() === '') {
        window.alert('Please fill up all input');
      } else if (!EMAIL_REGEX.test(emailInput)) {
        window.alert('Invalid email format');
      } else {
        try {
          await axios.post(
            'http://localhost:8000/api/student/set-student-forgot-password',
            { email: emailInput },
            {
              headers: {
                Authorization: localStorage.getItem('jwt'),
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
              },
              withCredentials: true
            }
          );
          setEmailInput('');
          setErrMsg('Email link to change password sent.');
          emailRef.current.focus();
        } catch (err) {
          setErrMsg(err.response.data.error);
          console.log(err);
          console.log(err.response);
        }
      }
    };

    getBookedMentors();

    console.log(errMsg);
  };

  return (
    <section className="bg-gray-100 h-screen">
      <div className="custom-container flex items-center flex-col h-full">
        <div className="flex items-start justify-start max-w-[400px] w-full mt-5">
          <button
            onClick={() => navigate(-1)}
            className="flex gap-1 items-center jus px-3 py-1 bg-blue-600 text-white hover:bg-blue-700 rounded-full"
          >
            <AiOutlineLeft />
            <span>Back</span>
          </button>
        </div>
        <h1 className="text-center mt-20">Student Forgot password</h1>
        <form action="" method="POST" className="mt-10 max-w-[400px] w-full">
          <div className="flex flex-col  ">
            <label htmlFor="" className="mb-1">
              Please enter your email address. You will receive a link to create
              a new password via email.
            </label>

            <label htmlFor="email" className="font-medium my-2">
              Enter email
            </label>
            <input
              id="email"
              type="text"
              className="p-2 bg-white border-2 border-blue-900 focus:border-blue-700 outline-none rounded-xl"
              placeholder="example@email.com"
              value={emailInput}
              name="email"
              onChange={(e) => setEmailInput(e.target.value)}
              maxLength={75}
            />

            {errMsg && <p className="text-orange-600 mt-4">{errMsg}</p>}
            <button
              onClick={handleSubmitBtn}
              className="p-2 mt-2 outline-none bg-blue-600 rounded-full font-medium text-white hover:bg-blue-700"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default StudentForgotPassword;
