import routers from '@/router';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useRoutes } from 'react-router';
import styled from 'styled-components';
import Loading from './components/Loading';
import TollBar from './components/TollBar';
import { Toaster } from './components/ui/toaster';
import { useThemeStyle } from './provider/theme-provider';
// TODO 样式
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const App = () => {
  const themeStyle = useThemeStyle();
  const elements = useRoutes(routers);

  return (
    <Wrapper $theme={themeStyle}>
      <Toaster />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.href = '/';
        }}
      >
        <Suspense fallback={<Loading />}>{elements}</Suspense>
      </ErrorBoundary>
      <TollBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ $theme }) => $theme.background};
  color: ${({ $theme }) => $theme.color};
`;

export default App;
