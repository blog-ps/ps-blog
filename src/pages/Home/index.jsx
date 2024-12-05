import styled from 'styled-components';
import BackGround from './BackGround';
import Contents from './Content';

const Home = () => {
  return (
    <Wrapper>
      <BackGround>
        <Contents />
      </BackGround>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 200px;
  padding-left: 100px;
  position: relative;

  @media (max-width: 768px) {
    padding-top: 60px;
    padding-left: 10px;
  }
`;

export default Home;
