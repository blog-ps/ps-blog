import {
  SmartCard,
  SmartCardImg,
  SmartCardItem,
  SmartCardItems,
  SmartCardTitle,
  SmartAbstract,
  SmartCardFooter,
} from '@/components/smartCard';

const Blog = () => {
  return (
    <div>
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
    </div>
  );
};

export default Blog;
