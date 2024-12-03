import { Blog, Home, Project, Register } from './pages';

export default [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/project',
    element: <Project />,
  },
  {
    path: '/register',
    element: <Register />,
  },
];
