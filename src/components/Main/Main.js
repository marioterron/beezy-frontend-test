import React from 'react';
import { Layout } from 'antd';

import Navbar from '../Navbar/Navbar';

import './main.scss';

const { Content, Footer } = Layout;

const Main = () => {
  return (
    <Layout className="main">
      <Navbar />
      <Content style={{ padding: '0 50px' }}>
        <div className="main__content" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2016 Created by Ant UED</Footer>
    </Layout>
  );
};

export default Main;
