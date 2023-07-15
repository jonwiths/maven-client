import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import navLogo from '../../../assets/logos/logo-main.png';
// import navLogo from '../../../assets/logos/maven-logo-wtext.png';

const ANavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNav = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div className="relative ">
        <nav className="fixed min-w-full w-full h-[10vh] overflow-hidden top-0 z-9999999 bg-white shadow-lg p-4 ">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className=" items-center justify-between lg:flex hidden">
                <div className="lg:flex gap-1 hidden">
                  <NavLink
                    to="/admin-login"
                    className={({ isActive }) =>
                      isActive ? 'navlink--navbar-active' : 'navlink--navbar'
                    }
                  >
                    Login
                  </NavLink>
                </div>
              </div>

              {/* Mobile */}
              <div className="lg:hidden p-2 flex items-center justify-between">
                <div className="flex justify-between items-center">
                  <img src={navLogo} alt="" className="h-9 w-9" />
                  <p className="font-medium">maven-edu</p>
                </div>
                <div onClick={handleNav} className="flex justify-end">
                  {showNavbar ? (
                    <AiOutlineClose size={30}></AiOutlineClose>
                  ) : (
                    <HiMenuAlt1 size={30}></HiMenuAlt1>
                  )}
                </div>
              </div>

              {/* Mobile dropdown buttons */}
              <div
                onClick={handleNav}
                className={
                  showNavbar
                    ? 'absolute top-15 left-0 z-20 bg-gray-100 w-full'
                    : 'absolute top-[-1000%]'
                }
              >
                <section className="pb-4 shadow-lg">
                  <div className="flex flex-col p-4">
                    <NavLink to="/" className="navlink--navbar-mbl">
                      Home
                    </NavLink>
                    <NavLink to="/services" className="navlink--navbar-mbl">
                      Services
                    </NavLink>
                    <NavLink to="/about-us" className="navlink--navbar-mbl">
                      About Us
                    </NavLink>
                    <NavLink
                      to="/become-a-mentor"
                      className="navlink--navbar-mbl"
                    >
                      Become a Mentor
                    </NavLink>

                    <hr className="shadow-md" />

                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive
                          ? 'navlink--navbar-active'
                          : 'navlink--navbar-mbl'
                      }
                    >
                      Log In
                    </NavLink>
                    <div className="my-1"></div>
                    <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        isActive
                          ? 'navlink--register-active'
                          : 'navlink--register'
                      }
                    >
                      Enroll now
                    </NavLink>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="my-[10vh]"></div>
    </>
  );
};

export default ANavbar;
