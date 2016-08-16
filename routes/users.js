// Dependences
var express = require('express');
var router = express.Router();

// Model.
var User = require('../models/user');

// Get all users.
router.get('', function(req, res){
    User.getAll(req.query).then(function(users){
        res.json(users);
    });
});

// Get a specific user.
router.get(':id', function(req, res){
    User.getOne(req.params.id).then(function(user){
        res.json(user);
    });
});

// Create a user.
router.post('', function(req, res){
    User.createOne(req.query).then(function(user){
        res.json(user);
    });
});

// Update a user.
router.put(':id', function(req, res){
    User.updateOne(req.params.id, req.query).then(function(user){
        res.json(user);
    });
});

// Delete a user.
router.delete(':id', function(req, res){
    User.deleteOne(req.params.id).then(function(user){

        // Return true or false
        return true;
    });
});
// Return router.
module.exports = router;
