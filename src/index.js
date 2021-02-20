import React from 'react';
import ReactDOM from 'react-dom';

import {
  AppHeader,
  SearchPanel,
  TodoList,
} from './components';

const todoData = [
  {label: "Drink Coffee", important: false, id: 1,},
  {label: "Create Awesome App", important: true, id: 2,},
  {label: "Have a lunch", important: false, id: 3,},
]

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
