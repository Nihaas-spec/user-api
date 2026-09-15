const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory users array
let users = [
  {
    id: 1,
    name: 'Ali',
    email: 'ali@example.com',
    age: 22,
  },
  {
    id: 2,
    name: 'Sara',
    email: 'sara@example.com',
    age: 25,
  },
];

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET a single user by id
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
});

// POST: Create a new user
app.post('/api/users', (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || age === undefined) {
    return res.status(400).json({
      message: 'Please provide name, email, and age',
    });
  }

  if (typeof age !== 'number') {
    return res.status(400).json({
      message: 'Age must be a number',
    });
  }

  const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;

  const newUser = {
    id: newId,
    name,
    email,
    age,
  };

  users.push(newUser);

  res.status(201).json({
    message: 'User created successfully',
    user: newUser,
  });
});

// PUT: Update an existing user
app.put('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, age } = req.body;

  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (age !== undefined && typeof age !== 'number') {
    return res.status(400).json({ message: 'Age must be a number' });
  }

  if (name !== undefined) users[userIndex].name = name;
  if (email !== undefined) users[userIndex].email = email;
  if (age !== undefined) users[userIndex].age = age;

  res.json({
    message: 'User updated successfully',
    user: users[userIndex],
  });
});

// DELETE: Remove a user
app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  const deletedUser = users[userIndex];
  users.splice(userIndex, 1);

  res.json({
    message: 'User deleted successfully',
    user: deletedUser,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});