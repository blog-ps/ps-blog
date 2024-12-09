import { register } from '@/api/user';
import emailIcon from '@/assets/svg/email.svg';
import passwordIcon from '@/assets/svg/password.svg';
import { InputOTP, InputOTPGroup } from '@/components/ui/input-otp';
import { useToast } from '@/hooks/use-toast';
import useSetOtp from '@/hooks/useSetOtp';
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

const SignUp = ({ createInputField, setIsSignUp }) => {
  const [otp, setOtp] = useState('');

  const [userInfo, updateUserInfo] = useUserInfo();
  const { toast } = useToast();
  const { cooldown, status, STATUS, getCaptcha } = useSetOtp('signup-cooldown');

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
    const res = await register(info);
    if (res.status !== 200) {
      toast({
        title: '注册失败',
        description: `状态码:${res.status}`,
        variant: 'destructive',
      });
      return;
    }

    const { data } = res;
    if (!data.success) {
      toast({
        title: '注册失败',
        description: data.errorMsg,
        variant: 'destructive',
      });
    } else {
      toast({ description: '注册成功' });
      setIsSignUp(false);
    }
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
        '请输入密码',
        userInfo.password,
        (v) => updateUserInfo('password', v),
        'password-input'
      )}
      <div className="password">
        <img src={passwordIcon} alt="password" />
      </div>
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
