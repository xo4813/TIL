const { Genre, validate } = require('../models/genre')
const mongoose = require('mongoose');
const express = require('express');
const router = express().Router();


router.get('/api/genres', async (req, res) => {
    const genres = await Genre.find().sort('name');
    res.send(genres);
})

router.post('api/genres', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.message)

    let genre = new Genre({ name: req.body.name });

    genre = await genre.save()

    res.send(genre)
})


router.get('/api/genres/:id', async (req, res) => {
    const genre = await Genre.findById(req.params.id)

    if (!genre) return res.status(404).send('not Found');
})


router.patch('/api/genres/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (!error) return res.status(404).send("not Found");

    const genre = await Genre.findByIdAndUpdate(req.params.id, {
        name: req.body.name
    }, { new: true })
})

router.delete('/api/genres/:id', async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);

    if (!genre) return res.status(404).send('not Found');

})

module.exports = router;