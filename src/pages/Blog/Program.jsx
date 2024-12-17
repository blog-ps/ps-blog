import { useThemeMode } from '@/provider/theme-provider';
import styled from 'styled-components';
import ProductList from './sections/ProductList';
const Program = () => {
  const { model } = useThemeMode();
  return (
    <Wrapper>
      <ProductList theme={model}></ProductList>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default Program;
