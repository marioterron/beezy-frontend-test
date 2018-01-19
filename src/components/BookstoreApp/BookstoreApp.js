import React from 'react';
import PropTypes from 'prop-types';

import BookstoreContent from '../BookstoreContent/BookstoreContent';
import BookstoreMenu from '../BookstoreMenu/BookstoreMenu';

import './bookstore-app.scss';

const BookstoreApp = ({ books }) => {
  return (
    <div>
      <BookstoreMenu />
      <BookstoreContent books={books} />
    </div>
  );
};

BookstoreApp.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BookstoreApp;
