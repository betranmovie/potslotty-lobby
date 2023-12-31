import axios from 'axios'
import 'dotenv/config'


const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API, // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    "ngrok-skip-browser-warning": "any"
    // You can add any other common headers here
  },
});

axios.interceptors.request.use(
  (config) => {
    // Modify config if needed, e.g., add headers, tokens, etc.
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
axios.interceptors.response.use(
  (response) => {
    // Process successful responses
    return response;
  },
  (error) => {
    // Handle error responses
    return Promise.reject(error);
  }
);

export default instance;