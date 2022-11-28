import React, { memo, useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { useNavigate } from 'react-router-dom';
import './index.css';
import classNames from 'classnames';
const SideBar = memo((props: { menus: Array<any> }) => {
  const { menus } = props;
  const [currentValue, setCurrentValue]: any = useState(null);
  const navigate = useNavigate();
  const handleMenuClick = (value: any) => {
    if(value.children!=null){

    }else{
      navigate(value.path)
    }
    setCurrentValue(value.key);

  };
  const renderMenus = (data: Array<any>): any => {
    return data.map((r) => {
      const { children, label, key } = r;
      return (
        <>
          <div
            onClick={() => {
              handleMenuClick(r)
            }}
            key={key}
            className={classNames('menus', {
              menus_selected: currentValue == key,
            })}
          >
            <div className="menus-label">{label}</div>
          </div>
          {(function () {
            if (children != null && Array.isArray(children)) {
              return renderMenus(children);
            }
            return null;
          })()}
        </>
      );
    });
  };
  return (
    <Sider
      style={{
        background: '#e6f7ff',
        height: '100%',
        flex: '0 0 150px',
        width: '150px',
      }}
    >
      <div style={{ minHeight: 80 }}>慧脑云</div>
      <div style={{ padding: 10 }}>{renderMenus(menus)}</div>
    </Sider>
  );
});

export default SideBar;
