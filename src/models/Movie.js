const mongoose = require('mongoose')
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

const Movie = new Schema({})

mongoose.model('movies', Movie)
