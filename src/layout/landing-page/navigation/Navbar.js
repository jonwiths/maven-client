import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { HiMenuAlt1, HiMenuAlt2 } from 'react-icons/hi';
import { AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai';

import navLogo from '../../../assets/logos/logo-main.png';
// import navLogo from '../../../assets/logos/maven-logo-wtext.png';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [burgerBtn, setbBurgerBtn] = useState(false);

  const handleNav = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div className="relative z-40">
        <nav className="fixed min-w-full w-full overflow-hidden top-0 bg-white shadow-lg p-4 ">
          <div className="container mx-auto ">
            {/* Nav large */}
            <div className="flex justify-between items-center">
              <div className=" items-center justify-between lg:flex hidden">
                <NavLink to="/" className="mr-6">
                  <div className="flex justify-between items-center">
                    <img src={navLogo} alt="" className="h-14 w-14" />
                    <p className="font-medium">maven-edu</p>
                  </div>
                </NavLink>
                <div className="">
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive ? 'navlink--navbar-active' : 'navlink--navbar'
                    }
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                      isActive ? 'navlink--navbar-active' : 'navlink--navbar'
                    }
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to="/become-a-mentor"
                    className={({ isActive }) =>
                      isActive ? 'navlink--navbar-active' : 'navlink--navbar'
                    }
                  >
                    Become a Mentor
                  </NavLink>
                </div>
              </div>
              <div className="lg:flex gap-1 hidden items-center justify-center">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? 'navlink--navbar-active' : 'navlink--navbar'
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? 'navlink--register-active' : 'navlink--register'
                  }
                >
                  Enroll Now
                </NavLink>
              </div>
            </div>

            {/* Nav small */}
            <div className="lg:hidden items-center justify-between flex flex-row-reverse ">
              <div className="lg:hidden block ">
                <button onClick={() => setbBurgerBtn(!burgerBtn)}>
                  {burgerBtn ? (
                    <AiOutlineCloseCircle size={30} />
                  ) : (
                    <HiMenuAlt2 size={30} />
                  )}
                </button>
              </div>
              <NavLink to="/" className="mr-6">
                <div className="flex justify-between items-center">
                  <img src={navLogo} alt="" className="h-14 w-14" />
                  <p className="font-medium">maven-edu</p>
                </div>
              </NavLink>
            </div>
            {burgerBtn ? (
              <div className="lg:hidden flex flex-col items-center pt-2">
                <Link
                  onClick={() => (window.location.href = '/services')}
                  // to="/services"
                  className="navlink--navbar-mbl"
                >
                  Services
                </Link>
                <Link
                  onClick={() => (window.location.href = '/about-us')}
                  // to="/about-us"
                  className="navlink--navbar-mbl"
                >
                  About Us
                </Link>
                <Link
                  onClick={() => (window.location.href = '/become-a-mentor')}
                  // to="/become-a-mentor"
                  className="navlink--navbar-mbl"
                >
                  Become a Mentor
                </Link>
                <hr className="bg-gray-600 w-full my-2" />

                <Link
                  onClick={() => (window.location.href = '/login')}
                  // to="/login"
                  className="navlink--navbar-mbl"
                >
                  Login
                </Link>

                <Link
                  onClick={() => (window.location.href = '/register')}
                  // to="/register"
                  className="mt-2 w-full p-3 font-medium rounded-2xl bg-blue-600 text-white"
                >
                  Enroll Now
                </Link>
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </nav>
      </div>
      <div className="lg:my-[9vh] mb-20"></div>
    </>
  );
};

export default Navbar;
