import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { RxDashboard } from 'react-icons/rx';
import {
  AiOutlineClockCircle,
  AiOutlineCloseCircle,
  AiOutlineDoubleRight,
  AiOutlineMessage
} from 'react-icons/ai';
import { MdHistory, MdOutlineReviews } from 'react-icons/md';
import { TbFileInvoice } from 'react-icons/tb';
import { GiHamburgerMenu } from 'react-icons/gi';

const MLeftbar = () => {
  const [leftBar, setLeftBar] = useState(true);

  return (
    <>
      <div className="">
        <aside className="m-leftbar mr-4 fixed h-[100vh] top-22 bg-white z-999 shadow-gray-800 shadow-xl mt-1">
          <div
            className={
              !leftBar
                ? 'md:hidden bg-gray-600  absolute top-10 left-0 p-2'
                : 'hidden'
            }
            onClick={() => setLeftBar(!leftBar)}
          >
            <GiHamburgerMenu size={20} className="text-white" />
          </div>
          <div className={leftBar ? 'block  bg-white' : 'hidden'}>
            <div className="relative">
              <button
                className="absolute top-0 right-2 z-20"
                onClick={() => setLeftBar(!leftBar)}
              >
                <AiOutlineCloseCircle size={30} className="" />
              </button>
              <div className="px-4 py-10 mt-4">
                <section className="menu">
                  <div>
                    <Link to="/mentor" className="leftbar-link-hover">
                      <RxDashboard size={30} className="font-medium" />
                      <h4 className="font-medium">Dashboard</h4>
                    </Link>
                  </div>
                  <div>
                    <Link to="/mentor/booking" className="leftbar-link-hover">
                      <AiOutlineClockCircle size={30} className="font-medium" />
                      <h4 className="font-medium">Booking</h4>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/mentor/schedule-timings"
                      className="leftbar-link-hover"
                    >
                      <MdHistory size={30} className="font-medium" />
                      <h4 className="font-medium">Schedule Timing</h4>
                    </Link>
                  </div>
                  {/* <div>
                    <Link to="/mentor/invoices" className="leftbar-link-hover">
                      <TbFileInvoice size={30} className="font-medium" />
                      <h4 className="font-medium">Invoices</h4>
                    </Link>
                  </div> */}
                  <div>
                    <Link to="/mentor/reviews" className="leftbar-link-hover">
                      <MdOutlineReviews size={30} className="font-medium" />
                      <h4 className="font-medium">Reviews</h4>
                    </Link>
                  </div>
                  <div>
                    <Link to="/mentor/history" className="leftbar-link-hover">
                      <MdHistory size={30} className="font-semibold" />
                      <h4 className="font-semibold">History</h4>
                    </Link>
                  </div>

                  <hr className="my-6" />
                </section>
              </div>
            </div>
          </div>
          <div
            className={
              leftBar
                ? 'hidden'
                : 'fixed top-50 left-0 bg-gray-700 text-white md:flex hidden justify-center z-5 h-[100vh]'
            }
            onClick={() => setLeftBar(!leftBar)}
          >
            <button className="">
              <AiOutlineDoubleRight size={30} />
            </button>
          </div>
        </aside>
      </div>
    </>
  );
};

export default MLeftbar;
