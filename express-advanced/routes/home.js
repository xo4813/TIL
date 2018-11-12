const express = require('express');
const router = express().Router();

router.get('/',(req,res) => {
    res.render('index',{
        title: 'HappyHacking',
        gretting: 'May you Happy Hacking'
    })
})


// next : 다음 미들웨어로 넘어간다. 
router.use(function (req, res, next) {
    console.log('모든 요청이 올때마다 로그를 남깁니다.')

    next();
}
);

router.use(function (req, res, next) {
    console.log('사용자 인증을 진행중입니다 ...');
    next();
})

module.exports = router;