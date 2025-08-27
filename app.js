const express = require('express');
const app = express();
app.use(express.json());

const booksRoutes = require('./routes/books');
const usersRoutes = require('./routes/users');
const reviewsRoutes = require('./routes/reviews');

app.use('/books', booksRoutes);
app.use('/users', usersRoutes);
app.use('/reviews', reviewsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});