const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const booksPath = path.join(__dirname, '../data/books.json');

// Task 8: Add/Modify review
router.put('/:isbn/review', (req, res) => {
  const { username, review } = req.body;
  let books = JSON.parse(fs.readFileSync(booksPath));
  const book = books.find(b => b.isbn === req.params.isbn);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  book.reviews[username] = review;
  fs.writeFileSync(booksPath, JSON.stringify(books, null, 2));
  res.json({ message: 'Review added/modified' });
});

// Task 9: Delete review
router.delete('/:isbn/review', (req, res) => {
  const { username } = req.body;
  let books = JSON.parse(fs.readFileSync(booksPath));
  const book = books.find(b => b.isbn === req.params.isbn);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  if (book.reviews[username]) {
    delete book.reviews[username];
    fs.writeFileSync(booksPath, JSON.stringify(books, null, 2));
    res.json({ message: 'Review deleted' });
  } else {
    res.status(404).json({ message: 'Review not found for user' });
  }
});

module.exports = router;