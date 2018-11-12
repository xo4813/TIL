const express = require('express');
const router = express().Router();
const Joi = require('joi');

const movies = [
    { id: 1, title: 'as' },
    { id: 2, title: 'ab' },
    { id: 3, title: 'zxc' },
];


// GET / api/movies 
router.get('/api/movies', (req, res) => {
    res.send(movies);
});

// GET / api/movies/1
router.get('/api/movies/:id', (req, res) => {

    const movie = getMovie(movies,parseInt(req.params.id));

    if (!movie) {
        res.status(404).send(`move with given id(${req.params.id}) is not found.`)
    }

    res.send(movie);
});

// POST / api/movies 
router.post('/api/movies', (req, res) => {

    const { error } = validateMovie(req.body);

    if (error) {
        res.status(404).send(error.message);
    }

    const movie = { id: movies.length + 1, title: req.body.title };
    movies.push(movie);
    res.send(movie);
});

// PUT / api/movies
router.put('/api/movies/:id', (req, res) => {

    // 서버에 데이터에 있는지 확인 .
    const movie = getMovie(movies,parseInt(req.params.id));

    const { error } = validateMovie(req.body);

    // 유저가 입력한 데이터를 확인.
    //const result = validateMovie(req.body);

    if (error) {
        res.status(404).send(error.message);
    }

    if (movie) {
        movies.splice(movies.lastIndexOf(movie), 1, { id: parseInt(req.params.id), title: req.body.title });
        console.log(movies)
        res.send(movies);
    }

});
// DELETE / api/movies
router.delete('/api/movies/:id', (req, res) => {

    console.log(req.params)

    if (movie) {
        movies.splice(movies.indexOf(movie), 1);
    }

    res.send(movies);
});

function getMovie(movies,id) {

    return movies.find((movie) => {
        return movie.id === parseInt(id);
    })

}

function validateMovie(movie) {
    const schem = {
        title: Joi.string().min(2).required(),
    }

    return Joi.validate(movie, schem);
}

module.exports = router;