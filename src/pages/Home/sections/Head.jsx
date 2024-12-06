import lightgirl from '@/assets/png/light.png';
import suqares from '@/assets/svg/squares.svg';
import AnimatedShinyText from '@/components/ui/animated-shiny-text';
import BlurFade from '@/components/ui/blur-fade';
import { FadeText } from '@/components/ui/fade-text';
import { cn } from '@/lib/utils';
import Piolet from '@/pages/Home/decorate/piolet';
import Sphere from '@/pages/Home/decorate/sphere';
import { useThemeMode } from '@/provider/theme-provider';
import { ArrowRightIcon } from 'lucide-react';
import Wave from '@/pages/Home/decorate/wave';
import {
  BlurFadeLeft,
  BlurFadeRight,
  Content,
  FadeTextH2,
  FadeTextP,
  Imgs,
  MyWordRotate,
  Wrapper,
} from './Head.styled';

const Contents = () => {
  const { model } = useThemeMode();

  return (
    <Wrapper>
      {model === 'dark' ? (
        <>
          <BlurFadeLeft delay={0.25} inView>
            <Sphere />
          </BlurFadeLeft>
          <BlurFadeRight delay={0.5} inView>
            <Piolet />
          </BlurFadeRight>
        </>
      ) : (
        <div className="wave">
          <BlurFade delay={0.25} inView>
            <Wave />
          </BlurFade>
          <img src={suqares} alt="squares" />
        </div>
      )}

      <Content $model={model}>
        <div className="description">
          <FadeText
            direction="up"
            text={<MyWordRotate words={['Design', 'Code']} />}
          />
          <FadeTextP $model={model} direction="up" text="and code React apps" />
          <FadeTextH2
            $model={model}
            direction="up"
            text="Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools."
          />
          <BlurFade inView className="blurFade">
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
      {model === 'light' && (
        <Imgs className="imgs">
          <BlurFade inView className="light-girl">
            <img src={lightgirl} alt="lightgirl" />
            <div className="smallball" />
            <div className="bigball" />
          </BlurFade>
        </Imgs>
      )}
    </Wrapper>
  );
};

export default Contents;
