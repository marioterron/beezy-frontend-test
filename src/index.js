import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import bookstore from './reducers/bookstore';
import BookstoreApp from './containers/BookstoreAppContainer';

const store = createStore(bookstore);

render(
  <Provider store={store}>
    <BookstoreApp />
  </Provider>,
  document.getElementById('root')
);
