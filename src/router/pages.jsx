import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Blog = lazy(() => import('@/pages/Blog'));
const Project = lazy(() => import('@/pages/Porject'));
const Register = lazy(() => import('@/pages/Register'));

export { Home, Blog, Project, Register };
