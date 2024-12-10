import styled from 'styled-components';
import { useThemeMode } from '@/provider/theme-provider';
import CardList from './CardList';
import ProductList from './productList';

const Blog = () => {
  const theme = useThemeMode();
  return (
    <Wrapper id="wrapper">
      <CardList theme={theme}></CardList>
      <ProductList theme={theme}></ProductList>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
export default Blog;
