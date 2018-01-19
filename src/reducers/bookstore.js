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
    case types.ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    case types.REMOVE_BOOK:
      return {
        ...state,
        books: [
          ...state.books.filter(book => {
            return book.id !== action.payload.id;
          })
        ]
      };
    case types.EDIT_BOOK:
      return {
        ...state,
        books: [
          ...state.books.map(book => {
            if (book.id !== action.payload.id) {
              return book;
            }
            return {
              id: book.id,
              title: action.payload.title,
              genre: action.payload.genre,
              price: action.payload.price
            };
          })
        ]
      };
    default:
      return state;
  }
};

export default bookstore;
