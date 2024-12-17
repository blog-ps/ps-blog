import { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { useCallback } from 'react';
import useScrollPosition from '@/hooks/useScrollPosition';
import { SmartButton } from '@/components/ui/smartButton';
import { useThemeStyle } from '@/provider/theme-provider';
import { useNavigate } from 'react-router';
const Navigation = ({ children }) => {
  const themeStyle = useThemeStyle();

  const tagItem = [
    {
      name: '博客',
      url: '/blog/',
    },
    {
      name: '项目',
      url: '/blog/program',
    },
    {
      name: '摄影',
      url: '/blog/photoLibrary',
    },
    {
      name: 'todoList',
      url: '/blog/todoList',
    },
  ];
  const [tagName, setTagName] = useState(() => {
    const tagName = window.localStorage.getItem('BlogTagName');
    return tagName ? tagName : tagItem[0].name;
  });
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
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
  const handleClick = (ChoosedTag) => {
    if (tagName !== ChoosedTag.name) {
      setTagName(ChoosedTag.name);
      console.log('nagetive');

      navigate(ChoosedTag.url);
    }
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
        $tagIndex={tagItem.findIndex((item) => item.name === tagName) + 1}
        className={`my-div ${visible ? 'slide-in' : 'slide-out'}`}
      >
        {tagItem.map((item, index) => {
          return (
            <SmartButton key={index} onClick={() => handleClick(item)}>
              {item.name}
            </SmartButton>
          );
        })}
      </NavigationContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: fixed;
  top: 0px; /* 距离视口顶部0像素 */
  left: 35vw;
  right: 0px;
  height: 15vh;
  z-index: 1;
  /* pointer-events: none; */
`;

const NavigationContainer = styled.div`
  button:nth-child(${($tagIndex) => $tagIndex}) {
    border: 2px solid black; // 自定义边框样式
  }
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
