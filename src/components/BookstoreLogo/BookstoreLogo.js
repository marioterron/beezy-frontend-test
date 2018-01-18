import React from 'react';

import logoImg from '../../../public/images/book.png';

import './bookstore-logo.scss';

const BookstoreLogo = () => {
  return (
    <div className="bookstore-logo">
      <img className="bookstore-logo__img" src={logoImg} alt="A book" />
      <h1 className="bookstore-logo__text">Bookstore</h1>
    </div>
  );
};

export default BookstoreLogo;
