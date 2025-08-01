import React from 'react';
import './Todo.css';

const TodoList = ({ todos, onUpdate, onDelete }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                onUpdate(todo.id, { title: todo.title, completed: !todo.completed })
              }
            />
            <span className="todo-title">{todo.title}</span>
          </label>
          <button className="remove-btn" onClick={() => onDelete(todo.id)}>✖</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
