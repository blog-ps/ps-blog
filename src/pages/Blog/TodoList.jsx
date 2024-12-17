import { useThemeMode } from '@/provider/theme-provider';
import styled from 'styled-components';
const TodoList = () => {
  const { model } = useThemeMode();
  return <Wrapper></Wrapper>;
};
const Wrapper = styled.div``;
export default TodoList;
