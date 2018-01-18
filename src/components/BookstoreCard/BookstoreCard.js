import React from 'react';
import { Card } from 'antd';

import './bookstore-card.scss';

const BookstoreCard = () => {
  return (
    <Card title="📕 REDUX">
      <div>
        <strong>Title:</strong> <span>Redux</span>
      </div>
      <div>
        <strong>Author:</strong> <span>Redux</span>
      </div>
      <div>
        <strong>Genre:</strong> <span>Redux</span>
      </div>
    </Card>
  );
};

export default BookstoreCard;
