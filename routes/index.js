const express = require('express');
const router = express.Router();
const movieApi = require('../api/movies-api');
const movieValidator = require('../validator/movie-validator');

router
.route('/movies')
.get(movieApi.listMovies)
.post(movieValidator.validateMovie, movieApi.addMovie)

router
.route('/movies/:id')
.get(movieApi.searchMovie)

module.exports = router;