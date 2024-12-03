import styled from 'styled-components';
import Switch from './components/switch';
import { useModeTheme } from './providers/theme-provider';
import { Dock, DockIcon } from './components/ui/dock';

const App = () => {
  const theme = useModeTheme();
  return (
    <Wrapper $theme={theme}>
      <Docks direction="middle">
        <DockIcon>
          <Switch />
        </DockIcon>
      </Docks>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${({ $theme }) => $theme.background};
  color: ${({ $theme }) => $theme.fontColor};
  transition: background-color 0.5s, color 0.5s;
`;

const Docks = styled(Dock)`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
`;

export default App;
