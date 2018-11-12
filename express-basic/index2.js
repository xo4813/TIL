const express = require("express");
const app = express();

// Json 을 사용
app.use(express.json());

const users = [
    { id: 'aaa', email: 'asd@asd.com', age: '1' },
    { id: '2e3r', email: 'asd@asd.com', age: '2' },
]

// 모든 유저정보 받기 
app.get('/api/users', (req, res) => {
    console.log(users);
    res.send(users);
})

// 특정 유저정보 받기
app.get('/api/users/:id', (req, res) => {

    const isFind = findUser(req.params.id);

    if (!isFind) {
        res.status(404).send("정보가 없음");
    }

    res.send(isFind);
})

// 추가하기
app.post('/api/users', (req, res) => {

    const { error } = validateInfo(req.body);

    validateInfo()

})

// 수정하기
app.put('/api/users', (req, res) => {

})

// 제거하기
app.delete('/api/users/:id', (req, res) => {

})

function findUser(id) {

    const isFind = users.find(user => {
        return id == user.id;
    })

    return isFind;
}



function validateInfo(user) {

    const schem = {
        id: Joi.string().min(2).required(),
        email: Joi.string().min(2).required(),
        age: Joi.string().min(2).required(),
    }

    return Joi.validate(user, schem);
}

const port = process.env.port || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`))