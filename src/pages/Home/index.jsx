import styled from 'styled-components';
import BackGround from './BackGround';
import Contents from './Content';

const Home = () => {
  return (
    <Wrapper>
      <Content>
        <BackGround>
          <Contents />
        </BackGround>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  padding-top: 200px;
  padding-left: 100px;

  @media (max-width: 768px) {
    padding-top: 60px;
    padding-left: 10px;
  }
`;

export default Home;
