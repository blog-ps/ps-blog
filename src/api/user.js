import axios from 'axios';
import instance from './requrst';

export async function getCaptchaCode(email) {
  try {
    const res = await instance.get('/user/front/code', {
      params: {
        email: email,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
}

export async function register(userInfo) {
  try {
    const res = await axios.post('/api/user/front/register', userInfo);
    return res;
  } catch (error) {
    return error;
  }
}

export async function signinWithOtp(userInfo) {
  try {
    const res = await axios.post('/api/user/front/login_code', userInfo);
    return res;
  } catch (error) {
    return error;
  }
}

export async function signinWithPassword(userInfo) {
  try {
    const res = await axios.post('/api/user/front/login_password', userInfo);
    return res;
  } catch (error) {
    return error;
  }
}
