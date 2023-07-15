import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const MentorAuthContext = createContext();

export const MentorAuthContextProvider = ({ children }) => {
  const [currentMentor, setCurrentMentor] = useState(
    JSON.parse(localStorage.getItem('mentor')) || null
  );

  const login = async ({ m_email, m_password }) => {
    const reponse = await axios.post(
      'http://localhost:8000/api/mentor/auth/login',
      { m_email, m_password },
      {
        headers: {
          Authorization: localStorage.getItem('jwt'),
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          withCredentials: true
        }
      }
    );
    JSON.stringify(localStorage.setItem('jwt', reponse.data.token));
    // console.log('JWT TOKEN' + reponse.data.token);

    setCurrentMentor(reponse.data);
  };

  useEffect(() => {
    localStorage.setItem('mentor', JSON.stringify(currentMentor));
  }, [currentMentor]);

  return (
    <MentorAuthContext.Provider value={{ currentMentor, login }}>
      {children}
    </MentorAuthContext.Provider>
  );
};
