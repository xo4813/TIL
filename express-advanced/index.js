debug =require('debug')('app:startup');
dbDebugger =require('debug')('app:db');
const morgan =require('morgan');
const helmet = require('helmet');
//export <변수명> = <value>
const config = require("config");
const auth = require('./middlewares/auth');
const logger = require('./middlewares/logger');
const express = require('express');

const app = express();



console.log(`Node_env: ${process.env.NODE_ENV}`)
console.log(app.get('env'));
console.log(app.get('debug'));


app.set('view engin', 'pug');

app.set('views', './views');

app.use(helmet());

if (app.get('env') === 'development')
{
    debug('MORGAN 을 실행합니다.');
    app.use(morgan('dev'));
}

console.log(config.get('name'));

// JSON 미들웨어 사용
app.use(express.json());

// url ? 뒤에 붙는 값  관리 
app.use(express.urlencoded({ extended: true }));

// 파일들을 관리? 
app.use(express.static('public'));

app.use(logger);
app.use(auth);

app.get('/',(req,res) => {
    res.render('index',{
        title: 'HappyHacking',
        gretting: 'May you Happy Hacking'
    })
})


// next : 다음 미들웨어로 넘어간다. 
app.use(function (req, res, next) {
    console.log('모든 요청이 올때마다 로그를 남깁니다.')

    next();
}
);

app.use(function (req, res, next) {
    console.log('사용자 인증을 진행중입니다 ...');
    next();
})

const port = process.env.port || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`))