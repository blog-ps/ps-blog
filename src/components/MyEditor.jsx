import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import { useThemeMode } from '@/provider/theme-provider';
import './MyEditor.css';
// import 'md-editor-rt/lib/style.css';

const MyEditor = ({ value = '', dispatch }) => {
  // const [bolg, setValue] = useState('**Hello world!!!**');

  const theme = useThemeMode;
  return (
    <Wrapper>
      <MDEditor
        value={value}
        onChange={(e) => {
          dispatch({ type: 'SET_VALUE', payload: e });
        }}
        theme={theme.model}
        className="MDEditor"
      ></MDEditor>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export default MyEditor;
