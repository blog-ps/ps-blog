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
      <Suspense fallback={<Loading />}>
        {elements}
        <TollBar />
      </Suspense>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ $theme }) => $theme.background};
  color: ${({ $theme }) => $theme.color};
  min-height: 100vh;
`;
export default App;
