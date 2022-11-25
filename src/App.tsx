import { Fragment } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import useDebugRender from "tilg";
import 'antd/dist/antd.css';

export default function App() {
  useDebugRender();

  return (
    <Fragment>
      <Outlet />
      <ScrollRestoration />
    </Fragment>
  );
}
