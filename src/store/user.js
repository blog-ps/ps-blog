import {
  getCaptchaCode,
  register,
  saveUserSettings,
  signinWithOtp,
  signinWithPassword,
} from '@/api/user';
import { toast } from '@/hooks/use-toast';
import { create } from 'zustand';

const userInfoInStorage = JSON.parse(localStorage.getItem('userInfo'));
const TYPE = {
  WITH_TOKEN: 1,
  WITHOUT_TOKEN: 0,
};

const useUserStore = create((set) => {
  const handleFailure = (text, message) => {
    toast({
      title: `${text}失败`,
      description: message,
      variant: 'destructive',
    });
  };

  const handleSuccess = (text, data, type = 0, cb) => {
    if (type === TYPE.WITH_TOKEN) {
      set({ user: data.data });
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('userInfo', JSON.stringify(data.data));
    }
    toast({ description: `${text}成功` });
    cb(data);
  };

  const handleResponse = (
    res,
    text,
    type = TYPE.WITHOUT_TOKEN,
    cb = () => {}
  ) => {
    if (res.status !== 200) {
      handleFailure(text, `状态码: ${res.status}`);
      set({ user: userInfoInStorage });
      return;
    }

    const { data } = res;
    if (!data.success) {
      handleFailure(text, data.errorMsg);
      set({ user: userInfoInStorage });
      return;
    }

    handleSuccess(text, data, type, cb);
  };

  const performSignIn = async (userInfo, method) => {
    const res = await method(userInfo);
    handleResponse(res, '登录', TYPE.WITH_TOKEN, () => {
      window.location.reload();
    });
  };

  return {
    user: userInfoInStorage || null,
    setUser: (config) =>
      set((state) => {
        const newState = { user: { ...state.user, ...config } };
        localStorage.setItem('userInfo', JSON.stringify(newState.user));
        return newState;
      }),
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
      handleResponse(res, '注册', null, cb);
    },
    signinWithOtp: async (userInfo) => {
      await performSignIn(userInfo, signinWithOtp);
    },
    signinWithPassword: async (userInfo) => {
      await performSignIn(userInfo, signinWithPassword);
    },
    updateUserSettings: async (formData) => {
      const res = await saveUserSettings(formData);
      handleResponse(res, '更新用户信息', TYPE.WITH_TOKEN);
    },
  };
});

export default useUserStore;
