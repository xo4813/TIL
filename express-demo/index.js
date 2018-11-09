const express = require('express')
const app = express();


// 사용자가 get으로 보냈다.
app.get('/', (req, res) => {
    res.send('HK');
})

app.get('/api', (req, res) => {

    const data = {
        ceo: 'join',
        director: 'neo',
        intern: 'js',
        partner: 'tak',
        partner: 'tak'
    }
    res.send(data);
})

app.get("/api/courses/:id", (req, res) => {

    res.send(req.param.id);

})

app.get("/api/posts/:year", (req, res) => {
    res.send(req.query);
})


const post = process.env.PORT || 3000

app.listen(3000, () => {
    console.log(`${post}`);
})