import card from '@/assets/svg/cover/card.svg';
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
`;

export { Content, Form, Wrapper };
