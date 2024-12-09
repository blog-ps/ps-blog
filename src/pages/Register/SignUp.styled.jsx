import { Button } from '@/components/ui/button';
import { InputOTPSlot } from '@/components/ui/input-otp';
import styled from 'styled-components';

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  .submit {
    color: #0e435c;
    font-family: 'SF Pro Text';
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    display: flex;
    width: 320px;
    padding: 12px 123px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 30px;
    background: linear-gradient(91deg, #2fb8ff 0%, #9eecd9 100%);
    box-shadow: 0px 20px 40px 0px rgba(147, 231, 221, 0.3);

    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 40px,
        rgba(0, 0, 0, 0.3) 0px 0px 0px 0.5px inset,
        rgba(0, 0, 0, 0.1) 0px 10px 40px inset;
    }
  }
`;

const Captcha = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`;

const MyInputOTPSlot = styled(InputOTPSlot)`
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 20px;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const MyButton = styled(Button)`
  width: 120px;
  height: 40px;
  border-radius: 30px;
  background: linear-gradient(
    180deg,
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.25) 100%
  );
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.15);
  color: #fff;
  font-family: 'SF Pro Text';
  font-size: 15px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(
      180deg,
      rgba(99, 106, 150, 0.6) 0%,
      rgba(182, 186, 214, 0.35) 100%
    );
  }
`;

export { Captcha, Inputs, MyButton, MyInputOTPSlot };
