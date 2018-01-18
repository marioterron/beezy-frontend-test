import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import bookstore from './reducers/bookstore';
import App from './containers/App';

import './styles.scss';

const store = createStore(bookstore);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
