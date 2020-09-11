const express = require("express");
const router = express.Router();
const movieApi = require("../services/movies-api");
const movieValidator = require("../validator/movie-validator");

router
  .route("/movies")
  .get(movieApi.listMovies)
  .post(movieValidator.validateMovie, movieApi.addMovie);

router
  .route("/movies/:id")
  .get(movieApi.getMovie)
  .put(movieValidator.validateMovie, movieApi.updateMovie)
  .delete(movieApi.deleteMovie);

module.exports = router;
