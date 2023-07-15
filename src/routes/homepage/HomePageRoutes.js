import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Error404 from '../error/Error404';
import LandingPageLayout from '../../layout/landing-page/shared/LandingPageLayout';

import LandingPage from '../../pages/landing-page/LandingPage';
import AboutUs from '../../pages/about-us/AboutUs';
import Services from '../../pages/services/Services';
import BecomeAMentor from '../../pages/become-a-mentor/BecomeAMentor';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';

import MentorLogin from '../../pages/become-a-mentor/MentorLogin';
import TermsAndContion from '../terms-and-condition/TermsAndContion';
import PrivacyPolicies from '../privacy-policies/PrivacyPolicies';

import MentorLayout from '../../layout/mentors/shared/MentorLayout';
import MentorHome from '../../components/mentors/mentor-home/MentorHome';
import MentorBoooking from '../../components/mentors/mentor-booking/MentorBoooking';
import MentorInvoices from '../../components/mentors/mentor-invoices/MentorInvoices';
import MentorProfile from '../../components/mentors/mentor-profile/MentorProfile';
import MentorProfileSettings from '../../components/mentors/mentor-profile-settings/MentorProfileSettings';
import MentorReviews from '../../components/mentors/mentor-reviews/MentorReviews';
import MentorTimings from '../../components/mentors/mentor-schedule-timings/MentorTimings';

import StudentLayout from '../../layout/students/shared/StudentLayout';
import StudentHome from '../../components/student/student-home/StudentHome';
import StudentBooking from '../../components/student/student-booking/StudentBooking';
import StudentHistory from '../../components/student/student-history/StudentHistory';
import StudentMentors from '../../components/student/student-mentors/StudentMentors';
import StudentProfile from '../../components/student/student-profile/StudentProfile';
import StudentProfileSettings from '../../components/student/student-profile-settings/StudentProfileSettings';
import Loading from '../loading/Loading';

import { AuthContext } from '../../context/authContext';
import AdminLayout from '../../layout/admin/shared/AdminLayout';
import AdminLogin from '../../components/admin/AdminLogin';
import AdminCreateMentor from '../../components/admin/AdminCreateMentor';
import AdminDashboard from '../../components/admin/AdminDashboard';
import { MentorAuthContext } from '../../context/mentorAuthContext';
import MentorHistory from '../../components/mentors/mentor-history/MentorHistory';
import StudentForgotPassword from '../forgot-password/StudentForgotPassword';
import GetMentorProfile from '../../components/student/mentor-profiles.js/GetMentorProfiles';
import MentorForgotPassword from '../forgot-password/MentorForgotPassword';
import StudentResetPassword from '../reset-password.js/StudentResetPassword';
import MentorResetPassword from '../reset-password.js/MentorResetPassword';

const HomePageRoutes = () => {
  const { currentUser } = useContext(AuthContext);
  const StudentProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const { currentMentor } = useContext(MentorAuthContext);
  const MentorProtectedRoute = ({ children }) => {
    if (!currentMentor) {
      return <Navigate to="/mentor-login" />;
    }
    return children;
  };

  return (
    <section>
      <Routes>
        <Route path="/" element={<LandingPageLayout />}>
          <Route index exact element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/become-a-mentor" element={<BecomeAMentor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mentor-login" element={<MentorLogin />} />
        </Route>

        <Route
          path="/mentor/"
          element={
            // <MentorProtectedRoute>
            <MentorLayout />
            // </MentorProtectedRoute>
          }
        >
          <Route index exact element={<MentorHome />} />
          <Route path="booking" element={<MentorBoooking />} />
          <Route path="reviews" element={<MentorReviews />} />
          <Route path="schedule-timings" element={<MentorTimings />} />
          <Route path="invoices" element={<MentorInvoices />} />
          <Route path="profile" element={<MentorProfile />} />
          <Route path="mentor-settings" element={<MentorProfileSettings />} />
          <Route path="loading" element={<Loading />} />
          <Route path="history" element={<MentorHistory />} />
          {/* <Route path="messages" element={<Chat />} /> */}
        </Route>

        <Route
          path="/student/"
          element={
            // <StudentProtectedRoute>
            <StudentLayout />
            // </StudentProtectedRoute>
          }
        >
          <Route index exact element={<StudentHome />} />
          <Route path="booking" element={<StudentBooking />} />
          <Route path="history" element={<StudentHistory />} />
          <Route path="mentors" element={<StudentMentors />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="profile/:mentor_fname" element={<MentorProfile />} />
          <Route path="loading" element={<Loading />} />
          <Route path="student-settings" element={<StudentProfileSettings />} />
          <Route path="history" element={<StudentHistory />} />
        </Route>
        <Route path="search/:id" element={<GetMentorProfile />} />

        <Route path="/admin-login" element={<AdminLayout />}>
          <Route index exact element={<AdminLogin />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="create-mentor" element={<AdminCreateMentor />} />
        </Route>

        {/* <Route path="/profile/:user_fname" element={<StudentProfile />} /> */}

        <Route path="/terms-and-conditions" element={<TermsAndContion />} />
        <Route path="/privacy-policies" element={<PrivacyPolicies />} />

        <Route
          path="/student-forgot-password"
          element={<StudentForgotPassword />}
        />

        <Route
          path="/reset-password/:token"
          element={<StudentResetPassword />}
        />

        <Route
          path="/mentor-forgot-password"
          element={<MentorForgotPassword />}
        />

        <Route
          path="/reset-password/mentor/:token"
          element={<MentorResetPassword />}
        />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </section>
  );
};

export default HomePageRoutes;
