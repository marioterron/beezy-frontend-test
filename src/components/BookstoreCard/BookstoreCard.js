import React from 'react';
import { Card, Icon, Input, Button } from 'antd';

import './bookstore-card.scss';

const BookstoreCard = () => {
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
      title="REDUX"
      actions={[<Icon type="edit" onClick={editBook} />, <Icon type="delete" />]}
    >
      <div className="bookstore-card__field">
        <strong>Title:</strong> <span>Redux</span>
      </div>
      <Input className="bookstore-card__input" />
      <div className="bookstore-card__field">
        <strong>Genre:</strong> <span>Redux</span>
      </div>
      <Input className="bookstore-card__input" />
      <div className="bookstore-card__field">
        <strong>Price:</strong> <span>10 $</span>
      </div>
      <Input className="bookstore-card__input" />
      <Button className="bookstore-card__save-btn" type="primary" icon="save">
        Save changes
      </Button>
    </Card>
  );
};

export default BookstoreCard;
