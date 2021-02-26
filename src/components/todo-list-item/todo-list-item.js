/* eslint-disable react/prop-types */
import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({
  label,
  done,
  important,
  onDeleted,
  onToggleImportant,
  onToggleDone,
}) => {
  let classNames = 'todo-list-item d-flex justify-content-between';

  if (done) {
    classNames += ' done';
  }

  if (important) {
    classNames += ' important';
  }

  return (
    <div className={classNames}>
      <div
        className="todo-list-item-label"
        role="button"
        tabIndex={0}
        onClick={onToggleDone}
        onKeyPress={onToggleDone}
      >
        {label}
      </div>

      <div className="d-flex">
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={onDeleted}
        >
          <i className="bi bi-trash" />
        </button>

        <button
          type="button"
          className="btn btn-outline-success btn-sm"
          onClick={onToggleImportant}
        >
          <i className="bi bi-exclamation-circle" />
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
