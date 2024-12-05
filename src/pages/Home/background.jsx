import lightgirl from '@/assets/png/light.png';
import BlurFade from '@/components/ui/blur-fade';
import Piolet from '@/pages/Home/decorate/piolet';
import Sphere from '@/pages/Home/decorate/sphere';
import styled from 'styled-components';
import Wave from './decorate/wave';

const BackGround = ({ model, children }) => {
  return (
    <>
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
    </>
  );
};

const Imgs = styled.section`
  .light-girl {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 640px;
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
  }
`;

const BlurFadeLeft = styled(BlurFade)`
  position: absolute;
  top: 0;
  left: 0;
`;

const BlurFadeRight = styled(BlurFade)`
  position: absolute;
  top: 0;
  right: 0;
`;

export default BackGround;
