
const express = require('express');

const app = express();

const movies = [
    { id: 1, title: '매트릭스' },
    { id: 2, title: '파이트클럽' },
    { id: 3, title: '인터스텔라' },
]


// CRUD

//CREATE   READ   UPDATE   DESTROY
// POST    GET     PUT     DELETE

// GET / api/movies 
app.get('/api/movies', (req, res) => {
    res.send(movies);
});

// GET / api/movies/1
app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find((movie) => {
        return movie.id === parseInt(req.params.id);
    })

    if (!movie){
        res.status(404).send(`move with given id(${req.params.id}) is not found.`)
    }

    res.send(movie);
});
// POST / api/movies 
app.post('/api/movies/gg', (req, res) => {
    res.send(movies);
});

// PUT / api/movies
app.put('/api/movies/put', (req, res) => {
    res.send(movies);
});
// DELETE / api/movies
app.delete('/api/movies/del', (req, res) => {
    res.send(movies);
});




app.get('/', (req, res) => {

    //응답
    res.send('Happy Hacking');
})

app.get('/:name', (req, res) => {
    res.send(`Hi , ${req.params.name}`);
})

const port = process.env.port || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`))