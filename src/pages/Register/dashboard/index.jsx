import useUserStore from '@/store/user';
import styled, { keyframes } from 'styled-components';

const Dashboard = () => {
  const { LogOut } = useUserStore();

  return (
    <Wrapper>
      <Content>
        <Main>
          <p>Edit Profile</p>
          <h1>Manage your DesignCode profile and account</h1>

          <Avatar></Avatar>
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
  width: 1400px;
  height: 820px;

  border-radius: 20px;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  fill: #292953;
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

const Avatar = styled.div``;
