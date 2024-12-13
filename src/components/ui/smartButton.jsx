import { useThemeStyle } from '@/provider/theme-provider';
import styled from 'styled-components';
const SmartButton = ({ children, ...props }) => {
  const theme = useThemeStyle();
  return (
    <SmartButtonWapper $theme={theme} {...props}>
      <span>{children}</span>
    </SmartButtonWapper>
  );
};
const SmartButtonWapper = styled.button`
  position: relative;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: ${({ $theme }) => $theme.bottomColor1};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden; /* 隐藏溢出部分 */
  transition: color 0.3s ease; /* 文本颜色变化的平滑过渡 */

  &:hover {
    color: white; /* 鼠标悬停时保持文本白色 */
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%; /* 设置宽度比按钮大 */
    height: 300%; /* 设置高度比按钮大 */
    background-color: ${({ $theme }) => $theme.bottomColor2}; /* 蓝色背景 */
    border-radius: 50%; /* 圆形背景 */
    transform: translate(-50%, -50%) scale(0); /* 初始缩放为0 */
    transition: transform 0.6s ease; /* 平滑缩放过渡 */
    z-index: 0; /* 放在文字后面 */
  }

  &:hover:before {
    transform: translate(-50%, -50%) scale(1); /* 鼠标悬停时扩展到满屏 */
  }

  span {
    position: relative; /* 相对定位以便文字在前面 */
    z-index: 1; /* 确保文本在背景之上 */
  }
`;

export { SmartButton };
