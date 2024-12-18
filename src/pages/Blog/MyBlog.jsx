import { useThemeMode } from '@/provider/theme-provider';
import styled from 'styled-components';
import CardList from './sections/CardList';
const MyBlog = () => {
  const { model } = useThemeMode();
  return (
    <Wrapper>
      <CardList theme={model}></CardList>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
`;
export default MyBlog;
