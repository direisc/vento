import axios from 'axios';

const BASE_URL = 'http://localhost';
const API_KEY = 'api_key';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-api-key': API_KEY,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response);
  }
);

export default api;
