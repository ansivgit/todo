import React, { Component } from 'react';

import './todo-list-item.css';

export class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  }

  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done,
      }
    });
  }

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important,
      }
    });
  }

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

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
          onClick={ this.onLabelClick }>
          {label}
        </div>

        <div className="d-flex">
          <button type="button"
            className="btn btn-outline-danger btn-sm"
          onClick={onDeleted}>
            <i className="bi bi-trash" />
          </button>

          <button type="button"
            className="btn btn-outline-success btn-sm"
            onClick={ this.onMarkImportant }>
            <i className="bi bi-exclamation-circle" />
          </button>
        </div>
      </div>
    )
  }
};

// альтернативная запись без деструктуризации
// export const TodoListItem = (props) => {
//   return <span>{ props.label, props.important }</span>;
// };
