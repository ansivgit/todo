import React from 'react';

export const TodoListItem = ({ label, important = false }) => {

  const style = {
    color: important ? 'tomato' : 'black',
  }

  return <span style={style}>{ label }</span>;
};

// альтернативная запись без деструктуризации
// export const TodoListItem = (props) => {
//   return <span>{ props.label, props.important }</span>;
// };
