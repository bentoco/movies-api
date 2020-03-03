const Joi = require('joi');

const validateMovie = (req, res) => {
    const movies = req.body
    const schema = { 
        titulo: Joi.string().min(3).required(),
        genero: Joi.string().required(),
        direcao: Joi.string().required(),
        elenco: Joi.string().required(),
        duracao: Joi.string().required(),
        sinopse: Joi.string().min(20).max(250)
    };
    
    const { error } = Joi.validate(movies, schema);
    if (error) {
        return res.status(400).send(error.details[0].message);
    } 
};

module.exports = {
    validateMovie
}