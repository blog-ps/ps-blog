import darkIcon from '@/assets/svg/dark.svg';
import lightIcon from '@/assets/svg/light.svg';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useThemeMode } from '../provider/theme-provider';

const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn && fn(...args));

const Magnitude = {
  small: 24,
  medium: 32,
  large: 64,
};

const Switch = ({ onClick = () => {}, size = 'medium' }) => {
  const { model, setModel } = useThemeMode();
  const isDark = model === 'dark';
  const toggleTheme = () => {
    setModel(isDark ? 'light' : 'dark');
  };

  return (
    <SwitchContent
      onClick={callAll(toggleTheme, onClick)}
      $isDark={isDark}
      $size={Magnitude[size]}
    >
      {isDark && <img src={darkIcon} alt="dark" />}
      {!isDark && <img src={lightIcon} alt="light" />}
    </SwitchContent>
  );
};

const SwitchContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  padding: 2px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid ${({ $isDark }) => ($isDark ? '#86c3db' : '#fbbf24')};
  background-color: ${({ $isDark }) => ($isDark ? '#86c3db36' : '#fbbe2436')};
  transition: all 0.3s ease-in-out;
  img {
    width: 24px;
    height: 24px;
    filter: none !important;
  }
`;

Switch.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Switch;
