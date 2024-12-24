import { useThemeMode, useThemeStyle } from '@/provider/theme-provider';
import styled from 'styled-components';
import { useReducer } from 'react';
import MyEditor from '../../components/MyEditor';
const TYPE = {
  SET_TITLE: 'SET_TITLE',
  SET_VALUE: 'SET_VALUE',
  SET_ABSTRACT: 'SET_ABSTRACT',
  SET_TAG: 'SET_TAG',
  SET_TYPE: 'SET_TYPE',
};
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    case 'SET_VALUE':
      return { ...state, value: action.payload };
    case 'SET_ABSTRACT':
      return { ...state, creatTime: action.payload };
    case 'SET_TAG':
      return { ...state, publishTime: action.payload };
    case 'SET_TYPE':
      return { ...state, publishTime: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
const EditPage = () => {
  const [blog, dispatch] = useReducer(blogReducer, {
    value: '**Hello world!!!**',
    title: '我是标题',
    abstract: '我是简介',
    tag: '体育',
    type: '博客',
    // 以下仅展示，不修改
    author: '我是作者',
    creatTime: '12.241',
    updateTime: '12.242',
    publishTime: '12.243',
  });
  return (
    <Wrapper>
      <input
        placeholder="输入标题"
        style={{ color: 'black' }}
        value={blog.title}
        onChange={(e) => {
          dispatch({ type: 'SET_TITLE', payload: e.target.value });
        }}
      ></input>
      <MyEditor value={blog.value} dispatch={dispatch}></MyEditor>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 5vh 5vw;
  width: 100%;
  height: 100vh;
`;
export default EditPage;
