import register from '@/assets/jpg/register-background.jpeg';
import wave1 from '@/assets/svg/waves/wave1.svg';
import wave2 from '@/assets/svg/waves/wave2.svg';
import wave3 from '@/assets/svg/waves/wave3.svg';
import wave4 from '@/assets/svg/waves/wave4.svg';
import Wave from '@/components/decorate/wave';
import BlurFade from '@/components/ui/blur-fade';
import { useThemeMode } from '@/provider/theme-provider';
import styled from 'styled-components';
import LogForm from './LogForm';
import Dashboard from './dashboard';

const Index = () => {
  const { model } = useThemeMode();
  const isLogIn = JSON.parse(localStorage.getItem('userInfo')) !== null;

  return (
    <Wrapper $model={model}>
      {model === 'light' ? (
        <BlurFade inView className="wave">
          <Wave />
        </BlurFade>
      ) : (
        <Waves>
          <BlurFade delay={0.75} className="wave1">
            <img src={wave1} alt="wave1" />
          </BlurFade>
          <BlurFade delay={0.5} className="wave2">
            <img src={wave2} alt="wave2" />
          </BlurFade>
          <BlurFade delay={0.25} inView className="wave3">
            <img src={wave3} alt="wave3" />
          </BlurFade>
          <BlurFade className="wave4" inView>
            <img src={wave4} alt="wave4" />
          </BlurFade>
        </Waves>
      )}
      {model === 'light' ? <Img /> : null}
      {isLogIn ? <Dashboard /> : <LogForm />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  background: ${({ $model }) =>
    $model === 'dark' && 'linear-gradient(180deg, #343563 0%, #4926AD 100%)'};

  overflow: hidden;

  .wave {
    position: absolute;
    bottom: 0;
    left: 100px;
    z-index: 1;
  }
`;

const Img = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background-image: url(${register});
  background-size: cover;
  background-position: center;
  filter: blur(100px);

  width: 600px;
  height: 600px;
`;

const waveStyles = `
  position: absolute;
  width: 100vw;
  mix-blend-mode: overlay;
`;

const Waves = styled.section`
  img {
    width: 100%;
    height: 100%;
  }

  .wave1 {
    ${waveStyles}
    fill: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.69) 2.75%,
      rgba(255, 255, 255, 0) 54.89%
    );
    bottom: 120px;
  }

  .wave2 {
    ${waveStyles}
    fill: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 37.94%,
      rgba(0, 0, 0, 0.7) 107.12%
    );
    bottom: 80px;
  }

  .wave3 {
    ${waveStyles}
    fill: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.69) 0%,
      rgba(0, 0, 0, 0) 54.89%
    );
    bottom: 40px;
  }

  .wave4 {
    ${waveStyles}
    fill: linear-gradient(180deg, #bcc6f6 0%, #f2f6ff 100%);
    bottom: 0;
  }
`;

export default Index;
