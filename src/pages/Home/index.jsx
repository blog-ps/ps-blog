import Banner from '../../components/banner';
import styled from 'styled-components';
import Background from './background';

const Home = () => {
  return (
    <Wrapper>
      <Banner></Banner>
      <Background />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Home;
