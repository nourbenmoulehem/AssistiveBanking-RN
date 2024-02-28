import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
  responseType: 'json',
});

export default api;