import React, { Component } from 'react';

import {
  AppHeader,
  SearchPanel,
  TodoList,
  ItemStatusFilter,
} from '../index';

import './app.css';

export class App extends Component {
  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1, },
      { label: "Create Awesome App", important: true, id: 2, },
      { label: "Have a lunch", important: false, id: 3, },
    ],
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
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={ this.deleteItem } />
      </div>
    );
  };
};
