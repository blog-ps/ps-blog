import userIcon from '@/assets/svg/user.svg';
import email from '@/assets/svg/logo/email.svg';
import desc from '@/assets/svg/logo/desc.svg';
import InputWithIcon from '@/components/InputWithIcon';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import useUserStore from '@/store/user';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Dashboard = () => {
  const { LogOut, user } = useUserStore();
  const [userInfo, setUserInfo] = useState(() => user);

  return (
    <Wrapper>
      <Content>
        <Main>
          <p>Edit Profile</p>
          <h1>Manage your DesignCode profile and account</h1>

          <AvatarGroup>
            <Avatar className="avator-img">
              <AvatarImage src={userInfo.img || userIcon} alt="avator" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="change">Change avatar</div>
          </AvatarGroup>

          <Settings>
            <div className="profile">
              <h1>Profile</h1>
              <InputWithIcon
                type="text"
                src={email}
                value={userInfo.email}
                disabled={true}
              />
              <InputWithIcon
                type="text"
                value={userInfo.nickName}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, nickName: e.target.value })
                }
                src={userIcon}
                alt="nickName"
              />
              <InputWithIcon
                inputType="textarea"
                value={userInfo.description || ''}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, description: e.target.value })
                }
                src={desc}
              />
              <button>Save settings</button>
            </div>
          </Settings>
        </Main>
      </Content>
    </Wrapper>
  );
};

export default Dashboard;

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

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 960px;
  height: 600px;

  border-radius: 20px;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  stroke-width: 0.5px;
  stroke: rgba(255, 255, 255, 0.2);
  filter: drop-shadow(0px 50px 100px rgba(31, 31, 71, 0.3));
  backdrop-filter: blur(20px);

  animation: 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s 1 normal forwards running
    ${showUp};
`;

const Content = styled.section`
  padding-top: 30px;
  padding-left: 30px;
`;

const Main = styled.div`
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

    button {
      padding: 16px;
      border-radius: 30px;
      background: linear-gradient(91deg, #2fb8ff 0%, #9eecd9 100%);
      box-shadow: 0px 20px 40px 0px rgba(147, 231, 221, 0.3);
      color: #0e435c;
      font-family: 'SF Pro Text';
      font-size: 17px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;
