import card from '@/assets/svg/cover/card.svg';
import { Button } from '@/components/ui/button';
import { InputOTPSlot } from '@/components/ui/input-otp';
import styled, { keyframes } from 'styled-components';

const showUp = keyframes`
  0% {
    transform: translate(-50%, -50%) translateY(-100px) scale(0.8);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) translateY(0px)  scale(1);
    opacity: 1;
  }
`;

const Wrapper = styled.section`
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 960px;
  height: 610px;

  border-radius: 20px;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  background: rgba(50, 61, 109, 0.5);
  box-shadow: 0px 50px 100px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  animation: 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s 1 normal forwards running
    ${showUp};
`;

const Content = styled.div`
  padding: 20px 0 20px 20px;
  display: grid;

  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: start;
  gap: 130px;

  .card {
    width: 360px;
    height: 570px;
    background-image: url(${card});
    background-size: cover;
    background-position: center;
    filter: drop-shadow(0px 30px 60px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
  }

  h2 {
    color: rgba(255, 255, 255, 0.7);
    font-family: 'SF Pro Text';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    max-width: 320px;
  }

  .divider {
    width: 300px;
    height: 0.5px;
    background: rgba(255, 255, 255, 0.2);
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    h1 {
      color: rgba(255, 255, 255, 0.7);
      font-family: 'SF Pro Text';
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }

    a {
      cursor: pointer;
      color: #00cffd;
      font-family: 'SF Pro Text';
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: 130%;
    }
  }
`;

const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  h1 {
    color: #fff;
    font-family: 'SF Pro Display';
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p {
    max-width: 320px;
    color: rgba(255, 255, 255, 0.4);
    font-family: 'SF Pro Text';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 19.5px */
  }

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

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  .email,
  .password {
    position: absolute;
    padding: 6px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }

  .email {
    left: 4px;
    top: 4px;
  }

  .password {
    left: 4px;
    top: 64px;
  }

  input {
    display: flex;
    width: 320px;
    height: 40px;
    padding: 4px;
    padding-left: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    transition: all 0.3s ease;

    border-radius: 30px;
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    background: linear-gradient(
      180deg,
      rgba(99, 106, 150, 0.4) 0%,
      rgba(182, 186, 214, 0.25) 100%
    );
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.15);

    color: #fff;
    font-family: 'SF Pro Text';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }

    &:focus {
      outline: none;
      padding-left: 42px;
      box-shadow: rgba(47, 184, 255, 0.3) 0px 10px 40px,
        rgb(47, 184, 255) 0px 0px 0px 1px inset;
      background: linear-gradient(
        rgba(24, 32, 79, 0.4) 0%,
        rgba(24, 32, 79, 0.25) 100%
      );
      padding-left: 40px;
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

export { Captcha, Content, Form, Inputs, Wrapper, MyButton, MyInputOTPSlot };
