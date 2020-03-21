const Joi = require('joi');

const validateMovie = (req, res, next, Movie) => {
    const movies = req.body
    const schema = { 
        title: Joi.string().min(3).required(),
        categories: Joi.string().required(),
        director: Joi.string().required(),
        stars: Joi.string().required(),
        time: Joi.string().required(),
        synopsis: Joi.string().min(20).max(250)
    };
    
    const { error } = Joi.validate(movies, schema);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    next();
};

module.exports = {
    validateMovie
}