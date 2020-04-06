const mongoose = require('mongoose')
require('../models/Movie')
const Movie = mongoose.model('movies')


const listMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (err) {
        res.status(404).json({message: err.message})
    }
};

const addMovie = async (req, res) => {
        const movie = new Movie({
            title: req.body.title,
            categories: req.body.categories,
            director: req.body.director,
            stars: req.body.stars,
            time: req.body.time,
            synopsis: req.body.synopsis      
        })
        try {
            const newMovie = await movie.save()
            res.status(201).json({ newMovie })
        } catch (err) {
            res.status(400).json({ message: err.message})
        }
}

const getMovie = async (req, res) => {
    try {
        const m = await m.findMovie()
        res.status(201).json({ m})
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
}


const updateMovie = (req, res) => {
    const movie = movies.find(c => c.id === req.params.id);
    if (!movie) {
      return res.status(404).send('The movie with the given id was not found.');
    }
        movie.title =  req.body.title;
        movie.categories = req.body.categories;
        movie.director = req.body.director;
        movie.stars = req.body.stars;
        movie.time = req.body.time;
        movie.synopsis = req.body.synopsis;
        return res.json(movie)

};

const deleteMovie = (req, res) => {
    const filteredMovies = movies.filter(m => m.id !== req.params.id)
    if (filteredMovies.length === movies.length -1){
        return res.status(204).json({message: `Movie deleted successfully.`})
    } 
        return res.status(404).json({message: `The movie with id ${req.params.id} was not found.`})
};

async function findMovie(req, res, next) {
    let movie;
    try {
      movie = await Movie.findById(req.params.id);
      if (movie == null) {
        return res.status(404).json({ message: "Cannot find Movie" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.movie = movie;
    next();
}


module.exports = {
    listMovies,
    addMovie,
    getMovie,
    updateMovie,
    deleteMovie
};


