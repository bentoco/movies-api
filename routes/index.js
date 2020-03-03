const express = require('express');
const router = express.Router();
const movieApi = require('../api/movies-api');
const movieValidator = require('../validator/movie-validator');

router
.route('/catalog')
.get(movieApi.catalog)
.post(movieValidator.validateMovie, movieApi.addMovie)

module.exports = router;