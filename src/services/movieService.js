const mongoose = require('mongoose')
require('../models/Movie')
const Movie = mongoose.model('movies')

const listMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const addMovie = async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        categories: req.body.categories,
        director: req.body.director,
        stars: req.body.stars,
        time: req.body.time,
        synopsis: req.body.synopsis,
    })
    try {
        const newMovie = await movie.save()
        res.status(201).json({ newMovie })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getMovie = (req, res) => {
    Movie.findById(req.params.id)
        .then((result) => {
            res.status(200).send(result)
        })
        .catch((err) => {
            res.send(err)
        })
}

const updateMovie = (req, res) => {
    Movie.findOneAndUpdate(
        req.params.id,
        {
            $set: {
                title: req.body.title,
                categories: req.body.categories,
                director: req.body.director,
                stars: req.body.stars,
                time: req.body.time,
                synopsis: req.body.synopsis,
            },
        },
        { new: true },
        function (err, updateMovie) {
            if (err) {
                res.status(400).json({ message: err.message })
            }
            res.status(201).json({ updateMovie })
        }
    )
}

const deleteMovie = (req, res) => {
    const filteredMovies = Movie.filter((m) => m.id !== req.params.id)
    if (filteredMovies.length === Movie.length - 1) {
        return res.status(204).json({ message: 'Movie deleted successfully.' })
    }
    return res
        .status(404)
        .json({ message: `The movie with id ${req.params.id} was not found.` })
}

module.exports = {
    listMovies,
    addMovie,
    getMovie,
    updateMovie,
    deleteMovie,
}