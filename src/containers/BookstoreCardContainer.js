import { connect } from 'react-redux';

import removeBook from '../actions/removeBook';
import editBook from '../actions/editBook';
import BookstoreCard from '../components/BookstoreCard/BookstoreCard';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {
  return {
    onRemoveBook: id => {
      dispatch(removeBook(id));
    },
    onEditBook: ({
      id, title, genre, price
    }) => {
      dispatch(editBook({
        id,
        title,
        genre,
        price
      }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookstoreCard);
