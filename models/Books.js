const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    authors: {
      type: Array,
      required: true
    },
    description: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      }
  });

const Books = mongoose.model("Books", BooksSchema);

// Export the Article model
module.exports = Books;