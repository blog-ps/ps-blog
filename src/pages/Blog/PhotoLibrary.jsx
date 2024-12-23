import { useThemeMode } from '@/provider/theme-provider';
import styled from 'styled-components';
import DetailsPage from './DetailsPage';

const PhotoLibrary = () => {
  const { model } = useThemeMode();
  return (
    <Wrapper>
      <DetailsPage></DetailsPage>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default PhotoLibrary;
