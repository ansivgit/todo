import React from 'react';
import ReactDOM from 'react-dom';

import {
  AppHeader,
  SearchPanel,
  TodoList,
  ItemStatusFilter,
} from './components';

import './index.css';

const todoData = [
  {label: "Drink Coffee", important: false, id: 1,},
  {label: "Create Awesome App", important: true, id: 2,},
  {label: "Have a lunch", important: false, id: 3,},
]

const App = () => {
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

ReactDOM.render(<App />, document.getElementById('root'));
