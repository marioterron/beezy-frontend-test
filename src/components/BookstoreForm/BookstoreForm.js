import React from 'react';
import { Form, Input, Button } from 'antd';

import './bookstore-form.scss';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 }
};

const buttonItemLayout = {
  wrapperCol: { span: 14, offset: 4 }
};

const formLayout = 'inline';

const BookStoreForm = () => {
  return (
    <Form layout={formLayout} className="bookstore-form">
      <h1 className="bookstore-form__title">Add a new book to our awesome bookstore</h1>
      <FormItem label="Title">
        <Input />
      </FormItem>
      <FormItem label="Author">
        <Input />
      </FormItem>
      <FormItem label="Genre">
        <Input />
      </FormItem>
      <FormItem>
        <Button type="primary">Add book</Button>
      </FormItem>
    </Form>
  );
};

export default BookStoreForm;
