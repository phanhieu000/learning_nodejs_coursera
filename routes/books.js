const express = require('express');
const router = express.Router();
const books = require('../data/books.json');

// Task 1: Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Task 2: Get book by ISBN
router.get('/isbn/:isbn', (req, res) => {
  const book = books.find(b => b.isbn === req.params.isbn);
  if (book) res.json(book);
  else res.status(404).json({ message: 'Book not found' });
});

// Task 3: Get books by author
router.get('/author/:author', (req, res) => {
  const result = books.filter(b => b.author.toLowerCase() === req.params.author.toLowerCase());
  res.json(result);
});

// Task 4: Get books by title
router.get('/title/:title', (req, res) => {
  const result = books.filter(b => b.title.toLowerCase().includes(req.params.title.toLowerCase()));
  res.json(result);
});

// Task 5: Get book review
router.get('/:isbn/review', (req, res) => {
  const book = books.find(b => b.isbn === req.params.isbn);
  if (book) res.json(book.reviews || {});
  else res.status(404).json({ message: 'Book not found' });
});

module.exports = router;