// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { IoPeople } from 'react-icons/io5';
// import { AiFillCalendar } from 'react-icons/ai';
// import { FaWallet } from 'react-icons/fa';

// const MentorSummary = () => {
//   const [mentorSummary, setMentorSummary] = useState([]);

//   useEffect(() => {
//     const getMentorSummary = async () => {
//       const response = await axios.get(
//         'http://localhost:8000/api/mentor/get-mentor-summary',
//         {
//           headers: {
//             Authorization: localStorage.getItem('jwt'),
//             'Content-Type': 'application/json',
//             'Cache-Control': 'no-cache',
//             withCredentials: true
//           }
//         }
//       );
//       // console.log(response.data);
//       setMentorSummary(response.data);
//     };
//     getMentorSummary();
//   }, []);

//   return (
//     <>
//       <section className="">
//         {/* container */}
//         <div className="">
//           {/* upper */}
//           <div className="flex md:items-start item-center">
//             {/* inner top left */}
//             <div className="">
//               <div className="">
//                 <h1>Share your knowledge</h1>
//                 <h1>Inspire students to level up</h1>
//                 <h4 className="my-4">Start mentoring now!</h4>
//                 <button className="btn-colored md:mb-0 mb-4">
//                   <Link to="schedule-timings">Schedule Now!</Link>
//                 </button>
//               </div>
//             </div>
//             {/* inner top right */}
//             <div className=""></div>
//           </div>
//           <div className="">
//             {mentorSummary.map((data, index) => (
//               <div className="grid md:grid-cols-3 gap-3 my-6" key={index}>
//                 {/* <div className="flex items-center gap-3 bg-blue-100 p-5">
//                   <div className="p-3 bg-blue-300 ">
//                     <IoPeople size={35} />
//                   </div>
//                   <div className="flex flex-col ">
//                     <h3 className="font-medium">{data.total_students}</h3>
//                     <p>Total Students</p>
//                   </div>
//                 </div> */}

//                 {/* <div className="flex items-center gap-3 bg-pink-100 p-5">
//                   <div className="p-3 bg-pink-300 ">
//                     <AiFillCalendar size={35} />
//                   </div>
//                   <div className="flex flex-col ">
//                     <h3 className="font-medium">{data.meeting_available}</h3>
//                     <p>Not BOOKED Meeting(s)</p>
//                   </div>
//                 </div> */}

//                 {/* <div className="flex items-center gap-3 bg-violet-100 p-5">
//                   <div className="p-3 bg-violet-300 ">
//                     <FaWallet size={35} />
//                   </div>
//                   <div className="flex flex-col ">
//                     <h3 className="font-medium">{data.total_earned}</h3>
//                     <p>Total Earned</p>
//                   </div>
//                 </div> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default MentorSummary;
