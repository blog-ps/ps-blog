import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;

  p {
    color: #fff;
    font-family: 'SF Pro Text';
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    text-transform: uppercase;
  }

  h1 {
    color: rgba(255, 255, 255, 0.7);
    font-family: 'SF Pro Text';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

const AvatarGroup = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 17px;

  .avator-img {
    width: 80px;
    height: 80px;
  }

  .change {
    border-radius: 30px;
    padding: 8px 15px;
    border: 0.5px solid rgba(0, 0, 0, 0.3);
    background: linear-gradient(
      180deg,
      rgba(24, 32, 79, 0.4) 0%,
      rgba(24, 32, 79, 0.25) 100%
    );
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(20px);
    cursor: pointer;

    color: #fff;
    text-align: center;
    font-family: 'SF Pro Text';
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    text-transform: uppercase;
  }
`;

const Settings = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: start;
  justify-content: start;
  gap: 50px;

  .profile {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-around;

  button {
    padding: 12px;
    border-radius: 30px;
    background: linear-gradient(91deg, #2fb8ff 0%, #9eecd9 100%);
    box-shadow: 0px 20px 40px 0px rgba(147, 231, 221, 0.3);
    color: #0e435c;
    font-family: 'SF Pro Text';
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }

  .logout {
    background: linear-gradient(180deg, #ff5252 0%, #ff72b6 100%);
    color: white;
    text-align: center;
  }
`;

export { AvatarGroup, Buttons, Settings, Wrapper };
