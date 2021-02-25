import React, { Component } from 'react';

import {
  AppHeader,
  SearchPanel,
  TodoList,
  ItemStatusFilter,
  ItemAddForm,
} from '../index';

import './app.css';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Create Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
  }

  // eslint-disable-next-line react/sort-comp
  createTodoItem(label) {
    // eslint-disable-next-line no-return-assign
    return {
      label,
      important: false,
      done: false,
      id: this.maxId += 1,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((elem) => elem.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1),
    ];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const newArray = this.toggleProperty(todoData, id, 'important');

      return {
        todoData: newArray,
      };
    });
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const newArray = this.toggleProperty(todoData, id, 'done');

      return {
        todoData: newArray,
      };
    });
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];

      return {
        todoData: newArray,
      };
    });
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idxDeleted = todoData.findIndex((elem) => elem.id === id);

      const newArray = [
        ...todoData.slice(0, idxDeleted),
        ...todoData.slice(idxDeleted + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  }

  render = () => {
    const { todoData } = this.state;

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <ItemAddForm
          todos={todoData}
          onItemAdded={this.addItem}
        />
      </div>
    );
  }
}
