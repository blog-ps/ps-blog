import {
  Home,
  Blog,
  Program,
  TodoList,
  MyBlog,
  PhotoLibrary,
  Project,
  Register,
  NotFound,
} from './pages';

export default [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/blog',
    element: <Blog />,
    children: [
      {
        path: '/blog/',
        element: <MyBlog />,
      },
      {
        path: '/blog/photoLibrary',
        element: <PhotoLibrary />,
      },
      {
        path: '/blog/todoList',
        element: <TodoList />,
      },
      {
        path: '/blog/program',
        element: <Program />,
      },
    ],
  },
  {
    path: '/project',
    element: <Project />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
