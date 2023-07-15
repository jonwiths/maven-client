import React, { useEffect, useState } from 'react';

import { TfiEmail } from 'react-icons/tfi';
import { HiBuildingOffice } from 'react-icons/hi2';
import { GoArrowRight } from 'react-icons/go';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contacts = () => {
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  // const [isDisabled, setIsDisabled] = useState(false);
  const [checkDisabled, setCheckDisabled] = useState(
    JSON.parse(localStorage.getItem('isDisabled'))
  );

  useEffect(() => {
    setTimeout(() => {
      setErrMsg('');
    }, 4000);
  }, [errMsg]);

  useEffect(() => {
    const test = JSON.parse(localStorage.getItem('isDisabled'));
    if (test) {
    } else {
      setTimeout(() => {
        setCheckDisabled(localStorage.getItem('isDisabled'));
      }, 3000);
    }
  }, []);

  // useEffect(() => {
  //   if (checkDisabled) {
  //     return;
  //   } else {
  //     setTimeout(() => {
  //       // setIsDisabled(false);
  //       localStorage.setItem('isDisabled', JSON.stringify(false));
  //     }, 21000000);
  //   }
  // }, [checkDisabled]);

  // console.log(JSON.parse(checkDisabled));

  const handleSubmitEmailMessageBtn = async (e) => {
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setErrMsg('Fill up all input');
    } else if (!EMAIL_REGEX.test(email)) {
      setErrMsg('Invalid Email.');
    } else {
      console.log('Email Send');
      setErrMsg('Email Sent.');
      // setIsDisabled(true);
      localStorage.setItem('isDisabled', JSON.stringify(true));
      setEmail('');
      setMessage('');
      setName('');
    }
  };
  return (
    <section className="mt-5">
      <div className="container mx-auto w-full flex flex-col items-center p-4 ">
        <h1 className="mb-6 w-full bg-gray-50 p-4 text-center">CONTACT US</h1>
        <div className="flex justify-between items-center w-full  md:flex-row flex-col gap-2">
          <div className="md:w-1/2 w-full bg-gray-200 px-2 py-6">
            <div className="mb-4">
              <h3 className="font-bold mb-2 flex items-center gap-4">
                <span>
                  <HiBuildingOffice />
                </span>{' '}
                OUR MAIN OFFICE
              </h3>
              <p className="flex items-center gap-1">
                <span>
                  <GoArrowRight />
                </span>
                Km. 38 Sitio Gulod, Pulong-Buhangin Sta. Maria, Bulacan
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold mb-2 flex items-center gap-4">
                <span>
                  <TfiEmail />
                </span>{' '}
                OUR BUSINESS EMAIL
              </h3>
              <p className="flex items-center gap-1">
                <span>
                  <GoArrowRight />
                </span>
                maven.edu05@gmail.com
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold mb-2 flex items-center gap-4">
                <span>
                  <BsFillTelephoneFill />
                </span>{' '}
                OUR PHONE NUMBER
              </h3>
              <p className="flex items-center gap-1">
                <span>
                  <GoArrowRight />
                </span>
                <span className="font-semibold">SMART:</span> +(63) 987 654 3210
              </p>
              {/* <p className="flex items-center gap-1">
                <span>
                  <GoArrowRight />
                </span>
                <span className="font-semibold">SMART:</span> +(63) 987 654 3210
              </p> */}
            </div>
          </div>
          <div className="md:w-1/2 w-full bg-gray-200 p-4">
            <div className="mb-4 flex flex-col w-full">
              <h3 className="font-bold text-center pb-6">Keep in touch</h3>
              <div className="w-full">
                {checkDisabled && (
                  <p className="my-2 p-2 text-white bg-red-500 rounded-xl">
                    Submit button is disabled after sending an email. Come back
                    in few hours.
                  </p>
                )}

                <form action="" method="post">
                  <div className="input-control mb-2">
                    <label htmlFor="contacts_name">Name</label>
                    <input
                      name="contacts_name"
                      type="text"
                      className="p-2 w-full outline-none"
                      id="contacts_name"
                      placeholder="Enter your name"
                      maxLength="50"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="input-control mb-2">
                    <label htmlFor="contacts_email ">Email</label>
                    <input
                      name="contacts_email"
                      type="text"
                      className="p-2 w-full outline-none"
                      id="contacts_email"
                      placeholder="Enter your email"
                      maxLength="50"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-control mb-2">
                    <label htmlFor="contact_textarea">Message</label>
                    <textarea
                      name="contacts_message"
                      className="p-2 w-full outline-none"
                      id="contact_textarea"
                      placeholder="Enter your concern(s). 255 characters max*"
                      cols="5"
                      rows="5"
                      maxLength="255"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  {errMsg && (
                    <p
                      className={
                        setErrMsg === 'Email Sent.'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }
                    >
                      {errMsg}
                    </p>
                  )}
                </form>
                <button
                  className="rounded-btn-dark cursor-pointer"
                  onClick={handleSubmitEmailMessageBtn}
                  disabled={false}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
