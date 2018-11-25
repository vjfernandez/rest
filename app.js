'use strict';
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//rutas
//bodyparser middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/probando", (req, res)=> {
    res.status(200).send({'some':'json'});
});

module.exports = app;