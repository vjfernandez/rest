'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.port || 3789;
mongoose.connect('mongodb://localhost:27017/zooml', {useNewUrlParser:true})
        .then(() => {
            console.log("Concectado");
            app.listen(port,() => {
                console.log("servidor node");
            })
        })
        .catch((err) => {console.log("Error conectando")});
 

    
