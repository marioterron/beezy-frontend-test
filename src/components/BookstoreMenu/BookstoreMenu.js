import React from 'react';
import { Layout, Menu } from 'antd';
import BookstoreLogo from '../BookstoreLogo/BookstoreLogo';

import './bookstore-menu.scss';

const { Header } = Layout;

const BookstoreMenu = () => {
  return (
    <Header className="bookstore-menu">
      <BookstoreLogo />
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

export default BookstoreMenu;
