import {
  getCaptchaCode,
  register,
  signinWithOtp,
  signinWithPassword,
} from '@/api/user';
import { toast } from '@/hooks/use-toast';
import { create } from 'zustand';

const userInfoInStorage = JSON.parse(localStorage.getItem('userInfo'));

const useUserStore = create((set) => {
  function handleResponse(res, text, cb = () => {}) {
    if (res.status !== 200) {
      toast({
        title: `${text}失败`,
        description: `状态码: ${res.status}`,
        variant: 'destructive',
      });
      return null;
    }

    const { data } = res;
    if (!data.success) {
      toast({
        title: `${text}失败`,
        description: data.errorMsg,
        variant: 'destructive',
      });
      return null;
    }

    if (text === '登录') {
      set({ user: data.data });
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('userInfo', JSON.stringify(data.data));
    }

    toast({ description: `${text}成功` });
    cb();
  }

  return {
    user: userInfoInStorage || null,
    setUser: (config) =>
      set((state) => ({ user: { ...state.user, ...config } })),
    LogOut: () => {
      set({ user: null });
      localStorage.removeItem('userInfo');
      localStorage.removeItem('token');
      window.location.reload();
    },

    fetchCaptchaCode: async (email) => {
      return await getCaptchaCode(email);
    },

    register: async (userInfo, cb) => {
      const res = await register(userInfo);
      handleResponse(res, '注册', cb);
    },

    signinWithOtp: async (userInfo) => {
      const res = await signinWithOtp(userInfo);
      handleResponse(res, '登录', () => {
        window.location.reload();
      });
    },

    signinWithPassword: async (userInfo) => {
      const res = await signinWithPassword(userInfo);
      handleResponse(res, '登录', () => {
        window.location.reload();
      });
    },
  };
});

export default useUserStore;
