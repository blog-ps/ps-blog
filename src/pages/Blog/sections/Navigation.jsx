import { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { useCallback } from 'react';
import useScrollPosition from '@/hooks/useScrollPosition';
import { SmartButton } from '@/components/ui/smartButton';
import { useThemeStyle } from '@/provider/theme-provider';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useReducer } from 'react';
import { reducer } from '@/hooks/use-toast';
const Navigation = ({ children }) => {
  const themeStyle = useThemeStyle();
  // const oldTagName = useRef(null);

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
  const [tag, setTag] = useState(() => {
    const localTag = JSON.parse(window.localStorage.getItem('BlogTag'));
    return localTag ? localTag : tagItem[0];
  });
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const handleScroll = useCallback(
    (oldScroll, newScroll) => {
      console.log('oldScroll', oldScroll);
      console.log('newScroll', newScroll);
      if (oldScroll > newScroll && visible === true) {
        console.log('set Visable false');

        setVisible(false);
      } else if (oldScroll <= newScroll && visible === false) {
        setVisible(true);
      }
    },
    [visible]
  );
  const handleClick = (ChoosedTag) => {
    if (tag !== ChoosedTag) {
      setTag(ChoosedTag);
    }
  };
  useEffect(() => {
    navigate(tag.url);
    window.localStorage.setItem('BlogTag', JSON.stringify(tag));
  }, [navigate, tag]);
  useScrollPosition(location.pathname.slice(1), handleScroll);
  return (
    <Wrapper

    // onMouseLeave={() => {
    //   setVisible(false);
    // }}
    >
      <NavigationContainer
        onMouseEnter={() => {
          setVisible(true);
        }}
        $themeStyle={themeStyle}
        $tagIndex={tagItem.findIndex((item) => item.name === tag.name) + 1}
        className={`my-div ${visible ? 'slide-in' : 'slide-out'}`}
      >
        {tagItem.map((item, index) => {
          return (
            // <SmartButton key={index} onClick={() => handleClick(item)}>
            //   {item.name}
            // </SmartButton>
            <div
              key={index}
              className="hover-effect"
              onClick={() => handleClick(item)}
            >
              {item.name}
            </div>
          );
        })}
      </NavigationContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div``;

const NavigationContainer = styled.div`
  div:nth-child(
      ${({ $tagIndex }) => {
          return $tagIndex;
        }}
    )::after {
    content: ''; /* 必须有的属性，用于生成伪元素 */
    position: absolute; /* 绝对定位 */
    bottom: -4px; /* 调整线的位置 */
    left: 0; /* 从左边开始 */
    width: 100%; /* 线的宽度与父元素一致 */
    height: 0.5vh; /* 调整线的粗细 */
    background-color: #65cff2; /* 调整线的颜色 */
  }
  div:nth-child(
      ${({ $tagIndex }) => {
          return $tagIndex;
        }}
    ) {
    color: #e04e64;
  }
  backdrop-filter: blur(10px);
  position: fixed;
  top: 20px;
  left: 55vw;
  width: 40vw;
  background-color: ${({ $themeStyle }) =>
    $themeStyle.navigationColor}; /* 背景颜色 */
  z-index: 1000; /* 确保在其他内容之上 */
  border-radius: 40px;
  padding: 20px;
  border: 2px solid ${({ $themeStyle }) => $themeStyle.navigationBorderColor}; /* 边框宽度 2 像素，实线，颜色为蓝色 */
`;
export default Navigation;
