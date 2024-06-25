import React from 'react';

function TodoItem({ todo, index, deleteTodo }) {
  return (
    <li>
      <input type="checkbox" />
      {todo.text}
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
