import blog from '@/assets/svg/blog.svg';
import home from '@/assets/svg/home.svg';
import porject from '@/assets/svg/project.svg';
// import user from '@/assets/svg/user.svg';
import user_unlogin from '@/assets/svg/user-unlogin.svg';
import { Dock, DockIcon } from '@/components/ui/dock';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useDarkMode, useModeTheme } from '@/provider/theme-provider';
import { NavLink } from 'react-router';
import styled from 'styled-components';
import Switch from './Switch';
import { Separator } from './ui/separator';

const links = [
  {
    icon: home,
    title: '首页',
    url: '/',
  },
  {
    icon: blog,
    title: '博客',
    url: '/blog',
  },
  {
    icon: porject,
    title: '项目',
    url: '/project',
  },
];

const TollBar = () => {
  const theme = useModeTheme();
  const { model } = useDarkMode();

  return (
    <Wrapper $theme={theme}>
      <TooltipProvider>
        <Docks direction="middle" distance={60} $model={model}>
          {links.map((link) => {
            return (
              <DockIcon key={link.url}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <NavLink to={link.url}>
                      <img src={link.icon} alt={link.title} />
                    </NavLink>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.title}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          })}
          <Separator orientation="vertical" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink to="/register">
                  <img src={user_unlogin} alt="user" />
                </NavLink>
              </TooltipTrigger>
              <TooltipContent>
                <p>用户</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Switch size="small" />
          </DockIcon>
        </Docks>
      </TooltipProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const Docks = styled(Dock)`
  img {
    width: 24px;
    transition: all 0.5s ease-in-out;
    filter: ${({ $model }) => ($model === 'dark' ? 'invert(1)' : 'none')};

    &:hover {
      filter: ${({ $model }) => ($model === 'dark' ? 'invert(0.8)' : 'none')};
    }
  }
`;

export default TollBar;
