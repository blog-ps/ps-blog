import { useThemeMode } from '@/provider/theme-provider';
import styled from 'styled-components';
import EditPage from './EditPage';
const TodoList = () => {
  const { model } = useThemeMode();
  return (
    <Wrapper>
      <EditPage></EditPage>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default TodoList;
