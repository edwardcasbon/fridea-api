// Dependences
var express = require('express');
var router = express.Router();

// Model.
var User = require('../models/user');

// Routes
router.get('/:id', function(req, res){
    res.send('api works');
});

// Return router.
module.exports = router;
