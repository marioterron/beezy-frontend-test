import { connect } from 'react-redux';

import BookstoreApp from '../components/BookstoreApp/BookstoreApp';

const mapStateToProps = state => state;

export default connect(mapStateToProps)(BookstoreApp);
