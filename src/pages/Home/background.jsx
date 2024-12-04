import Piolet from '@/pages/Home/decorate/piolet';
import Sphere from '@/pages/Home/decorate/sphere';
import { useThemeMode, useThemeStyle } from '@/provider/theme-provider';
import styled from 'styled-components';
import darkIcon from '@/assets/img/home/dark.jpg';
import lightIcon from '@/assets/img/home/light.jpg';
import Wave from './decorate/wave';
const Circle = styled.div`
  width: ${({ $location }) => ($location === 'left' ? '35vw;' : '20vw')};
  height: ${({ $location }) => ($location === 'left' ? '35vw;' : '20vw')};
  border-radius: 50%;
  background: ${({ $themeStyle, $location }) =>
    $themeStyle['themeColor' + ($location === 'left' ? '1' : '2')]};
  opacity: 0.8;
  position: absolute;
  top: ${({ $location }) => {
    return $location === 'left' ? '14.34vh' : '21.23 vh';
  }};
  right: ${({ $location }) => ($location === 'left' ? '9.09vw' : '3vh')};
`;
const bannerImg = {
  position: 'absolute',
  right: 0,
};
const imgStyle = {
  opacity: 0.99,
  maxWidth: '100vh', // 固定宽度
  maxHeight: '100vh', // 固定高度
};
const Background = () => {
  const theme = useThemeMode();
  const themeStyle = useThemeStyle();
  const isLight = theme.model === 'light';
  const { model } = useThemeMode();
  return (
    <Wrapper>
      {model === 'dark' && (
        <>
          <div className="sphere">
            <Sphere />
          </div>
          <div className="piolet">
            <Piolet />
          </div>
        </>
      )}

      {model === 'light' && (
        <div className="wave">
          <div className="banner-img" style={bannerImg}>
            <Circle $themeStyle={themeStyle} $location="right"></Circle>
            <Circle $themeStyle={themeStyle} $location="left"></Circle>
            <img src={isLight ? lightIcon : darkIcon} style={imgStyle}></img>
          </div>
          <Wave />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  .sphere,
  .wave {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .piolet {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export default Background;
