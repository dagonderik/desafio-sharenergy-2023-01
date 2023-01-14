import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Users', '/users', <ContainerOutlined />),
  getItem('Cats', '/cats', <GithubOutlined />),
  getItem('Dogs', '/dogs', <DesktopOutlined />),
  getItem('Add Clients', '/clients', <ContainerOutlined />),
];

const Header: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const navigate = useNavigate();

  const handleClick = (_id: any) => {
    switch (_id.key) {
      case "/cats" :
        navigate("/cats");
        break;
    case "/dogs" :
        navigate("/dogs");
        break;
    case "/clients" :
        navigate("/clients");
        break;
    case "/users" :
        navigate("/users");
        break;
  }
}

  return (
    <div>
      <Menu
        defaultSelectedKeys={[`${window.location.pathname}`]}
        onClick={handleClick}
        mode="horizontal"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default Header;