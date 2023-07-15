import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const StudentResetPassword = () => {
  const navigate = useNavigate();
  const EMAIL_REGEX = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
  const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#]).{8,}$/;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [validToken, setValidToken] = useState(false);
  const { token } = useParams();

  const passwordRef = useRef();
  const conPasswordRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setMessage('');
    }, 10000);
  }, [message]);

  useEffect(() => {
    const validateToken = async () => {
      try {
        await axios.get(
          `http://localhost:8000/api/student/reset-password/${token}`
        );
        setValidToken(true);
      } catch (error) {
        setMessage(error.response.data.message);
      }
    };
    validateToken();
  }, [token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === '' && confirmPassword === '') {
      setMessage('Please fill up all input.');
      passwordRef.current.focus();
    } else if (password === '') {
      setMessage('Please fill password');
      passwordRef.current.focus();
    } else if (confirmPassword === '') {
      setMessage('Please confirm your password');
      conPasswordRef.current.focus();
    } else if (!PASSWORD_REGEX.test(password)) {
      passwordRef.current.focus();
      setMessage(
        'Password must have at least 1 uppercase letter, 1 number, 1 of the special characters "@" or "#", and total length of 8 or more characters.'
      );
    } else if (password !== confirmPassword) {
      setMessage(`Password didn't matched.`);
      passwordRef.current.focus();
    } else {
      try {
        const response = await axios.put(
          'http://localhost:8000/api/student/update-student-password',
          {
            token,
            password
          },
          {
            headers: {
              Authorization: localStorage.getItem('jwt'),
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache'
            },
            withCredentials: true
          }
        );
        setPassword('');
        setConfirmPassword('');
        setMessage('Password reset success. You can close this tab now.');
      } catch (error) {
        setMessage(error.response.data.message);
      }
    }
  };

  if (!validToken) {
    return (
      <div>
        <h2>Wait for response of the token</h2>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <>
      <section className="bg-gray-100 h-screen">
        <div className="custom-container flex items-center flex-col h-full">
          <h1 className="text-center mt-20">Student Reset Password</h1>
          <form onSubmit={handleSubmit} className="mt-10 max-w-[400px] w-full">
            <div className="flex flex-col items-start justify-center  ">
              <label htmlFor="" className="mb-1">
                This link will expires in one day. You can change your password
                now here.
              </label>
              <label className="font-medium mt-4">New Password:</label>

              <input
                ref={passwordRef}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="p-2 bg-white border-2 border-blue-900 focus:border-blue-700 outline-none rounded-xl w-full"
                placeholder="********"
              />
              <label className="font-medium mt-4">Confirm Password:</label>
              <input
                ref={conPasswordRef}
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="p-2 bg-white border-2 border-blue-900 focus:border-blue-700 outline-none rounded-xl w-full"
                placeholder="********"
              />

              <button
                type="submit"
                className="w-full p-2 mt-2 outline-none bg-blue-600 rounded-full font-medium text-white hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
          {/* Password reset success. */}
          {message && (
            <p
              className={
                message === 'Password reset success.'
                  ? 'max-w-[400px] mt-2 py-2 px-4 bg-green-200 text-green-700 rounded-2xl'
                  : 'max-w-[400px] mt-2 py-2 px-4 bg-orange-200 text-red-700 rounded-2xl'
              }
            >
              {message}
            </p>
          )}
        </div>
      </section>
    </>
  );

  // return (
  //   <section className="bg-gray-100 h-screen">
  //     <div className="custom-container flex items-center flex-col h-full">
  //       <div className="flex items-start justify-start max-w-[400px] w-full mt-5">
  //         <button
  //           onClick={() => navigate(-1)}
  //           className="flex gap-1 items-center jus px-3 py-1 bg-blue-600 text-white hover:bg-blue-700 rounded-full"
  //         >
  //           <AiOutlineLeft />
  //           <span>Back</span>
  //         </button>
  //       </div>
  //       <h1 className="text-center mt-20">Student Forgot password</h1>
  //       <form action="" method="POST" className="mt-10 max-w-[400px] w-full">
  //         <div className="flex flex-col  ">
  //           <label htmlFor="" className="mb-1">
  //             Please enter your email address. You will receive a link to create
  //             a new password via email.
  //           </label>

  //           <label htmlFor="email" className="font-medium my-2">
  //             Enter email
  //           </label>
  //           <input
  //             id="email"
  //             type="text"
  //             className="p-2 bg-white border-2 border-blue-900 focus:border-blue-700 outline-none rounded-xl"
  //             placeholder="example@email.com"
  //             value={emailInput}
  //             name="email"
  //             onChange={(e) => setEmailInput(e.target.value)}
  //             maxLength={75}
  //           />

  //           {errMsg && <p className="text-orange-600 mt-4">{errMsg}</p>}
  //           <button
  //             onClick={handleSubmitBtn}
  //             className="p-2 mt-2 outline-none bg-blue-600 rounded-full font-medium text-white hover:bg-blue-700"
  //           >
  //             Change Password
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   </section>
  // );
};

export default StudentResetPassword;
