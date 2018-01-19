import * as types from './actionTypes';

const editBook = ({
  id, title, genre, price
}) => {
  return {
    type: types.EDIT_BOOK,
    payload: {
      id,
      title,
      genre,
      price
    }
  };
};

export default editBook;
