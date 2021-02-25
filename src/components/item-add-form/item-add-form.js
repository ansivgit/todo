/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
  onLabelChange = () => {
    console.log(this);
  }

  render() {
    return (
      <form className="item-add-form d-flex">

        <input
          type="text"
          className="form-control"
          placeholder="What needs to be done"
          onChange={this.onLabelChange}
        />

        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => this.onItemAdded('Hello World!')}
        >
          Add Item
        </button>
      </form>
    );
  }
}
