const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const usersPath = path.join(__dirname, '../data/users.json');

// Task 6: Register
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  let users = JSON.parse(fs.readFileSync(usersPath));
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'User exists' });
  }
  users.push({ username, password });
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
  res.json({ message: 'Registered successfully' });
});

// Task 7: Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  let users = JSON.parse(fs.readFileSync(usersPath));
  const user = users.find(u => u.username === username && u.password === password);
  if (user) res.json({ message: 'Login successful' });
  else res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;