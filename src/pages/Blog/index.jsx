import styled from 'styled-components';
import { useThemeMode, useThemeStyle } from '@/provider/theme-provider';
import CardList from './sections/CardList';
import ProductList from './sections/ProductList';
import './index.css';
import Navigation from './sections/Navigation';
import { Outlet } from 'react-router';

const Blog = () => {
  return (
    <Wrapper id="wrapper">
      <Outlet></Outlet>
      <Navigation></Navigation>
      {/* <CardList></CardList>
      <ProductList></ProductList>  */}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;
export default Blog;
