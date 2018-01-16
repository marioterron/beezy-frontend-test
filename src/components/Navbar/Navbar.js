import React from 'react';
import { Layout, Menu } from 'antd';
import Logo from '../Logo/Logo';

import './navbar.scss';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className="navbar">
      <Logo />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Books</Menu.Item>
        <Menu.Item key="2">Genres</Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
