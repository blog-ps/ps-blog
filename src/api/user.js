import axios from 'axios';
import instance from './requrst';

async function apiRequest(method, url, data = null, useInstance = false) {
  try {
    const axiosInstance = useInstance ? instance : axios;
    const config = data ? { data } : {};
    const res = await axiosInstance({ method, url, ...config });
    return res;
  } catch (error) {
    return error;
  }
}

export function getCaptchaCode(email) {
  return apiRequest('get', '/user/front/code', { params: { email } }, true);
}

export function register(userInfo) {
  return apiRequest('post', '/api/user/front/register', userInfo);
}

export function signinWithOtp(userInfo) {
  return apiRequest('post', '/api/user/front/login_code', userInfo);
}

export function signinWithPassword(userInfo) {
  return apiRequest('post', '/api/user/front/login_password', userInfo);
}

export function saveUserSettings(formData) {
  return apiRequest('post', '/upload/front/img', formData, true);
}
