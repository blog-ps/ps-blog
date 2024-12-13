import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import routers from '@/router';
import { useLocation } from 'react-router';
import { useCallback } from 'react';
import useScrollPosition from '@/hooks/useScrollPosition';

const Navigation = ({ children, themeStyle }) => {
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  const handleScroll = useCallback(
    (oldScroll, newScroll) => {
      if (oldScroll > newScroll && visible === true) {
        setVisible(false);
      } else if (oldScroll <= newScroll && visible === false) {
        setVisible(true);
      }
    },
    [visible]
  );
  useScrollPosition(location.pathname.slice(1), handleScroll);
  return (
    <Wrapper
      onMouseEnter={() => {
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}
    >
      <NavigationContainer
        $themeStyle={themeStyle}
        className={`my-div ${visible ? 'slide-in' : 'slide-out'}`}
      >
        <h1 className="hover-effect">鼠标悬停在这里</h1>
      </NavigationContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: fixed;
  top: 0px; /* 距离视口顶部0像素 */
  left: 0px;
  right: 0px;
  height: 10vh;
  z-index: 1;
`;
const NavigationContainer = styled.div`
  backdrop-filter: blur(10px);
  position: fixed;
  top: 20px; /* 距离视口顶部0像素 */
  left: 40px;
  right: 40px;
  background-color: ${({ $themeStyle }) =>
    $themeStyle.navigationColor}; /* 背景颜色 */
  z-index: 1000; /* 确保在其他内容之上 */
  border-radius: 40px;
  padding: 20px;
  border: 2px solid ${({ $themeStyle }) => $themeStyle.navigationBorderColor}; /* 边框宽度 2 像素，实线，颜色为蓝色 */
`;
export default Navigation;
