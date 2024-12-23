import styled from 'styled-components';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useThemeMode } from '@/provider/theme-provider';
import './editor.css';
// import 'md-editor-rt/lib/style.css';

const MyEditor = ({ children }) => {
  const [value, setValue] = useState('**Hello world!!!**');
  const theme = useThemeMode;
  return (
    <Wrapper>
      <MDEditor
        value={value}
        onChange={setValue}
        theme={theme.model}
        className="MDEditor"
      ></MDEditor>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  * {
    height: 100%;
  }
  width: 100%;
  height: 100%;
`;
export default MyEditor;
