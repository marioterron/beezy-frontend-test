import React, { Component } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import BookstoreCard from '../../containers/BookstoreCardContainer';
import BookstoreForm from '../../containers/BookstoreFormContainer';

import './bookstore-content.scss';

const { Content, Footer } = Layout;

class BookstoreContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.simulateFetch();
  }

  simulateFetch() {
    window.setTimeout(() => this.setState({ isLoading: false }), 5000);
  }

  render() {
    const { books } = this.props;
    const { isLoading } = this.state;
    return (
      <Layout className="bookstore-content">
        <Content style={{ padding: '0 50px' }}>
          <BookstoreForm />

          {isLoading ? (
            <div
              className="bookstore-content__wrapper"
              style={{ background: '#fff', padding: 24, minHeight: 280 }}
            >
              <BookstoreCard isLoading />
              <BookstoreCard isLoading />
              <BookstoreCard isLoading />
              <BookstoreCard isLoading />
            </div>
          ) : (
            <div
              className="bookstore-content__wrapper"
              style={{ background: '#fff', padding: 24, minHeight: 280 }}
            >
              {books.map(book => <BookstoreCard key={book.id} {...book} />)}
            </div>
          )}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Coded with{' '}
          <span role="img" aria-label="Corazón">
            ❤️{' '}
          </span>by
          <a href="https://github.com/marioterron"> Mario Terron</a>
        </Footer>
      </Layout>
    );
  }
}

BookstoreContent.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BookstoreContent;
