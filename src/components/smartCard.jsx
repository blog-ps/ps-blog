import styled from 'styled-components';

const SmartCard = ({ children }) => {
  return <SmartCardWrapper>{children}</SmartCardWrapper>;
};
const SmartCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 10px;
  padding: 20px;

  border-radius: 10px;
  border: 1px solid var(--Light-Mode-Container-Border, rgba(255, 255, 255, 0.1));
  background: var(
    --Light-Mode-Container-Background,
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0.5) 100%
    )
  );
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1),
    0px 15px 30px 0px rgba(0, 0, 0, 0.1), 0px 20px 40px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
`;
const SmartCardImg = ({ children }) => {
  return <SmartCardImgWrapper>{children}</SmartCardImgWrapper>;
};
const SmartCardImgWrapper = styled.div`
  flex: 4;
`;
const SmartCardItems = ({ children }) => {
  return <SmartCardItemsWrapper>{children}</SmartCardItemsWrapper>;
};
const SmartCardItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex: 4;
`;
const SmartCardTitle = ({ children }) => {
  return <SmartCardTitleWrapper>{children}</SmartCardTitleWrapper>;
};
const SmartCardTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 100px;
  fontSize: '30px',
  fontWeight: '60',
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
  flex: 2; /* 这个元素占用剩余的可用空间 */
`;
export {
  SmartCard,
  SmartCardImg,
  SmartCardItems,
  SmartCardItem,
  SmartCardTitle,
  SmartCardFooter,
};
