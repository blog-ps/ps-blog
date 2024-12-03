import styled from 'styled-components';
import Switch from './components/switch';
import { useModeTheme } from './providers/theme-provider';

const App = () => {
  const theme = useModeTheme();
  return (
    <Wrapper $theme={theme}>
      <Switch />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${({ $theme }) => $theme.background};
  color: ${({ $theme }) => $theme.fontColor};

  &,
  * {
    transition: background-color 0.5s, color 0.5s;
  }
`;

export default App;
