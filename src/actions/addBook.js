import * as types from './actionTypes';

const addBook = ({ title, genre, price }) => {
  let counter = 2;

  return {
    type: types.ADD_BOOK,
    payload: {
      id: ++counter,
      title,
      genre,
      price
    }
  };
};

export default addBook;
