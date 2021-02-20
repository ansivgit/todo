import React from 'react';

import './todo-list-item.css';

export const TodoListItem = ({ label, important = false }) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal',
  }

  return (
    <div className="todo-list-item d-flex justify-content-between">
      <div
        className="todo-list-item-label"
        style={style}>
        {label}
      </div>

      <div class="d-flex">
        <button type="button"
                className="btn btn-outline-danger btn-sm">
          <i className="bi bi-trash" />
        </button>

        <button type="button"
                className="btn btn-outline-success btn-sm">
          <i className="bi bi-exclamation-circle" />
        </button>
      </div>
    </div>
  )
};

// альтернативная запись без деструктуризации
// export const TodoListItem = (props) => {
//   return <span>{ props.label, props.important }</span>;
// };
