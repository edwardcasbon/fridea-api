// Dependences.
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// App config.
var config = require('./config.json');

// DB connection.
mongoose.connect('mongodb://' + config.db.host + ':' + config.db.port + '/' + config.db.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('We\'re connected');
});

// Express.
var app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// Routes.
app.use(function(req, res, next){
    req.db = db;
    next();
});
app.use('/ideas', require('./routes/ideas'));
app.use('/users', require('./routes/users'));

// Start the server.
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port ' + port);
