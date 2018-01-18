import React from 'react';
import { Card, Icon, Input, Button } from 'antd';
import PropTypes from 'prop-types';

import './bookstore-card.scss';

const BookstoreCard = ({ title, genre, price }) => {
  const editBook = e => {
    const elCard = e.target.parentElement.parentElement.parentElement.parentElement;
    const elSaveBtn = elCard.getElementsByClassName('bookstore-card__save-btn')[0];
    const inputs = Array.from(elCard.getElementsByClassName('bookstore-card__input'));
    const fields = Array.from(elCard.getElementsByClassName('bookstore-card__field'));

    fields.forEach(field => field.classList.toggle('is-inactive'));
    inputs.forEach(input => input.classList.toggle('is-active'));
    elSaveBtn.classList.toggle('is-active');
  };

  return (
    <Card
      className="bookstore-card"
      title={title}
      actions={[<Icon type="edit" onClick={editBook} />, <Icon type="delete" />]}
    >
      <div className="bookstore-card__field">
        <strong>Title:</strong> <span>{title}</span>
      </div>
      <Input className="bookstore-card__input" defaultValue={title} />
      <div className="bookstore-card__field">
        <strong>Genre:</strong> <span>{genre}</span>
      </div>
      <Input className="bookstore-card__input" defaultValue={genre} />
      <div className="bookstore-card__field">
        <strong>Price:</strong> <span>{price} $</span>
      </div>
      <Input className="bookstore-card__input" defaultValue={price} />
      <Button className="bookstore-card__save-btn" type="primary" icon="save">
        Save changes
      </Button>
    </Card>
  );
};

BookstoreCard.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default BookstoreCard;
