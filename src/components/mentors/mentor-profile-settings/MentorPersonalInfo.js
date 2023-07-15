import React, { useEffect, useState } from 'react';
import axios from 'axios';
const blockInvalidChar = (e) =>
  ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

const MentorPersonalInfo = () => {
  const [sex, setSex] = useState('male');
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState('');
  const [yrs_exp, setYearsExp] = useState(2);
  const [current_job, setCurrentJob] = useState('');

  const [bio, setBio] = useState('');

  const handlePersonalInfo = async (e) => {
    e.preventDefault();
    if (
      age === 0 ||
      phone === 0 ||
      phone.length < 11 ||
      address.trim() === '' ||
      current_job.trim() === ''
    ) {
      window.alert('Insert all empty input');
    } else if (yrs_exp < 2) {
      window.alert('Experience must be 2 years above');
    } else {
      await axios.put(
        'http://localhost:8000/api/mentor/update/about',
        {
          bio,
          sex,
          age,
          phone_number: phone,
          address,
          yrs_exp,
          current_job
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
      window.alert('Update Success');
      setBio('');
      setSex('');
      setAge('');
      setPhone('');
      setAddress('');
      setYearsExp('');
      setCurrentJob('');
    }
  };

  return (
    <>
      <div className="p-6 border border-gray-300 my-6 border-b-2 border-b-blue-600">
        <h3 className="font-medium">About me</h3>
        <p className="my-2 text-sm font-medium text-red-400">
          NOTE: This is a batch update format. You need to update all the input,
          leaving them blank before saving will affect your personal info.
        </p>
        <article>
          <hr className="my-5 border border-gray-200" />

          <p className="font-medium  pb-2">
            Enter short description about yourself
          </p>
          <form method="POST">
            <input
              type="text"
              id=""
              name="bio"
              value={bio}
              className="w-full p-3 border-2 border-gray-700 outline-none rounded-2xl mb-3"
              maxLength={255}
              placeholder="Type something"
              onChange={(e) => setBio(e.target.value)}
            />

            {/* <button onClick={handleBio} className="small-blue-btn">
              Update bio
            </button> */}
          </form>
        </article>
      </div>

      <div className="p-6 border border-gray-300 my-6 border-b-2 border-b-blue-600">
        <h3 className="font-medium ">About me</h3>
        <p className="my-2 text-sm font-medium text-red-400">
          NOTE: This is a batch update format. You need to update all the input,
          leaving them blank before saving will affect your personal info.
        </p>
        <article>
          <hr className="my-5 border border-gray-200" />
          <p className="font-medium  pb-8">Update your personal information</p>
          <form action="" method="POST" className="">
            <article className="w-full">
              <div className="">
                <div className="flex md:flex-row flex-col justify-between w-full ">
                  <div className="">
                    <p>Enter sex</p>
                    <select
                      name="sex"
                      id="sex"
                      className="w-full max-w-[250px]  p-3 border-2 border-gray-700 outline-none rounded-2xl cursor-pointer"
                      required
                      value={sex}
                      onChange={(e) => {
                        setSex(e.target.value);
                        // console.log(sex);
                      }}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <p>Enter your age</p>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      value={age}
                      onKeyDown={blockInvalidChar}
                      onChange={(e) => {
                        setAge(e.target.value.slice(0, 2));
                      }}
                      placeholder="Enter age"
                      className="w-full max-w-[150px] mb-4 p-3 border-2 border-gray-700 outline-none rounded-2xl cursor-pointer"
                    />
                  </div>
                </div>

                <div className=" flex md:flex-row flex-col justify-between w-full ">
                  <div className="">
                    <p>Enter Phone number</p>
                    <input
                      type="number"
                      className="w-full  p-3 border-2 border-gray-700 outline-none rounded-2xl cursor-pointer"
                      placeholder="11 digits only. (09XX)"
                      autoComplete="off"
                      // maxLength={11}
                      onKeyDown={blockInvalidChar}
                      name="phone_number"
                      onChange={(e) => setPhone(e.target.value.slice(0, 11))}
                      value={phone}
                    />
                  </div>
                  <div className="mt-4">
                    <p>Enter House Address</p>
                    <input
                      type="text"
                      id=""
                      name="address"
                      // value={bio}
                      value={address}
                      className="w-full p-3 border-2 border-gray-700 outline-none rounded-2xl mb-3"
                      maxLength={255}
                      placeholder="Type something"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className=" flex md:flex-row flex-col justify-between w-full ">
                  <div className="">
                    <p>Enter years of experience</p>
                    <input
                      type="number"
                      className="w-full max-w-[150px] mb-4 p-3 border-2 border-gray-700 outline-none rounded-2xl cursor-pointer"
                      placeholder="Type year(s) of experience"
                      autoComplete="off"
                      // maxLength={11}
                      name="yrs_exp"
                      onKeyDown={blockInvalidChar}
                      onChange={(e) => setYearsExp(e.target.value.slice(0, 2))}
                      value={yrs_exp}
                    />
                  </div>
                  <div className="">
                    <p>Enter Current job</p>
                    <input
                      type="text"
                      id=""
                      name="current_job"
                      // value={bio}
                      value={current_job}
                      className="w-full p-3 border-2 border-gray-700 outline-none rounded-2xl mb-3"
                      maxLength={255}
                      placeholder="Enter current job"
                      onChange={(e) => setCurrentJob(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </article>

            <button onClick={handlePersonalInfo} className="small-blue-btn">
              Update About me
            </button>
          </form>
        </article>
      </div>
    </>
  );
};

export default MentorPersonalInfo;
