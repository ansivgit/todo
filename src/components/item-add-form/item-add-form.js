/* eslint-disable react/prop-types */
import React from 'react';

import './item-add-form.css';

const ItemAddForm = ({ onItemAdded }) => {
  return (
    <form className="item-add-form d-flex">

      <input
        type="text"
        className="form-control"
        placeholder="What needs to be done"
      />

      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => onItemAdded('Hello World!')}
      >
        Add Item
      </button>
    </form>
  );
};

export default ItemAddForm;
