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
        path: 'myBlog',
        element: <MyBlog />,
      },
      {
        path: 'photoLibrary',
        element: <PhotoLibrary />,
      },
      {
        path: 'todoList',
        element: <TodoList />,
      },
      {
        path: 'program',
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
