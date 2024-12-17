import styled from 'styled-components';
import { useThemeMode, useThemeStyle } from '@/provider/theme-provider';
import CardList from './sections/CardList';
import ProductList from './sections/ProductList';
import './index.css';
import Navigation from './sections/Navigation';

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
  height: 100%;
`;
export default Blog;
