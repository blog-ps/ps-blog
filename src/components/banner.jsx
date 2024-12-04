import { useThemeMode, useThemeStyle } from '@/provider/theme-provider';
import styled from 'styled-components';
import darkIcon from '@/assets/img/home/dark.jpg';
import lightIcon from '@/assets/img/home/light.jpg';
const Circle = styled.div`
  width: 576px;
  height: 576px;
  border-radius: 300px;
  background: ${({ $themeStyle, $location }) =>
    $themeStyle['background' + ($location === 'left' ? '1' : '2')]};
  opacity: 0.8;
  position: absolute;
  top: ${({ $location }) => {
    return $location === 'left' ? '225px' : '152px';
  }};
  right: ${({ $location }) => ($location === 'left' ? '180px' : '-24px')};
`;
const imgStyle = {
  opacity: 0.99,
  minWidth: '800px', // 固定宽度
  minHeight: '900px', // 固定高度
  width: '100%', // 如果容器小于 656px，图片会缩放
  height: '100%', // 如果容器小于 900px，图片会缩放
};
const bannerImg = {
  position: 'absolute',
  right: 0,
};
const bannerLeft = {
  paddingTop: '220px',
};
const banner = {
  position: 'relative',
  unicodeBidi: 'isolate',
  display: 'block',
  width: '1240px',
  height: '885px',
};
const slogan = {
  paddingTop: '48px',
  paddingBottom: '64px',
  fontSize: '64px',
  fontWeight: '600',
};
const Banner = () => {
  const theme = useThemeMode();
  const themeStyle = useThemeStyle();
  const isLight = theme.model === 'light';
  return (
    <div style={banner}>
      <div className="banner-img" style={bannerImg}>
        <Circle $themeStyle={themeStyle} $location="left"></Circle>
        <Circle $themeStyle={themeStyle} $location="right"></Circle>
        <img src={isLight ? lightIcon : darkIcon} style={imgStyle}></img>
      </div>
      <div className="banner-left" style={bannerLeft}>
        <div style={{ fontSize: '100px', fontWeight: '1000' }}>一念神魔</div>
        <p style={slogan}>
          {isLight ? (
            <>
              化神为佑
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;沐林绝土
            </>
          ) : (
            <>
              独依白夜
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;破魔为生
            </>
          )}
        </p>
      </div>
    </div>
  );
};
export default Banner;
