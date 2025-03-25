import axios from 'axios';

const API = axios.create({
  baseURL: 'localhost:8080/auth/login',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signUp = (userData) => API.post('/signup', userData);
export const logIn = (credentials) => API.post('/login', credentials);