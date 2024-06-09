import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
const axiosSecure = axios.create({
  baseURL: 'https://assignment-12-sky-view-server.vercel.app',
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();

  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(
    config => {
      const token = localStorage.getItem('access-token');
      config.headers.authorization = `${token}`;
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    res => {
      return res;
    },
    err => {
      const status = err.response.status;
      if (status === 401 || status === 403) {
        logOut();
        navigate('/login');
      }
      return Promise.reject(err);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
