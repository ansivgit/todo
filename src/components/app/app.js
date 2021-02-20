import React from 'react';

import {
  AppHeader,
  SearchPanel,
  TodoList,
  ItemStatusFilter,
} from '../index';

import './app.css';

const todoData = [
  {label: "Drink Coffee", important: false, id: 1,},
  {label: "Create Awesome App", important: true, id: 2,},
  {label: "Have a lunch", important: false, id: 3,},
]

export const App = () => {
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />

      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData}/>
    </div>
  );
};
