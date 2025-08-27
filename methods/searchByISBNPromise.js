const axios = require('axios');

function searchByISBN(isbn) {
  axios.get(`http://localhost:3000/books/isbn/${isbn}`)
    .then(response => console.log(response.data))
    .catch(error => console.error(error.message));
}

searchByISBN('1234567890');