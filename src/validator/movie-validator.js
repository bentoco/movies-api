const Joi = require("@hapi/joi");

const validateMovie = (req, res, data, next) => {
  const movies = req.body;
  const schema = Joi.object({
    title: Joi.string().min(1).required(),
    categories: Joi.string().required(),
    director: Joi.string().required(),
    stars: Joi.string().required(),
    time: Joi.string().required(),
    synopsis: Joi.string().min(20).max(250),
  });
  return schema.validate(data);

  const { error } = schema.validate(movies, schema);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};

module.exports.validateMovie = validateMovie;
