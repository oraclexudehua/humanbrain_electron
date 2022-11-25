import { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router-dom';
const BasicLayout = lazy(() => import('@/routes/Layout/BasicLayout'));
const LoginLayout = lazy(() => import('@/routes/Layout/LoginLayout'));
const Index = lazy(() => import('@/routes/index'));
const Notfound = lazy(() => import('@/routes/404'));
const Detail = lazy(() => import('@/routes/detail'));

const children: any = [
  {
    path: '/info',
    index: true,
    element: (
      <Suspense>
        <Detail />
      </Suspense>
    ),
  },
];
export const routes: Array<RouteObject> = [
  {
    // index: true,
    path: "/",
    element: (
      <Suspense>
        <BasicLayout />
      </Suspense>
    ),
    children: children,
  },
  {
    path: "/login",
    element: (
      <Suspense>
        <LoginLayout />
      </Suspense>
    ),

  },
  {
    path: '*',
    element: (
      <Suspense>
        <Notfound />
      </Suspense>
    ),
  },
];

export default routes;
