import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import BookstoreCard from '../../containers/BookstoreCardContainer';
import BookstoreForm from '../../containers/BookstoreFormContainer';

import './bookstore-content.scss';

const { Content, Footer } = Layout;

const BookstoreContent = ({ books }) => {
  return (
    <Layout className="bookstore-content">
      <Content style={{ padding: '0 50px' }}>
        <BookstoreForm />
        <div
          className="bookstore-content__wrapper"
          style={{ background: '#fff', padding: 24, minHeight: 280 }}
        >
          {books.map(book => <BookstoreCard key={book.id} {...book} />)}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Coded with{' '}
        <span role="img" aria-label="Corazón">
          ❤️{' '}
        </span>by
        <a href="https://github.com/marioterron"> Mario Terron</a>
      </Footer>
    </Layout>
  );
};

BookstoreContent.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BookstoreContent;
