import blog from '@/assets/svg/blog.svg';
import home from '@/assets/svg/home.svg';
import porject from '@/assets/svg/project.svg';
import user from '@/assets/svg/user.svg';
import user_unlogin from '@/assets/svg/user-unlogin.svg';
import { Dock, DockIcon } from '@/components/ui/dock';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useThemeMode, useThemeStyle } from '@/provider/theme-provider';
import { NavLink } from 'react-router';
import styled from 'styled-components';
import Switch from './Switch';
import { Separator } from './ui/separator';
import useUserStore from '@/store/user';

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
  const theme = useThemeStyle();
  const { model } = useThemeMode();
  const { user: userInfo } = useUserStore();

  const isLogin = userInfo !== null;

  return (
    <Wrapper $theme={theme}>
      <TooltipProvider>
        <Docks direction="middle" distance={0} $model={model}>
          {links.map((link) => {
            return (
              <DockIcon key={link.url}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <MyNavLink to={link.url} $model={model}>
                      <img src={link.icon} alt={link.title} />
                    </MyNavLink>
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
                <MyNavLink to="/register" $model={model}>
                  {isLogin ? (
                    <img src={userInfo.imgUrl || user} />
                  ) : (
                    <img src={user_unlogin} alt="user" />
                  )}
                </MyNavLink>
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
  z-index: 10;
`;

const Docks = styled(Dock)`
  img {
    width: 24px;
    transition: all 0.3s linear;
    filter: ${({ $model }) => ($model === 'dark' ? 'invert(1)' : 'none')};
  }
`;

const MyNavLink = styled(NavLink)`
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s linear;
  &:hover {
    background: ${({ $model }) =>
      $model === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  }
`;

export default TollBar;
