const express = require('express')
const router = express.Router()
const movieApi = require('./src/services/movieService')
const movieValidator = require('./src/validator/movieValidator')

router
    .route('/movies')
    .get(movieApi.listMovies)
    .post(movieValidator.validateMovie, movieApi.addMovie)

router
    .route('/movies/:id')
    .get(movieApi.getMovie)
    .put(movieValidator.validateMovie, movieApi.updateMovie)
    .delete(movieApi.deleteMovie)

module.exports = router
