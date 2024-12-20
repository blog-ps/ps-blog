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
import { useThemeMode } from '@/provider/theme-provider';
import sese from '@/assets/img/myblog/sese.png';
const CardList = () => {
  const theme = useThemeMode();
  return (
    <Wrapper id="cardWrapper">
      <BlurFadeLeft delay={0.1} inView key={theme.model}>
        <Container>
          <TitleContainer>
            {Array(21)
              .fill()
              .slice(0, 1)
              .map((item, index) => (
                <TitleCard key={index}>
                  <SmartCard>
                    <SmartCardImg>
                      <img src={sese} alt="" />
                    </SmartCardImg>
                    <SmartCardItems>
                      <SmartCardTitle>我是标题</SmartCardTitle>
                      <SmartAbstract>我是简介</SmartAbstract>
                      <SmartCardItem>我是列表1</SmartCardItem>
                      <SmartCardItem>我是列表2</SmartCardItem>
                    </SmartCardItems>
                    <SmartCardFooter>我是页脚</SmartCardFooter>
                  </SmartCard>
                </TitleCard>
              ))}

            <TitleCard>
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
            </TitleCard>
          </TitleContainer>

          {Array(21)
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
      </BlurFadeLeft>
    </Wrapper>
  );
};
const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5vw;
  padding: 5vw;
`;
const TitleCard = styled.div`
  width: 35vw;
  height: 60vh;
  img {
    height: 30vh;
    border-radius: 20px;
    width: 35vw;
    object-fit: cover;
  }
`;
const Wrapper = styled.div`
  width: 100%;
`;
const BlurFadeLeft = styled(BlurFade)`
  width: 100%;
  top: 0;
  left: 0;
`;
const Container = styled.div`
  padding: 0 10vw;
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  gap: 0.7vw; /* 设置间隔 */
`;
const CardContainer = styled.div`
  width: 15vw;
  height: 30vh;
`;
export default CardList;
