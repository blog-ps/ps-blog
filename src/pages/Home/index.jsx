import styled from 'styled-components';
import Head from './sections/Head';

const Home = () => {
  return (
    <Wrapper>
      <Content>
        <Head />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const Content = styled.div``;

export default Home;
