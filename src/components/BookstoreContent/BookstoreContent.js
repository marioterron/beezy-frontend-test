import React from 'react';
import { Layout } from 'antd';

import BookstoreMenu from '../BookstoreMenu/BookstoreMenu';
import BookstoreCard from '../BookstoreCard/BookstoreCard';
import BookstoreForm from '../BookstoreForm/BookstoreForm';

import './bookstore-content.scss';

const { Content, Footer } = Layout;

const Main = () => {
  return (
    <Layout className="bookstore-content">
      <BookstoreMenu />
      <Content style={{ padding: '0 50px' }}>
        <BookstoreForm />
        <div
          className="bookstore-content__wrapper"
          style={{ background: '#fff', padding: 24, minHeight: 280 }}
        >
          <BookstoreCard />
          <BookstoreCard />
          <BookstoreCard />
          <BookstoreCard />
          <BookstoreCard />
          <BookstoreCard />
          <BookstoreCard />
          <BookstoreCard />
          <BookstoreCard />
          <BookstoreCard />
          <BookstoreCard />
          <BookstoreCard />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Coded with ❤️ by <a href="https://github.com/marioterron">Mario Terron</a>
      </Footer>
    </Layout>
  );
};

export default Main;
