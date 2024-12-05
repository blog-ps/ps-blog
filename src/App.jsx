import routers from '@/router';
import { Suspense } from 'react';
import { useRoutes } from 'react-router';
import styled from 'styled-components';
import Loading from './components/Loading';
import TollBar from './components/TollBar';
import { useThemeStyle } from './provider/theme-provider';

const App = () => {
  const themeStyle = useThemeStyle();
  const elements = useRoutes(routers);
  return (
    <Wrapper $theme={themeStyle} id="wrapper">
      <Content>
        <Inner>
          <Suspense fallback={<Loading />}>
            {elements}
            <TollBar />
          </Suspense>
        </Inner>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ $theme }) => $theme.background};
  color: ${({ $theme }) => $theme.color};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 居中对齐 */
  overflow: hidden;
  min-height: 100vh;
`;
const Inner = styled.div`
  width: 100%;
`;
export default App;
