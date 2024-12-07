import email from '@/assets/svg/email.svg';
import password from '@/assets/svg/password.svg';
import { InputOTP, InputOTPGroup } from '@/components/ui/input-otp';
import { useToast } from '@/hooks/use-toast';
import useDebouncedFn from '@/hooks/useDebouncedFn';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  Captcha,
  Content,
  Form,
  Inputs,
  MyButton,
  MyInputOTPSlot,
  Wrapper,
} from './Register.styled';
import { getCaptchaCode } from '@/api/requrst';

const COOLDOWN = 10;
const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  COOLDOWN: 'cooldown',
  ERROR: 'error',
};

const captchaTxt = (status, cooldown) => {
  const texts = {
    [STATUS.LOADING]: '正在获取中...',
    [STATUS.COOLDOWN]: `请${cooldown}s后重试`,
    default: '获取验证码',
  };
  return texts[status] || texts.default;
};

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const updateUserInfo = (key, value) => {
    setUserInfo((prev) => ({ ...prev, [key]: value.trim() }));
  };
  return [userInfo, updateUserInfo];
};

const Register = () => {
  const [cooldown, setCooldown] = useState(() => {
    return Number(localStorage.getItem('cooldown')) || COOLDOWN;
  });
  const [status, setStatus] = useState(STATUS.IDLE);
  const [otp, setOtp] = useState('');
  const [userInfo, updateUserInfo] = useUserInfo();
  const { toast } = useToast();

  const reset = () => {
    setStatus(STATUS.IDLE);
  };

  const getCaptcha = useDebouncedFn(async () => {
    setStatus(STATUS.LOADING);

    const emailRegex =
      /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (!emailRegex.test(userInfo.email)) {
      toast({ description: '请输入有效的邮箱地址', variant: 'destructive' });
      setStatus(STATUS.ERROR);
      return;
    }
    const res = await getCaptchaCode(userInfo.email);

    if (res.status === 200) {
      setStatus(STATUS.COOLDOWN);
      toast({ description: '验证码已发送,请注意查收' });
    } else {
      setStatus(STATUS.ERROR);
      toast({ description: '获取验证码失败', variant: 'destructive' });
    }
  });

  useEffect(() => {
    if (
      status === STATUS.COOLDOWN ||
      Number(localStorage.getItem('cooldown')) !== COOLDOWN
    ) {
      const interval = setInterval(() => {
        const prev = Number(localStorage.getItem('cooldown'));
        setCooldown(() => {
          if (prev === 0) {
            reset();
            localStorage.setItem('cooldown', COOLDOWN);
            clearInterval(interval);
            return COOLDOWN;
          }
          localStorage.setItem('cooldown', prev - 1);
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [cooldown, status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInfo.email || !userInfo.password || otp.length !== 4) {
      toast({ description: '请填写完整信息', variant: 'destructive' });
      return;
    }
  };

  const createInputField = (type, placeholder, value, onChangeHandler) => (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChangeHandler(e.target.value)}
    />
  );

  return (
    <Wrapper>
      <Content>
        <div className="card" />
        <Form>
          <h1>Sign up</h1>
          <p>Access to 80+ hours of courses, tutorials and source files</p>
          <Inputs>
            {createInputField('email', '请输入邮箱', userInfo.email, (v) =>
              updateUserInfo('email', v)
            )}
            <div className="email">
              <img src={email} alt="email" />
            </div>
            {createInputField(
              'password',
              '请输入密码',
              userInfo.password,
              (v) => updateUserInfo('password', v)
            )}
            <div className="password">
              <img src={password} alt="password" />
            </div>
            <Captcha>
              <MyButton
                disabled={
                  status === STATUS.LOADING ||
                  Number(localStorage.getItem('cooldown')) !== COOLDOWN
                }
                type="button"
                onClick={getCaptcha}
              >
                {status === 'loading' && <Loader2 className="animate-spin" />}
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
          </Inputs>
          <input type="submit" className="submit" onClick={handleSubmit} />
          <h2>
            By clicking on Sign up, you agree to our Terms of service and
            Privacy policy.
          </h2>
          <div className="divider" />
          <div className="footer">
            <h1>
              Already have an account? <a>Sign in</a>
            </h1>
            <h1>
              Forgot password? <a>Reset password</a>
            </h1>
          </div>
        </Form>
      </Content>
    </Wrapper>
  );
};

export default Register;
