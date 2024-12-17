import styled from 'styled-components';
import BlurFade from '@/components/ui/blur-fade';

import { ProductsList } from '@/components/ProductsList';

const ProductList = () => {
  return (
    <Wrapper>
      <ProductsList
        items={[
          {
            name: 'air jordan',
            url: '#',
            img1: 'https://assets.codepen.io/605876/air-force-1.jpeg?width=204&height=153&format=auto',
            img2: 'https://assets.codepen.io/605876/air-force-1.jpeg?width=204&height=153&format=auto',
            img3: 'https://assets.codepen.io/605876/air-force-1.jpeg?width=204&height=153&format=auto',
          },
          {
            name: 'air max',
            url: '#',
            img1: 'https://assets.codepen.io/605876/air-force-1.jpeg?width=204&height=153&format=auto',
            img2: 'https://assets.codepen.io/605876/air-force-1.jpeg?width=204&height=153&format=auto',
            img3: 'https://assets.codepen.io/605876/air-force-1.jpeg?width=204&height=153&format=auto',
          },
          {
            name: 'air jordan',
            url: '#',
            img1: 'https://assets.codepen.io/605876/air-force-1.jpeg?width=204&height=153&format=auto',
            img2: 'https://assets.codepen.io/605876/air-force-1.jpeg?width=204&height=153&format=auto',
            img3: 'https://assets.codepen.io/605876/air-force-1.jpeg?width=204&height=153&format=auto',
          },
          {
            name: 'air jordan',
            url: '#',
            img1: 'https://assets.codepen.io/605876/air-force-1.jpeg?width=204&height=153&format=auto',
            img2: 'https://assets.codepen.io/605876/air-force-1.jpeg?width=204&height=153&format=auto',
            img3: 'https://assets.codepen.io/605876/air-force-1.jpeg?width=204&height=153&format=auto',
          },
          {
            name: 'air jordan',
            url: '#',
            img1: 'https://assets.codepen.io/605876/air-force-1.jpeg?width=204&height=153&format=auto',
            img2: 'https://assets.codepen.io/605876/air-force-1.jpeg?width=204&height=153&format=auto',
            img3: 'https://assets.codepen.io/605876/air-force-1.jpeg?width=204&height=153&format=auto',
          },
        ]}
      ></ProductsList>
    </Wrapper>
  );
};

const BlurFadeLeft = styled(BlurFade)`
  position: absolute;
  top: 0;
  left: 0;
`;
const Wrapper = styled.div`
  height: 100vh;
`;
export default ProductList;
