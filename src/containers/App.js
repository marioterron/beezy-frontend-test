import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookstoreContent from '../components/BookstoreContent/BookstoreContent';
import BookstoreMenu from '../components/BookstoreMenu/BookstoreMenu';

const App = ({ books }) => {
  return (
    <div className="bookstore-app">
      <BookstoreMenu />
      <BookstoreContent books={books} />
    </div>
  );
};

App.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
