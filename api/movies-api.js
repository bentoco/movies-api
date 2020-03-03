const movies = require('../movies.json');
const uuid = require('uuid/v5');

const catalog = (req, res) => {
    res.json(movies)
};

const addMovie = (req, res) => {

    const movie = {
        message: 'Created successfully.',
        data: {
            id: uuid(),
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

module.exports = {
    catalog,
    addMovie
};


