const express = require('express')
const router = express.Router()
const movieApi = require('./src/services/movieService')

router.route('/movies').get(movieApi.listMovies)

module.exports = router
