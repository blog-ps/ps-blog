import BlurFade from '@/components/ui/blur-fade';
import { FadeText } from '@/components/ui/fade-text';
import WordRotate from '@/components/ui/word-rotate';
import styled, { keyframes } from 'styled-components';

const FadeTextP = styled(FadeText)`
  background: ${({ $model }) =>
    $model === 'dark'
      ? 'linear-gradient(312deg, #D6DEFF 12.16%, #747EB5 67.59%, #6E4291 94.73%)'
      : 'linear-gradient(180deg, #730040 0%, #301cbe 100%)'};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: 'SF Pro Display';
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const MyWordRotate = styled(WordRotate)`
  background: linear-gradient(
    110deg,
    #ff9d3f 0.07%,
    #f46772 33.9%,
    #af33e4 66.29%,
    #2f70e4 100.44%
  );

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: 'SF Pro Display';
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const FadeTextH2 = styled(FadeText)`
  color: ${({ $model }) => ($model === 'dark' ? '#fff' : '#000')};
  font-family: 'SF Pro Text';
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

const Content = styled.section`
  padding: 240px 100px;
  transition: all 0.5s ease;
  display: inline-block;
  ${({ $model }) => $model === 'dark' && 'transform: translateX(160px);'}

  @media (max-width: 768px) {
    padding: 40px;
    transform: none;
  }

  .description {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 500px;
    gap: 30px;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    .description {
      transform: translateY(20px);
      gap: 0px;
    }

    ${FadeTextP}, ${MyWordRotate} {
      font-size: 40px;
    }

    ${FadeTextH2} {
      font-size: 14px;
    }

    ${'.blurFade'} {
      display: none;
    }
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;

  .wave {
    position: absolute;
    top: 0;
    left: 0;

    img {
      position: absolute;
      top: -20px;
      left: -180px;
      width: 1000px;

      animation: ${rotate} 20s linear infinite;
      transform-origin: center;
      will-change: transform;
    }

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

export {
  Wrapper,
  Content,
  Imgs,
  BlurFadeLeft,
  BlurFadeRight,
  FadeTextP,
  MyWordRotate,
  FadeTextH2,
};
