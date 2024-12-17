import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Blog = lazy(() => import('@/pages/Blog'));
const MyBlog = lazy(() => import('@/pages/Blog/MyBlog'));
const PhotoLibrary = lazy(() => import('@/pages/Blog/PhotoLibrary'));
const TodoList = lazy(() => import('@/pages/Blog/TodoList'));
const Program = lazy(() => import('@/pages/Blog/Program'));
const Project = lazy(() => import('@/pages/Porject'));
const Register = lazy(() => import('@/pages/Register'));
const NotFound = lazy(() => import('@/pages/404'));

export {
  Home,
  Blog,
  Program,
  TodoList,
  MyBlog,
  PhotoLibrary,
  Project,
  Register,
  NotFound,
};
