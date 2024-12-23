import { useThemeMode, useThemeStyle } from '@/provider/theme-provider';
import styled from 'styled-components';
import sese from '@/assets/img/myblog/sese.png';

const DetailsPage = () => {
  const theme = useThemeStyle();
  const mode = useThemeMode();
  return (
    <Wrapper $theme={theme}>
      <ImgWrapper>
        <ImgContent>
          <img src={sese} alt=""></img>
        </ImgContent>
      </ImgWrapper>

      <ContextWrapper $theme={theme}>
        <Inner $theme={theme}>
          <Title>标题</Title>
          <Abstract>简介</Abstract>
          <Context>{Array(40).fill('我是简介').join(' ')}</Context>
        </Inner>
      </ContextWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  background: ${({ $theme }) => $theme.background};
  color: ${({ $theme }) => $theme.color};
`;
const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 175vh;
  padding: 2vh 20vw;
  background: ${({ $theme }) => $theme.background};
  color: ${({ $theme }) => $theme.color};
`;
const ContextWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
`;
const Context = styled.div`
  width: 100%;
`;
const Title = styled.div`
  width: 100%;
`;
const Abstract = styled.div`
  width: 100%;
`;
const ImgWrapper = styled.div`
  width: 100%;
  height: 55vh; /* 固定高度 */
  overflow: hidden;
  z-index: 0; /* 确保图片层级较低 */
`;
const ImgContent = styled.div`
  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 55vh; /* 固定高度 */
`;
export default DetailsPage;
