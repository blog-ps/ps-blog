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
    <Wrapper $theme={themeStyle}>
      <Inner>
        <Suspense fallback={<Loading />}>
          {elements}
          <TollBar />
        </Suspense>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background-color: ${({ $theme }) => $theme.background};
  color: ${({ $theme }) => $theme.color};
  margin: 0 auto 96px;
  padding: 0 136px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
`;
const Inner = styled.div`
  width: 100%;
  padding: 0 200px;
`;
export default App;
