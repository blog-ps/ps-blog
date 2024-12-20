import styled from 'styled-components';
import titleIcon from '@/assets/img/myblog/InfiniteProgress.png';
import titleVideo from '@/assets/video/backVideo.webm';
import './TitlePage.css';
const TitlePage = () => {
  return (
    <Wrapper id="TitleWrapper">
      <video autoPlay muted loop className="titleVideo">
        <source src={titleVideo} type="video/mp4"></source>
        您的浏览器不支持 video 标签。
      </video>
      <img src={titleIcon} alt="" className="TitleImg" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: transparent;
  position: relative;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 100%;
  height: 100vh;
`;

export default TitlePage;
