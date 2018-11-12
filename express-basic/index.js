
const express = require('express');
const Joi = require('joi');

const app = express();

// JSON 

app.use(express.json());


// CRUD

//CREATE   READ   UPDATE   DESTROY  
// POST    GET     PUT     DELETE






app.get('/', (req, res) => {

    //응답
    res.send('Happy Hacking');
})

app.get('/:name', (req, res) => {
    res.send(`Hi , ${req.params.name}`);
})



const port = process.env.port || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`))