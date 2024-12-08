import routers from '@/router';
import { Suspense } from 'react';
import { useRoutes } from 'react-router';
import styled from 'styled-components';
import Loading from './components/Loading';
import TollBar from './components/TollBar';
import { Toaster } from './components/ui/toaster';
import { useThemeStyle } from './provider/theme-provider';
import Grids from './components/decorate/grids';

const App = () => {
  const themeStyle = useThemeStyle();
  const elements = useRoutes(routers);

  return (
    <Wrapper $theme={themeStyle}>
      <Toaster />
      <Suspense fallback={<Loading />}>
        {elements}
        <TollBar />
        <Header />
      </Suspense>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ $theme }) => $theme.background};
  color: ${({ $theme }) => $theme.color};
  min-height: 100vh;
`;

const Header = styled(Grids)`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100vw;
  max-height: 100vh;
`;

export default App;
