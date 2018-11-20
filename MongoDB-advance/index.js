
const  genres = require('./routes/genres')
const Joi = require('Joi')
const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connct('mongodb://localhost/video-api', { useNewUrlParser: true })
    .then((result) => {

    }).catch((err) => {

    });

app.use(express.json());
app.use('/api/genres',async (req,res) => {

});

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50 
    }
})

const Genre = mongoose.model('Genre', genreSchema);

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).max(50).required()
    }
    return Joi.validate(genre, schema)
}

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


const port = process.env.port || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`))

