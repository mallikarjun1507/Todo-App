import React from 'react';

const TodoList = ({ todos, onUpdate, onDelete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() =>
              onUpdate(todo.id, { title: todo.title, completed: !todo.completed })
            }
          />
          {todo.title}
          <button onClick={() => onDelete(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
