import { useContext, useEffect } from 'react';
import { MentorAuthContext } from '../../context/mentorAuthContext';
import { useNavigate } from 'react-router-dom';

const MentorLoginRedirect = () => {
  const { currentMentor } = useContext(MentorAuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentMentor) {
      navigate('/mentor');
    }
  }, [currentMentor, navigate]);

  useEffect(() => {
    if (!currentMentor) {
      navigate('/mentor-login');
    }
  }, [currentMentor, navigate]);

  return null;
};

export default MentorLoginRedirect;
