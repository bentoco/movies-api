const movies = require('../movies.json');
const uuid = require('uuid/v5');
const Joi = require('joi');

const catalog = (req, res) => {
    res.json(movies)
};

const addMovie = (req, res) => {
    const { error } = validateMovie(req.body);
    if (error) return res.status(400).send(error.details[0].message);

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

function validateMovie(movies) {
    const schema = {
        titulo: Joi.string().min(3).required(),
        genero: Joi.string().required(),
        direcao: Joi.string().required(),
        elenco: Joi.string().required(),
        duracao: Joi.string().required(),
        sinopse: Joi.string().min(20).max(250)
    }

    return Joi.validate(movies, schema);
};

module.exports = {
    catalog,
    addMovie
};


