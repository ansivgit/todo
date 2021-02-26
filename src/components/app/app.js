/* eslint-disable react/sort-comp */
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
    term: '',
    filter: 'all',
  }

  onSearchChange = (term) => {
    this.setState({ term });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
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
  searchItems(items, term) {
    if (!term) {
      return items;
    }

    return items.filter((item) => item.label.toLowerCase().includes(term.toLowerCase));
  }

  // eslint-disable-next-line class-methods-use-this
  filterItems(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
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

  render = () => {
    const { todoData, term, filter } = this.state;

    const visibleItems = this.filterItems(this.searchItems(todoData, term), filter);

    const doneCount = todoData.filter((elem) => elem.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />

        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilter={this.onFilterChange}
          />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
