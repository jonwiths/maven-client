import React, { useContext, useEffect, useRef, useState } from 'react';

import { FiUser } from 'react-icons/fi';
import { TbMinusVertical } from 'react-icons/tb';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { HiExclamationCircle } from 'react-icons/hi';
import { MentorAuthContext } from '../../context/mentorAuthContext';
import MentorLoginRedirect from './MentorLoginRedirect';

const MentorLogin = () => {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [m_email, setEmail] = useState('');
  const [m_password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  const { login } = useContext(MentorAuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (m_email.trim() === '' && m_password.trim() === '') {
        setLoginStatus('Please fill up all the input.');
        emailRef.current.focus();
      } else if (m_email.trim() === '') {
        setLoginStatus('Email is empty.');
        emailRef.current.focus();
      } else if (m_password.trim() === '') {
        setLoginStatus('Password is empty.');
        passwordRef.current.focus();
      } else {
        await login({ m_email, m_password });
        navigate(`/mentor/`);
      }
    } catch (err) {
      setLoginStatus(err.response.data);
      setPassword('');
      passwordRef.current.focus();
    }
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoginStatus('');
    }, 4000);
  }, [loginStatus]);

  return (
    <>
      <MentorLoginRedirect />
      <section>
        <div className="custom-container flex flex-col md:flex-row lg:justify-around justify-center items-center">
          <div className="w-full h-full hidden md:block ">
            {/*bg-homepage-bg */}
            <div className="flex items-center justify-center w-full h-screen">
              <div className="text-left">
                <h1 className="font-semibold text-7xl pb-10 leading-tight">
                  Sign In and <br /> Start
                  <span className="text-blue-600"> Teaching!</span>
                </h1>
                <h3 className="leading-normal">
                  Want to become a mentor?
                  <br />
                  You can{' '}
                  <Link
                    to="/become-a-mentor"
                    className="text-blue-700 font-semibold"
                  >
                    Apply here.
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="w-full md:mt-10 mt-0  ">
            <div className="max-w-[350px] mx-auto p-4">
              <h2 className="pb-2">Welcome, Our Mentor.</h2>
              <p className="font-semibold pb-4 pt-2">
                Please enter your details.
              </p>
              <form
                action=""
                id="login-form"
                className="login-form w-full"
                method="POST"
              >
                {loginStatus && (
                  <p
                    className={
                      loginStatus !== 'Account creation successful!'
                        ? 'error--msg-landing'
                        : 'success--msg-landing'
                    }
                  >
                    <HiExclamationCircle
                      className={loginStatus !== null ? 'inline' : 'hidden'}
                      size={19}
                      style={{ marginRight: '3px' }}
                    />
                    {loginStatus}
                  </p>
                )}
                <div className="w-full max-w-[350px] ">
                  <span className="w-full flex items-center justify-center p-4 gap-1 bg-white rounded-xl mb-2">
                    <FiUser size={25} />
                    <TbMinusVertical size={25} />
                    <input
                      ref={emailRef}
                      type="email"
                      className="outline-none border-none w-full p-1 bg-transparent"
                      placeholder="Email"
                      name="m_email"
                      autoComplete="off"
                      value={m_email}
                      onChange={(e) => setEmail(e.target.value)}
                      required={true}
                    />
                  </span>
                  <span className="w-full flex items-center justify-center p-4 gap-1 bg-white rounded-xl mb-4">
                    <RiLockPasswordLine size={25} />
                    <TbMinusVertical size={25} />
                    <input
                      ref={passwordRef}
                      type="password"
                      name="m_password"
                      value={m_password}
                      className="outline-none border-none w-full p-1 bg-transparent"
                      placeholder="Password"
                      autoComplete="off"
                      onChange={(e) => setPassword(e.target.value)}
                      required={true}
                    />
                  </span>
                </div>
                <div className="max-w-[350px] ">
                  <div className="flex md:justify-between flex-col sm:flex-row sm:justify-start  mb-3">
                    <Link
                      to="/mentor-forgot-password"
                      className="text-blue-700 hover:underline "
                    >
                      Change password?
                    </Link>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm">
                    By clicking the Login button you already read and agree to
                    our{' '}
                    <Link
                      to="/terms-and-conditions"
                      className="underline hover:font-medium"
                      target="_blank"
                    >
                      Terms and conditions
                    </Link>
                    .{' '}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleLogin}
                  className="main-btn-large"
                >
                  LOGIN
                </button>
              </form>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>
              <Link
                className="px-7 py-3 bg-blue-50 text-gray-800 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                // style={{ backgroundColor: '#3b5998' }}
                to="/login"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                {/* <!-- Facebook --> */}
                Log in as a student
              </Link>

              <div className="md:hidden block mt-10">
                <p className="leading-normal">
                  If don't have an account <br />
                  You can{' '}
                  <Link
                    to="/become-a-mentor"
                    className="text-blue-700 font-semibold"
                  >
                    Register here.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentorLogin;
