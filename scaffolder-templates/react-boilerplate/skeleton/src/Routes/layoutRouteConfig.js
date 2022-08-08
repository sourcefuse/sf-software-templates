import {lazy} from 'react';
const Mainlayout = lazy(() => import('Layouts/MainLayout/Mainlayout'));
const HeaderLayout = lazy(() => import('Layouts/HeaderLayout/HeaderLayout'));

const layoutRouteConfig = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/*',
    component: Mainlayout,
    isPrivate: true,
  },
  {
    path: '/components',
    component: HeaderLayout,
    isPrivate: true,
  },
];

export default layoutRouteConfig;
