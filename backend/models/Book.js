const mongoose = require("mongoose");

const Book = mongoose.model('Book', {
    name: String,
    category: String,
    description: String,
    image: String,
    author: String,
    year: Number,
});

module.exports = Book;