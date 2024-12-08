import { getCaptchaCode } from '@/api/user';
import { useEffect, useState } from 'react';
import { toast } from './use-toast';
import useDebouncedFn from './useDebouncedFn';

const COOLDOWN = 60;
const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  COOLDOWN: 'cooldown',
  ERROR: 'error',
};

const useSetOtp = (key = 'default-cooldown') => {
  const [cooldown, setCooldown] = useState(() => {
    const storedCooldown = Number(localStorage.getItem(key)) || 0;
    return storedCooldown;
  });
  const [status, setStatus] = useState(() => {
    const initialCooldown = Number(localStorage.getItem(key)) || 0;
    return initialCooldown > 0 ? STATUS.COOLDOWN : STATUS.IDLE;
  });

  useEffect(() => {
    let interval;

    const startCooldown = () => {
      interval = setInterval(() => {
        setCooldown((prevCooldown) => {
          if (prevCooldown <= 1) {
            clearInterval(interval);
            localStorage.setItem(key, '0');
            setStatus(STATUS.IDLE);
            return 0;
          } else {
            const newCooldown = prevCooldown - 1;
            localStorage.setItem(key, String(newCooldown));
            return newCooldown;
          }
        });
      }, 1000);
    };

    if (status === STATUS.COOLDOWN && cooldown > 0) {
      startCooldown();
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [cooldown, key, status]);

  function setCoolDown(cooldown) {
    setCooldown(cooldown);
    localStorage.setItem(key, String(cooldown));
  }

  const getCaptcha = useDebouncedFn(async (email) => {
    setStatus(STATUS.LOADING);

    const emailRegex =
      /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (!emailRegex.test(email)) {
      toast({ description: '请输入有效的邮箱地址', variant: 'destructive' });
      setStatus(STATUS.ERROR);
      return;
    }

    try {
      const res = await getCaptchaCode(email);

      if (res.status === 200) {
        setCoolDown(COOLDOWN);
        setStatus(STATUS.COOLDOWN);
        toast({ description: '验证码已发送,请注意查收' });
      } else {
        setStatus(STATUS.ERROR);
        toast({ description: '获取验证码失败', variant: 'destructive' });
      }
    } catch (error) {
      setStatus(STATUS.ERROR);
      toast({
        title: '获取验证码失败',
        description: error,
        variant: 'destructive',
      });
    }
  });

  return {
    cooldown,
    setCoolDown,
    status,
    setStatus,
    STATUS,
    COOLDOWN,
    getCaptcha,
  };
};

export default useSetOtp;
