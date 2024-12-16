import styled, { keyframes } from 'styled-components';
import Form from './Form';
import Particles from '@/components/ui/particles';

const Dashboard = () => {
  return (
    <Wrapper>
      <Content>
        <Form />
      </Content>
      <MyParticles quantity={150} ease={80} refresh />
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
  padding: 30px;

  display: grid;
  grid-template-columns: repeat(2, auto);
`;

const MyParticles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
