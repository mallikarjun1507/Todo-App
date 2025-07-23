const db = require('../config/db');

// Create To-Do
exports.createTodo = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  db.query('INSERT INTO todos (title, completed) VALUES (?, ?)', [title, false], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(201).json({ id: result.insertId, title, completed: false });
  });
};

// Get All Todos
exports.getTodos = (req, res) => {
  db.query('SELECT * FROM todos', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Update To-Do
exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  db.query(
    'UPDATE todos SET title = ?, completed = ? WHERE id = ?',
    [title, completed, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      res.json({ message: 'Todo updated' });
    }
  );
};

// Delete To-Do
exports.deleteTodo = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM todos WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json({ message: 'Todo deleted' });
  });
};
