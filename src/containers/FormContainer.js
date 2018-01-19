import { connect } from 'react-redux';

import addBook from '../actions/addBook';
import BookStoreForm from '../components/BookstoreForm/BookstoreForm';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {
  return {
    onAddBook: ({ title, genre, price }) => {
      dispatch(addBook({ title, genre, price }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookStoreForm);
