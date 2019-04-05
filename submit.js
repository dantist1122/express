const express = require('express');

const app = express();


app.post('/submit', function(req, res) {
    console.log('submit');
    res.send(req.body.firstName +" " + req.body.lastName);


    // const username  = req.body.firstName;
    // res.end();
});