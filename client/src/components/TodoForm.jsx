import React, { useState } from 'react';
import './Todo.css'; // Import external CSS

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim() === '') return;
    addTodo(title);
    setTitle('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter a task"
        className="todo-input"
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
};

export default TodoForm;
