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
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Create Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },
    ],
  };

  addItem = (text) => {
    const { todoData } = this.state;
    const newItem = {
      label: text,
      important: false,
      id: this.maxId += 1,
    };

    const newArray = todoData.push(newItem);
    console.log(newArray);
  };

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
  };

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
        />

        <ItemAddForm
          todos={todoData}
          onItemAdded={this.addItem}
        />
      </div>
    );
  };
}
