const Joi = require('Joi')
const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255 
    },
    relesae: {
        type: Date,
        default: Date.now() 
    },

    mainAcoter: {
        type: String,
        minlength : 1
    }
})

const Movie = mongoose.model('Movie',movieSchema)
