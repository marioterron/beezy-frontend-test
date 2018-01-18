import * as types from '../actions/actionTypes';

const initialState = {
  books: [
    {
      id: 1,
      title: 'SurviveJS - Webpack',
      genre: 'IT',
      price: 19.99
    },
    {
      id: 2,
      title: 'SurviveJS - React',
      genre: 'IT',
      price: 15.99
    }
  ]
};

const bookstore = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default bookstore;
