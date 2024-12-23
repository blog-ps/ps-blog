import { useThemeMode } from '@/provider/theme-provider';
import styled from 'styled-components';
import CreatePage from './CreatePage';
const TodoList = () => {
  const { model } = useThemeMode();
  return (
    <Wrapper>
      {' '}
      <CreatePage></CreatePage>{' '}
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default TodoList;
