import { useThemeStyle } from '@/provider/theme-provider';
import styled from 'styled-components';
const SmartCard = ({ children }) => {
  const theme = useThemeStyle();
  return <SmartCardWrapper $theme={theme}>{children}</SmartCardWrapper>;
};
const SmartCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 10px;
  padding: 20px;
  border-radius: 15px;

  border: 1px solid var(--Light-Mode-Container-Border, rgba(255, 255, 255, 0.1));
  background: ${({ $theme }) => $theme.cardBackground};
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1),
    0px 15px 30px 0px rgba(0, 0, 0, 0.1), 0px 20px 40px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
`;
const SmartCardImg = ({ children }) => {
  return (
    <SmartCardImgWrapper>
      <SmartCardImgInner>{children}</SmartCardImgInner>
    </SmartCardImgWrapper>
  );
};
const SmartCardImgWrapper = styled.div`
  flex: 8;
`;
const SmartCardImgInner = styled.div``;
const SmartCardItems = ({ children }) => {
  return (
    <SmartCardItemsWrapper id="itemsWrapper">{children}</SmartCardItemsWrapper>
  );
};
const SmartCardItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  flex: 10;
`;
const SmartCardTitle = ({ children }) => {
  return <SmartCardTitleWrapper>{children}</SmartCardTitleWrapper>;
};
const SmartCardTitleWrapper = styled.div`
  display: flex;
  flex: 0 0 5vh;
  font-size: 30px;
  font-weight: 600;
`;
const SmartAbstract = ({ children }) => {
  return <SmartAbstractWrapper>{children}</SmartAbstractWrapper>;
};
const SmartAbstractWrapper = styled.div`
  flex: 1;
  font-size: 15px;
  font-weight: 60;
`;
const SmartCardItem = ({ children }) => {
  return <SmartCardItemWrapper>{children}</SmartCardItemWrapper>;
};
const SmartCardItemWrapper = styled.div`
  flex: 1; /* 这个元素占用剩余的可用空间 */
`;
const SmartCardFooter = ({ children }) => {
  return <SmartCardFooterWrapper>{children}</SmartCardFooterWrapper>;
};
const SmartCardFooterWrapper = styled.div`
  flex: 1;
  font-size: 12px;
  font-weight: 60;
`;
export {
  SmartCard,
  SmartCardImg,
  SmartCardItems,
  SmartCardItem,
  SmartCardTitle,
  SmartCardFooter,
  SmartAbstract,
};
