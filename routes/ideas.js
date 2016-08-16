// Dependences.
var express = require('express');
var router = express.Router();

// Model.
var Idea = require('../models/idea');

// Get all ideas.
router.get('', function(req, res){
    Idea.getAllIdeas().then(function(ideas){
        res.json(ideas);
    });
});

// Get a specific idea.
router.get('/:id', function(req, res){
    res.json('@todo Return a specific idea');
});

// Create an idea.
router.post('', function(req, res){
    // console.log(req.query);
    // console.log(req.db);
    var idea = Idea.create();
    res.json(idea);
});

// Return router.
module.exports = router;
