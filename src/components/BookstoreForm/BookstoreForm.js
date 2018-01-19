import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';

import './bookstore-form.scss';

const FormItem = Form.Item;

class BookstoreForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  cleanInputs() {
    this.inputTitle.input.value = '';
    this.inputGenre.input.value = '';
    this.inputPrice.input.value = '';
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddBook({
      title: this.inputTitle.input.value,
      genre: this.inputGenre.input.value,
      price: parseInt(this.inputPrice.input.value, 10)
    });
    this.cleanInputs();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} layout="inline" className="bookstore-form">
        <h1 className="bookstore-form__title">Add a new book to our awesome bookstore</h1>
        <FormItem label="Title">
          <Input ref={node => (this.inputTitle = node)} />
        </FormItem>
        <FormItem label="Genre">
          <Input ref={node => (this.inputGenre = node)} />
        </FormItem>
        <FormItem label="Price">
          <Input ref={node => (this.inputPrice = node)} />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Add book
          </Button>
        </FormItem>
      </Form>
    );
  }
}

BookstoreForm.propTypes = {
  onAddBook: PropTypes.func.isRequired
};

export default BookstoreForm;
