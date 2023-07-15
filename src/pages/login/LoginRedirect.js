import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const LoginRedirect = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/student');
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  return null;
};

export default LoginRedirect;
