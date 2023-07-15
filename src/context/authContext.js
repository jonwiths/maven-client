import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = async ({ s_email, s_password }) => {
    const reponse = await axios.post(
      'http://localhost:8000/api/student/auth/login',
      { s_email, s_password },
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
    setCurrentUser(reponse.data);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
