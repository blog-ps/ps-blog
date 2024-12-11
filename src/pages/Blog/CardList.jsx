import {
  SmartCard,
  SmartCardImg,
  SmartCardItem,
  SmartCardItems,
  SmartCardTitle,
  SmartAbstract,
  SmartCardFooter,
} from '@/components/ui/smartCard';
import { SmartButton } from '@/components/ui/smartButton';
import styled from 'styled-components';
import BlurFade from '@/components/ui/blur-fade';
const CardList = (theme) => {
  return (
    <Wrapper id="cardWrapper">
      <BlurFadeLeft delay={0.1} inView key={theme.model}>
        <Container>
          {Array(92)
            .fill()
            .map((item, index) => (
              <CardContainer key={index}>
                <SmartCard>
                  <SmartCardImg>图片</SmartCardImg>
                  <SmartCardItems>
                    <SmartCardTitle>我是标题</SmartCardTitle>
                    <SmartAbstract>我是简介</SmartAbstract>
                    <SmartCardItem>我是列表1</SmartCardItem>
                    <SmartCardItem>我是列表2</SmartCardItem>
                  </SmartCardItems>
                  <SmartCardFooter>我是页脚</SmartCardFooter>
                </SmartCard>
              </CardContainer>
            ))}
        </Container>

        <SmartButton>123</SmartButton>
      </BlurFadeLeft>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
`;
const BlurFadeLeft = styled(BlurFade)`
  width: 100%;
  top: 0;
  left: 0;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  gap: 20px; /* 设置间隔 */
`;
const CardContainer = styled.div`
  width: 30vw;
  height: 40vh;
`;
export default CardList;
