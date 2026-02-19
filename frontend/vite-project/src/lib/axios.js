import axios from "axios";

const getBaseURL = () => {
  // Check for environment variable first (build-time)
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  // Fallback: construct from current origin
  return `${window.location.origin}/api`;
};

const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true, // by adding this field browser will send the cookies to server automatically, on every single req
});

export default axiosInstance;
