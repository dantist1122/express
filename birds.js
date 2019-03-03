const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next){
    console.log('Time: ', new Date());
    next();
});


router.get('/', function (req, res){
    res.send('Birds home page');
});

router.get('/about', function (req, res){
    res.send('About birds');
});

router.get('/kind', function(req, res){
    res.send('Juravli, sinichki, vorobushki')
});


module.exports = router;
