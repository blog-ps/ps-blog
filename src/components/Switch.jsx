import darkIcon from '@/assets/dark.svg';
import lightIcon from '@/assets/light.svg';
import useDarkMode from '@/hooks/useDarkMode';
import styled from 'styled-components';

const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn && fn(...args));

const Switch = ({ onClick }) => {
  const { theme, toggleTheme } = useDarkMode();
  const isDark = theme === 'dark';

  return (
    <SwitchContent onClick={callAll(toggleTheme, onClick)} $isDark={isDark}>
      {isDark && <img src={darkIcon} alt="dark" />}
      {!isDark && <img src={lightIcon} alt="light" />}
    </SwitchContent>
  );
};

const SwitchContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid ${({ $isDark }) => ($isDark ? '#86c3db' : '#fbbf24')};
  background-color: ${({ $isDark }) => ($isDark ? '#86c3db36' : '#fbbe2436')};
  transition: all 0.3s ease-in-out;
  img {
    width: 24px;
    height: 24px;
  }
`;

export default Switch;
