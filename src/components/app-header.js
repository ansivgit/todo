import React from 'react';

import './app-header.css';

export const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>My TODO list</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  )
};
