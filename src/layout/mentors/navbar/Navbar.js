import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { HiMenuAlt2 } from 'react-icons/hi';
import { AiOutlineCloseCircle, AiFillCaretDown } from 'react-icons/ai';

import logo from '../../../assets/logos/logo-main.png';
import defaultAvatar from '../../../assets/profiles/default-avatar-m.jpg';
import axios from 'axios';
// import sampleProfile from '../../../assets/profile/profile-alex.webp';

const MNavbar = () => {
  const [userClick, setUserClick] = useState(false);
  const [notifClick, setNotifClick] = useState(false);
  const [burgerBtn, setbBurgerBtn] = useState(false);

  const [currentMentor, setCurrentMentor] = useState([]);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/mentor/current-mentor',
          {
            headers: {
              Authorization: localStorage.getItem('jwt'),
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              withCredentials: true
            }
          }
        );
        setCurrentMentor(response.data);
      } catch (err) {
        if (err) {
          console.log(err);
          return err;
        }
      }
    };
    getCurrentUser();
  }, []);

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      axios.post('http://localhost:8000/api/mentor/auth/logout', {
        headers: {
          Authorization: localStorage.getItem('jwt'),
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          withCredentials: true
        }
      });

      localStorage.clear();
      window.location.reload();
      navigate('/mentor-login');
    } catch (err) {
      return err;
    }
  };

  return (
    <>
      <div className="max-h-[10vh]">
        <nav className="fixed min-w-full w-full top-0 z-999 bg-white ">
          <div className="">
            <div className="nav-container w-full h-1/6 flex items-center justify-between p-4 shadow-lg">
              {/* Left */}
              <div className="left ">
                <span className="flex items-center gap-1 font-semibold">
                  <img
                    src={logo}
                    alt="maven logo"
                    className="w-10 outline-none border-none"
                  />
                  Maven-edu
                </span>
              </div>

              {/* Right */}
              <div className="right md:flex hidden gap-3 ">
                <div className="search flex items-center gap-1 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-lg py-1 px-2">
                  <p className="p-2 font-medium cursor-pointer">
                    E-Mentor Web-Based App
                  </p>
                </div>
                <div className="flex items-center gap-x-4 ">
                  <button
                    onClick={() => {
                      setUserClick(!userClick);
                      if (notifClick) {
                        setNotifClick(!notifClick);
                      }
                    }}
                  >
                    <img
                      src={defaultAvatar}
                      alt="profile pic"
                      className="w-10 rounded-full border-2 border-blue-700"
                    />
                  </button>
                  <div
                    className={
                      userClick
                        ? 'w-full md:w-auto bg-gray-200 rounded-xl absolute top-16 md:right-7 right-0 z-200 p-4'
                        : 'hidden'
                    }
                  >
                    <p className="font-semibold">Maven Mentor</p>
                    <p>Menu</p>
                    <div className="border border-blue-700 my-2"></div>
                    <div className="flex flex-col items-start font-medium ">
                      <Link to="/mentor/profile" className="p-1 w-full">
                        Profile
                      </Link>
                      <Link to="mentor-settings" className="p-1 w-full">
                        Profile Settings
                      </Link>
                      <button
                        className="p-1 w-full text-left"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Right */}
              <div className="md:hidden block ">
                <button onClick={() => setbBurgerBtn(!burgerBtn)}>
                  {burgerBtn ? (
                    <AiOutlineCloseCircle size={30} />
                  ) : (
                    <HiMenuAlt2 size={30} />
                  )}
                </button>
              </div>
            </div>

            {/* MOBILE */}

            <div
              className={
                burgerBtn
                  ? 'absolute top-15 left-0 z-99  w-full py-6 bg-blue-50 '
                  : 'hidden'
              }
            >
              <section className="">
                <div className="w-full flex flex-col items-center justify-center gap-y-2">
                  <div className="search flex items-center gap-1 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-lg py-1 px-2">
                    <p className="p-2 font-medium cursor-pointer">
                      E-Mentor Web-Based App
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setUserClick(!userClick);
                      if (notifClick) {
                        setNotifClick(!notifClick);
                      }
                    }}
                    className="flex gap-x-2 items-center p-2"
                  >
                    <h4 className="font-semibold">Maven Mentor</h4>
                    <AiFillCaretDown />
                  </button>
                  <div
                    className={
                      userClick ? ' flex flex-col items-start ' : 'hidden'
                    }
                  >
                    <Link
                      to="/mentor/profile"
                      className="w-full font-medium text-lg p-1"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/mentor/mentor-settings"
                      className="w-full font-medium text-lg p-1"
                    >
                      User Settings
                    </Link>
                    <button
                      className="w-full font-medium text-lg p-1 text-left"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                    {/* <button>
                      <Link
                        to="/mentor-login"
                        className="w-full font-medium text-lg p-1"
                      >
                        Logout
                      </Link>
                    </button> */}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </nav>
      </div>

      <div className="md:my-20 my-0"></div>
    </>
  );
};

export default MNavbar;
