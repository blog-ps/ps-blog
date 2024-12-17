import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import routers from '@/router';
import { useLocation, NavLink } from 'react-router';
import { useCallback } from 'react';
import useScrollPosition from '@/hooks/useScrollPosition';
import { SmartButton } from '@/components/ui/smartButton';

const Navigation = ({ children, themeStyle }) => {
  const [tag, setTag] = useState(() => {
    const tag = window.localStorage.getItem('tag');
    return tag ? tag : 'blog';
  });
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
  const handleClick = (tag) => {
    routers.push({ path: tag });
  };
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
        <SmartButton styled="navButton" onClick={() => handleClick('blog')}>
          博客文章
        </SmartButton>
        <SmartButton styled="navButton" onClick={() => handleClick('todoList')}>
          todoList
        </SmartButton>
        <SmartButton
          styled="navButton"
          onClick={() => handleClick('photoLibrary')}
        >
          摄影图库
        </SmartButton>
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
  left: 50vw;
  right: 40px;
  background-color: ${({ $themeStyle }) =>
    $themeStyle.navigationColor}; /* 背景颜色 */
  z-index: 1000; /* 确保在其他内容之上 */
  border-radius: 40px;
  padding: 20px;
  border: 2px solid ${({ $themeStyle }) => $themeStyle.navigationBorderColor}; /* 边框宽度 2 像素，实线，颜色为蓝色 */
`;
export default Navigation;
