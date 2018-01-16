import React from 'react';

import logoImg from '../../../public/images/book.png';

import './logo.scss';

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__img" src={logoImg} alt="A book" />
      <h1 className="logo__text">Bookstore</h1>
    </div>
  );
};

export default Logo;
