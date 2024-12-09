import emailIcon from '@/assets/svg/email.svg';
import passwordIcon from '@/assets/svg/password.svg';
import InputWithIcon from '@/components/InputWithIcon';
import { InputOTP, InputOTPGroup } from '@/components/ui/input-otp';
import { useToast } from '@/hooks/use-toast';
import useSetOtp from '@/hooks/useSetOtp';
import useUserStore from '@/store/user';
import { Loader2 } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Captcha, Inputs, MyButton, MyInputOTPSlot } from './SignUp.styled';

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const updateUserInfo = (key, value) => {
    setUserInfo((prev) => ({ ...prev, [key]: value.trim() }));
  };
  return [userInfo, updateUserInfo];
};

const SignUp = ({ setIsSignUp }) => {
  const [otp, setOtp] = useState('');
  const [userInfo, updateUserInfo] = useUserInfo();
  const { toast } = useToast();
  const { cooldown, status, STATUS, getCaptcha } = useSetOtp('signup-cooldown');
  const { register } = useUserStore();

  const captchaTxt = (status, cooldown) => {
    if (status === STATUS.LOADING) return '正在获取中...';
    if (status === STATUS.COOLDOWN) return `请 ${cooldown}s 后重试`;
    return '获取验证码';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInfo.email || !userInfo.password || otp.length !== 4) {
      toast({ description: '请填写完整信息', variant: 'destructive' });
      return;
    }

    const info = {
      email: userInfo.email,
      password: userInfo.password,
      code: otp,
    };
    await register(info, () => setIsSignUp(false));
  };

  return (
    <Inputs>
      <InputWithIcon
        value={userInfo.email}
        onChange={(v) => updateUserInfo('email', v)}
        placeholder="请输入邮箱"
        src={emailIcon}
        alt="email"
      />

      <InputWithIcon
        type="password"
        value={userInfo.password}
        onChange={(v) => updateUserInfo('password', v)}
        placeholder="请输入密码"
        src={passwordIcon}
        alt="password"
      />

      <Captcha>
        <MyButton
          disabled={status === STATUS.LOADING || status === STATUS.COOLDOWN}
          type="button"
          onClick={() => getCaptcha(userInfo.email)}
        >
          {status === STATUS.LOADING && <Loader2 className="animate-spin" />}
          {captchaTxt(status, cooldown)}
        </MyButton>
        <InputOTP maxLength={4} value={otp} onChange={setOtp}>
          <InputOTPGroup>
            {Array.from({ length: 4 }, (_, index) => (
              <MyInputOTPSlot custom index={index} key={index} />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </Captcha>
      <input type="submit" className="submit" onClick={handleSubmit} />
    </Inputs>
  );
};

SignUp.propTypes = {
  createInputField: PropTypes.func.isRequired,
};

export default SignUp;
