const axios = require('axios');

export async function getAllBooks() {
  try {
    const response = await axios.get('http://localhost:3000/books');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.message);
    return []
  }
}
