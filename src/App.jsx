import routers from '@/router';
import { Suspense } from 'react';
import { useRoutes } from 'react-router';
import styled from 'styled-components';
import Loading from './components/Loading';
import TollBar from './components/TollBar';
import { useModeTheme } from './provider/theme-provider';

const App = () => {
  const theme = useModeTheme();
  const elements = useRoutes(routers);
  return (
    <Wrapper $theme={theme}>
      <Suspense fallback={<Loading />}>
        {elements}
        <TollBar />
      </Suspense>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background: ${({ $theme }) => $theme.background};
  color: ${({ $theme }) => $theme.color};
`;

export default App;
