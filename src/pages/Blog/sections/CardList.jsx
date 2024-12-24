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
const CardList = ({ blogs = [] }) => {
  const theme = useThemeMode();
  return (
    <Wrapper id="cardWrapper">
      <BlurFadeLeft delay={0.1} inView key={theme.model}>
        <Container>
          <TitleContainer>
            {blogs.slice(0, 2).map((item, index) => (
              <TitleCard key={index}>
                <SmartCard>
                  <SmartCardImg>
                    <img src={sese} alt="" />
                  </SmartCardImg>
                  <SmartCardItems>
                    <SmartCardTitle>{item.title || ''}</SmartCardTitle>
                    <SmartAbstract>{item.abstract || ''}</SmartAbstract>
                    {/* <SmartCardItem>{item.list[0] || ''}</SmartCardItem>
                    <SmartCardItem>{item.list[1] || ''}</SmartCardItem> */}
                  </SmartCardItems>
                  <SmartCardFooter>{item.publishTime || ''}</SmartCardFooter>
                </SmartCard>
              </TitleCard>
            ))}
          </TitleContainer>

          {blogs.slice(2).map((item, index) => (
            <CardContainer key={index}>
              <SmartCard>
                <SmartCardImg>
                  <img src={sese} alt="" />
                </SmartCardImg>
                <SmartCardItems>
                  <SmartCardTitle>{item.title || ''}</SmartCardTitle>
                  <SmartAbstract>{item.abstract || ''}</SmartAbstract>
                  {/* <SmartCardItem>{item.list[0] || ''}</SmartCardItem>
                  <SmartCardItem>{item.list[1] || ''}</SmartCardItem> */}
                </SmartCardItems>
                <SmartCardFooter>{item.publishTime || ''}</SmartCardFooter>
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
