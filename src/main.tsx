import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';
import routes from '@/routes';
import App from '@/App';
import '@/global';
// import './samples/node-api'
import 'styles/index.css';
import {store} from './store'

var userAgent = navigator.userAgent.toLowerCase();
if (userAgent.indexOf(' electron/') > -1) {
}
const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes,
    errorElement: <div>error</div>,
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<div>loading...</div>} />
    </Provider>
  </StrictMode>,
);


postMessage({ payload: 'removeLoading' }, '*');
