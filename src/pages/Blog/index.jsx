import styled from 'styled-components';
import { useThemeMode, useThemeStyle } from '@/provider/theme-provider';
import CardList from './CardList';
import ProductList from './productList';
import './index.css';
import Navigation from './Navigation';

const Blog = () => {
  const theme = useThemeMode();
  const themeStyle = useThemeStyle();
  return (
    <Wrapper id="wrapper">
      <Navigation themeStyle={themeStyle}></Navigation>
      <CardList theme={theme}></CardList>
      <ProductList></ProductList>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;
export default Blog;
