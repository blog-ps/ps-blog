import styled from 'styled-components';
import BlurFade from '@/components/ui/blur-fade';
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
import { useThemeMode } from '@/provider/theme-provider';
import { ProductsList } from '@/components/ProductsList';

const Blog = () => {
  const theme = useThemeMode();
  return (
    <div>
      <ProductsList></ProductsList>
      <BlurFadeLeft delay={0.1} inView key={theme.model}>
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
        <SmartButton>123</SmartButton>
      </BlurFadeLeft>
    </div>
  );
};
const BlurFadeLeft = styled(BlurFade)`
  position: absolute;
  top: 0;
  left: 0;
`;
export default Blog;
