import axios from 'axios';

export const makeRequest = axios.create({
  baseURL: 'https://maven-edu.herokuapp.com/api',
  withCredentials: true
});
