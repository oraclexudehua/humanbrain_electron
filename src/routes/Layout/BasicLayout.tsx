import { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import SideBar from '@/components/sidebar';
const { Header, Footer, Sider, Content } = Layout;
import { connect } from 'react-redux';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
function BasicLayout(props: any) {
  useEffect(() => {}, []);

  const renderContent = () => {
    return (
      <>
        <Outlet />
      </>
    );
  };
  const {
    menu: { menuList },
  } = props;
  let menus: Array<any> = [];
  if (menuList != null && Array.isArray(menuList)) {
    menus = menuList;
  }
  return (
    <Layout style={{ height: '100%' }}>
      <SideBar menus={menus}/>
      <Content>
        {renderContent()}
      </Content>
    </Layout>
  );
}

const mapStateToProps = (state: any) => {
  const { menu } = state;
  // console.log(menu);
  return { menu };
};
export default connect(mapStateToProps)(BasicLayout);
