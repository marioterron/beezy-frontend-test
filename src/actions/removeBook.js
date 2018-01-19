import * as types from './actionTypes';

const removeBook = id => {
  return {
    type: types.REMOVE_BOOK,
    payload: {
      id
    }
  };
};

export default removeBook;
