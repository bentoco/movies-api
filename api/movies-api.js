const movies = require('../movies.json');
const { v4 } = require('uuid');

const listMovies = (req, res) => {
    res.json(movies)
};

const addMovie = (req, res) => {
    const movie = {
        message: 'Created successfully.',
        data: {
            id: v4(),
            titulo: req.body.titulo,
            genero: req.body.genero,
            direcao: req.body.direcao,
            elenco: req.body.elenco,
            duracao: req.body.duracao,
            sinopse: req.body.sinopse
        }
    };
    movies.push(movie);
    res.status(201).json(movie);
};

const searchMovie = (req, res) => {
    const movie = movies.find(c => c.id === req.params.id);
    if (!movie) {
        return res.status(404).send('The movie with the given id was not found.');
    } 
    return res.json(movie)
};

const updateMovie = (req, res) => {
    const movie = movies.find(c => c.id === req.params.id);
    if (!movie) {
      return res.status(404).send('The movie with the given id was not found.');
    }
        movie.titulo =  req.body.titulo;
        movie.genero = req.body.genero;
        movie.direcao = req.body.direcao;
        movie.elenco = req.body.elenco;
        movie.duracao = req.body.duracao;
        movie.sinopse = req.body.sinopse;
        return res.json(movie)

};

const deleteMovie = (req, res) => {
    const filteredMovies = movies.filter(m => m.id !== req.params.id)
    if (filteredMovies.length === movies.length -1){
        return res.status(204).json({message: `Movie deleted successfully.`})
    } 
        return res.status(404).json({message: `The movie with id ${req.params.id} was not found.`})
};

module.exports = {
    listMovies,
    addMovie,
    searchMovie,
    updateMovie,
    deleteMovie
};


