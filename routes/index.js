const express = require('express');
const router = express.Router();
const movieApi = require('../api/movies-api');

router
.route('/catalog')
.get(movieApi.catalog)

router
.route('/catalog/add')
.post(movieApi.addMovie)

module.exports = router;