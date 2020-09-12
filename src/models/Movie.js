const mongoose = require("mongoose");
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

const Movie = new Schema({
  title: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  stars: {
    type: Array,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
});

mongoose.model("movies", Movie);
