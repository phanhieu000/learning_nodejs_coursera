const axios = require('axios');

async function searchByTitle(title) {
  try {
    const response = await axios.get(`http://localhost:3000/books/title/${title}`);
    console.log(response.data);
  } catch (error) {
    console.error(error.message);
  }
}

searchByTitle('Node.js');