import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
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
  (response) => {
    if (response.data.code === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
      window.location.href = '/register';
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
