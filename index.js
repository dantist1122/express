const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 7000;
const birds = require('./birds');
const path = require('path');


app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/index.html'));
    next();
}, function (){
    //console.log('Hello')
});


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use(bodyParser.urlencoded({extended: false})); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

app.get('/hello', function (req, res, next) {
    console.log("will be the next message")
    next()
}, function (req, res) {
    res.status(200).json({name: "Ivan"});

});
// tried to connect HTML file

// app.get('/', function (req, res){
//     res.render('index.html');
// });

app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book')
    })
    .post(function (req, res) {
        res.send('Add a book')
    });


app.use('/birds', birds);


app.listen(PORT, () => console.log('SERVER WORKS'));