import axios from 'axios';
import { useNavigate } from 'react-router';

const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Token = `${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const navigate = useNavigate();
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      navigate('/login');
    }
    return Promise.reject(error);
  }
);

export async function getCaptchaCode(email) {
  const res = await instance.get('/user/front/code', {
    params: {
      email: email,
    },
  });

  return res;
}
