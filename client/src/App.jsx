import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:5000/api/todos');
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (title) => {
    const res = await axios.post('http://localhost:5000/api/todos', { title });
    setTodos([...todos, res.data]);
  };

  const updateTodo = async (id, updated) => {
    await axios.put(`http://localhost:5000/api/todos/${id}`, updated);
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    fetchTodos();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>My To-Do App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default App;
