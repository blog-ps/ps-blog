import { useThemeMode, useThemeStyle } from '@/provider/theme-provider';
import styled from 'styled-components';
import MyEditor from './sections/MyEditor';

const CreatePage = () => {
  return (
    <Wrapper>
      <MyEditor></MyEditor>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 5vh 5vw;
  width: 100%;
  height: 100vh;
`;
export default CreatePage;
