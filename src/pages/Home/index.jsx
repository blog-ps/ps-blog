import AnimatedShinyText from '@/components/ui/animated-shiny-text';
import BlurFade from '@/components/ui/blur-fade';
import { FadeText } from '@/components/ui/fade-text';
import WordRotate from '@/components/ui/word-rotate';
import { cn } from '@/lib/utils';
import { useThemeMode } from '@/provider/theme-provider';
import { ArrowRightIcon } from 'lucide-react';
import styled from 'styled-components';
import BackGround from './BackGround';

const Home = () => {
  const { model } = useThemeMode();
  return (
    <Wrapper>
      <BackGround model={model}>
        <Content $model={model}>
          <div className="description">
            <FadeText
              direction="up"
              text={<MyWordRotate words={['Design', 'Code']} />}
            />
            <FadeTextP
              $model={model}
              direction="right"
              text="and code React apps"
            />
            <FadeTextH2
              $model={model}
              direction="left"
              text="Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools."
            />
            <BlurFade inView>
              <div
                className={cn(
                  'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>✨ Introducing Magic UI</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>
            </BlurFade>
          </div>
        </Content>
      </BackGround>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 200px;
  padding-left: 100px;
  position: relative;

  .wave {
    position: absolute;
    top: 0;
    left: 0px;
    min-width: 100vw;
  }
`;

const Content = styled.section`
  transition: all 0.5s ease;
  display: inline-block;
  ${({ $model }) => $model === 'dark' && 'transform: translateX(160px);'}

  .description {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 360px;
    gap: 30px;
    position: relative;
    z-index: 1;
  }
`;

const FadeTextP = styled(FadeText)`
  background: ${({ $model }) =>
    $model === 'dark'
      ? 'linear-gradient(312deg, #D6DEFF 12.16%, #747EB5 67.59%, #6E4291 94.73%)'
      : 'linear-gradient(180deg, #730040 0%, #301cbe 100%)'};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: 'SF Pro Display';
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const MyWordRotate = styled(WordRotate)`
  background: linear-gradient(
    110deg,
    #ff9d3f 0.07%,
    #f46772 33.9%,
    #af33e4 66.29%,
    #2f70e4 100.44%
  );

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: 'SF Pro Display';
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const FadeTextH2 = styled(FadeText)`
  color: ${({ $model }) => ($model === 'dark' ? '#fff' : '#000')};
  font-family: 'SF Pro Text';
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export default Home;
