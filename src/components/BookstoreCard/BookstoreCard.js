import React, { Component } from 'react';
import { Card, Icon, Input, Button } from 'antd';
import PropTypes from 'prop-types';

import './bookstore-card.scss';

class BookstoreCard extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleEditBook = this.handleEditBook.bind(this);
  }

  showEdit(e) {
    const elCard = e.target.parentElement.parentElement.parentElement.parentElement;
    const elSaveBtn = elCard.getElementsByClassName('bookstore-card__save-btn')[0];
    const inputs = Array.from(elCard.getElementsByClassName('bookstore-card__input'));
    const fields = Array.from(elCard.getElementsByClassName('bookstore-card__field'));

    fields.forEach(field => field.classList.toggle('is-inactive'));
    inputs.forEach(input => input.classList.toggle('is-active'));
    elSaveBtn.classList.toggle('is-active');
  }

  hideEdit(e) {
    const elCard = e.target.parentElement.parentElement.parentElement.parentElement;
    const elSaveBtn = elCard.getElementsByClassName('bookstore-card__save-btn')[0];
    const inputs = Array.from(elCard.getElementsByClassName('bookstore-card__input'));
    const fields = Array.from(elCard.getElementsByClassName('bookstore-card__field'));

    fields.forEach(field => field.classList.remove('is-inactive'));
    inputs.forEach(input => input.classList.remove('is-active'));
    elSaveBtn.classList.remove('is-active');
  }

  handleEditBook(e) {
    this.props.onEditBook({
      id: this.props.id,
      title: this.inputTitle.input.value,
      genre: this.inputGenre.input.value,
      price: this.inputPrice.input.value
    });
    this.hideEdit(e);
  }

  handleRemoveBook() {
    const id = parseInt(this.props.id, 10);
    this.props.onRemoveBook(id);
  }

  render() {
    const { title, genre, price } = this.props;

    return (
      <Card
        className="bookstore-card"
        title={title}
        actions={[
          <Icon type="edit" onClick={this.showEdit} />,
          <Icon type="delete" onClick={this.handleRemoveBook} />
        ]}
      >
        <div className="bookstore-card__field">
          <strong>Title:</strong> <span>{title}</span>
        </div>
        <Input
          className="bookstore-card__input"
          defaultValue={title}
          type="text"
          required
          ref={node => (this.inputTitle = node)}
        />
        <div className="bookstore-card__field">
          <strong>Genre:</strong> <span>{genre}</span>
        </div>
        <Input
          className="bookstore-card__input"
          defaultValue={genre}
          type="text"
          required
          ref={node => (this.inputGenre = node)}
        />
        <div className="bookstore-card__field">
          <strong>Price:</strong> <span>{price} $</span>
        </div>
        <Input
          className="bookstore-card__input"
          defaultValue={price}
          type="number"
          min="1"
          step="0.01"
          required
          ref={node => (this.inputPrice = node)}
        />
        <Button
          className="bookstore-card__save-btn"
          type="primary"
          icon="save"
          onClick={this.handleEditBook}
        >
          Save changes
        </Button>
      </Card>
    );
  }
}

BookstoreCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onRemoveBook: PropTypes.func.isRequired,
  onEditBook: PropTypes.func.isRequired
};

export default BookstoreCard;
