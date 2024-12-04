import Piolet from '@/pages/Home/decorate/piolet';
import Sphere from '@/pages/Home/decorate/sphere';
import { useThemeMode } from '@/provider/theme-provider';
import styled from 'styled-components';
import Wave from './decorate/wave';

const Background = () => {
  const { model } = useThemeMode();
  return (
    <Wrapper>
      {model === 'dark' && (
        <>
          <div className="sphere">
            <Sphere />
          </div>
          <div className="piolet">
            <Piolet />
          </div>
        </>
      )}

      {model === 'light' && (
        <div className="wave">
          <Wave />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  .sphere,
  .wave {
    position: absolute;
    top: 0;
    left: 0;
  }

  .piolet {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export default Background;
