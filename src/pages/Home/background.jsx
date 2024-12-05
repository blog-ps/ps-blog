import lightgirl from '@/assets/png/light.png';
import BlurFade from '@/components/ui/blur-fade';
import Piolet from '@/pages/Home/decorate/piolet';
import Sphere from '@/pages/Home/decorate/sphere';
import { useThemeMode } from '@/provider/theme-provider';
import styled from 'styled-components';
import Wave from './decorate/wave';

const BackGround = ({ children }) => {
  const { model } = useThemeMode();
  return (
    <Wrapper>
      {model === 'dark' ? (
        <>
          <BlurFadeLeft delay={0.25} inView>
            <Sphere />
          </BlurFadeLeft>
          <BlurFadeRight delay={0.5} inView>
            <Piolet />
          </BlurFadeRight>
        </>
      ) : (
        <div className="wave">
          <BlurFade delay={0.25} inView>
            <Wave />
          </BlurFade>
        </div>
      )}
      {children}
      {model === 'light' && (
        <Imgs className="imgs">
          <BlurFade inView className="light-girl">
            <img src={lightgirl} alt="lightgirl" />
            <div className="smallball" />
            <div className="bigball" />
          </BlurFade>
        </Imgs>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .wave {
    position: absolute;
    top: 0;
    left: 0;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Imgs = styled.section`
  .light-girl {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 640px;

    @media (min-width: 1024px) {
      max-width: 680px;
      right: 1rem;
    }

    @media (min-width: 1440px) {
      max-width: 680px;
      right: 3rem;
    }

    @media (min-width: 1920px) {
      max-width: 800px;
      right: 6rem;
    }

    /* 移动端 */
    @media (max-width: 768px) {
      width: 250px;
      top: 40vh;
    }
  }

  .smallball {
    z-index: -10;
    background: #e37e0f29;
    border-radius: 200px;
    width: 400px;
    height: 400px;
    position: absolute;
    top: 152px;
    right: 0;

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
    }
  }

  .bigball {
    z-index: -10;
    width: 576px;
    height: 576px;
    border-radius: 300px;
    background: #ffffff;
    opacity: 0.8;
    position: absolute;
    top: 255px;
    right: 180px;

    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
      top: 180px;
      right: 100px;
    }
  }
`;

const BlurFadeLeft = styled(BlurFade)`
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    left: auto;
    right: 0;
  }
`;

const BlurFadeRight = styled(BlurFade)`
  position: absolute;
  top: 0;
  right: 0;
`;

export default BackGround;
