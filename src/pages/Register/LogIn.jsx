import emailIcon from '@/assets/svg/logo/email.svg';
import passwordIcon from '@/assets/svg/logo/password.svg';
import InputWithIcon from '@/components/InputWithIcon';
import { Toggle } from '@/components/ui/toggle';
import { toast } from '@/hooks/use-toast';
import useSetOtp from '@/hooks/useSetOtp';
import useUserStore from '@/store/user';
import { Loader2, Mail } from 'lucide-react';
import { useState } from 'react';
import styled from 'styled-components';
import { Inputs, MyButton } from './SignUp.styled';
import useDebouncedFn from '@/hooks/useDebouncedFn';

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const updateUserInfo = (key, value) => {
    setUserInfo((prev) => ({ ...prev, [key]: value.trim() }));
  };
  return [userInfo, updateUserInfo];
};

const Login = () => {
  const [loginType, setLoginType] = useState('password');
  const [userInfo, updateUserInfo] = useUserInfo();
  const { cooldown, status, STATUS, getCaptcha } = useSetOtp('login-cooldown');
  const { signinWithOtp, signinWithPassword } = useUserStore();

  const signinWithOtpDelay = useDebouncedFn(signinWithOtp, 500);
  const signinWithPasswordDelay = useDebouncedFn(signinWithPassword, 500);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInfo.email || !userInfo.password) {
      toast({ description: '请填写完整信息', variant: 'destructive' });
      return;
    }

    if (loginType === 'otp') {
      signinWithOtpDelay({
        email: userInfo.email,
        code: userInfo.password,
      });
    } else if (loginType === 'password') {
      signinWithPasswordDelay({
        email: userInfo.email,
        password: userInfo.password,
      });
    }
  };
  const captchaTxt = (status, cooldown) => {
    if (status === STATUS.LOADING) return '正在获取中...';
    if (status === STATUS.COOLDOWN) return `请 ${cooldown}s 后重试`;
    return '获取验证码';
  };

  return (
    <Inputs>
      <InputWithIcon
        type="email"
        placeholder="请输入邮箱"
        value={userInfo.email}
        onChange={(e) => updateUserInfo('email', e.target.value)}
        src={emailIcon}
        alt="email"
      />

      <InputWithIcon
        type="password"
        placeholder={`请输入${loginType === 'otp' ? '验证码' : '密码'}`}
        value={userInfo.password}
        onChange={(e) => updateUserInfo('password', e.target.value)}
        src={passwordIcon}
        alt="password"
      />

      <MyToggle
        aria-label="Toggle italic"
        onClick={() => setLoginType(loginType === 'otp' ? 'password' : 'otp')}
      >
        <Mail className="h-4 w-4" />
      </MyToggle>
      {loginType === 'otp' && (
        <MyButton
          disabled={status === STATUS.LOADING || status === STATUS.COOLDOWN}
          type="button"
          onClick={() => getCaptcha(userInfo.email)}
        >
          {status === STATUS.LOADING && <Loader2 className="animate-spin" />}
          {captchaTxt(status, cooldown)}
        </MyButton>
      )}
      <input type="submit" className="submit" onClick={handleSubmit} />
    </Inputs>
  );
};

const MyToggle = styled(Toggle)`
  position: absolute;
  right: -24px;
  top: 62px;
  transform: translate(50%, 0);
  border-radius: 50%;
  color: white;
`;

export default Login;
