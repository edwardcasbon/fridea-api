// Dependences.
var express = require('express');
var router = express.Router();

// Model.
var Idea = require('../models/idea');

// Get all ideas.
router.get('', function(req, res){
    Idea.getAll(req.query).then(function(ideas){
        res.json(ideas);
    });
});

// Get a specific idea.
router.get(':id', function(req, res){
    Idea.getOne(req.params.id).then(function(idea){
        res.json(idea);
    });
});

// Create an idea.
router.post('', function(req, res){
    Idea.createOne(req.query).then(function(idea){
        res.json(idea);
    });
});

// Update an idea.
router.put(':id', function(req, res){
    Idea.updateOne(req.params.id, req.query).then(function(idea){
        res.json(idea);
    });
});

// Delete an idea.
router.delete(':id', function(req, res){
    Idea.deleteOne(req.params.id).then(function(idea){

        // Return true or false
        return true;
    });
});

// Return router.
module.exports = router;
