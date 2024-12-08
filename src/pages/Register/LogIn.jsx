import { signinWithOtp, signinWithPassword } from '@/api/user';
import emailIcon from '@/assets/svg/email.svg';
import passwordIcon from '@/assets/svg/password.svg';
import { Toggle } from '@/components/ui/toggle';
import useSetOtp from '@/hooks/useSetOtp';
import { Loader2, Mail } from 'lucide-react';
import { useState } from 'react';
import styled from 'styled-components';
import { Inputs, MyButton } from './SignUp.styled';
import { toast } from '@/hooks/use-toast';

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const updateUserInfo = (key, value) => {
    setUserInfo((prev) => ({ ...prev, [key]: value.trim() }));
  };
  return [userInfo, updateUserInfo];
};

const Login = ({ createInputField }) => {
  const captchaTxt = (status, cooldown) => {
    if (status === STATUS.LOADING) return '正在获取中...';
    if (status === STATUS.COOLDOWN) return `请 ${cooldown}s 后重试`;
    return '获取验证码';
  };

  const [loginType, setLoginType] = useState('password');
  const [userInfo, updateUserInfo] = useUserInfo();
  const { cooldown, status, STATUS, getCaptcha } = useSetOtp('login-cooldown');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;

    if (loginType === 'opt') {
      res = await signinWithOtp({
        email: userInfo.email,
        code: userInfo.password,
      });
    } else if (loginType === 'password') {
      res = await signinWithPassword({
        email: userInfo.email,
        password: userInfo.password,
      });
    }

    if (res.status !== 200) {
      toast({
        title: '登录失败',
        description: `状态码: ${res.status}`,
        variant: 'destructive',
      });
      return;
    }

    const { data } = res;
    if (!data.success) {
      toast({
        title: '登录失败',
        description: data.errorMsg,
        variant: 'destructive',
      });
      return;
    }
    localStorage.setItem('token', data.data.token);
    localStorage.setItem('userInfo', JSON.stringify(data.data));

    toast({ description: '登录成功' });
  };

  return (
    <Inputs>
      {createInputField(
        'email',
        '请输入邮箱',
        userInfo.email,
        (v) => updateUserInfo('email', v),
        'email-input'
      )}
      <div className="email">
        <img src={emailIcon} alt="email" />
      </div>
      {createInputField(
        'password',
        `请输入${loginType === 'opt' ? '验证码' : '密码'}`,
        userInfo.password,
        (v) => updateUserInfo('password', v),
        'password-input'
      )}
      <div className="password">
        <img src={passwordIcon} alt="password" />
      </div>
      <MyToggle
        aria-label="Toggle italic"
        onClick={() => setLoginType(loginType === 'opt' ? 'password' : 'opt')}
      >
        <Mail className="h-4 w-4" />
      </MyToggle>
      {loginType === 'opt' && (
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
