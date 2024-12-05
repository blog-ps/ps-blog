import {
  SmartCard,
  SmartCardImg,
  SmartCardItem,
  SmartCardItems,
  SmartCardTitle,
} from '@/components/smartCard';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

const Blog = () => {
  return (
    <div>
      <Card>
        <CardHeader>111</CardHeader>
        <CardTitle>222</CardTitle>
        <CardDescription>333</CardDescription>
        <CardContent>444</CardContent>
        <CardFooter>555</CardFooter>
      </Card>
      <SmartCard>
        <SmartCardImg>图片</SmartCardImg>
        <SmartCardItems>
          <SmartCardTitle>标题</SmartCardTitle>
          <SmartCardItem>111</SmartCardItem>
          <SmartCardItem>222</SmartCardItem>
          <SmartCardItem>333</SmartCardItem>
        </SmartCardItems>
      </SmartCard>
    </div>
  );
};

export default Blog;
