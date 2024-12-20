import { useThemeMode, useThemeStyle } from '@/provider/theme-provider';
import styled from 'styled-components';
import CardList from './sections/CardList';
import TitlePage from './sections/TitlePage';
const MyBlog = () => {
  const theme = useThemeStyle();
  const mode = useThemeMode();
  return (
    <Wrapper>
      <TitlePage></TitlePage>
      <CardWrapper $theme={theme} $mode={mode} id="MyblogWrapper">
        <CardList></CardList>
      </CardWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
`;
const CardWrapper = styled.div`
  position: relative; /* 确保 z-index 生效 */
  width: 100%;
  background: ${({ $mode }) =>
    $mode.model === 'light'
      ? 'linear-gradient(180deg, #4069e4 50%, rgba(255, 255, 255, 1) 100%)'
      : '#0F103F'};
  color: ${({ $theme }) => $theme.color};
  z-index: 1;
`;
export default MyBlog;
