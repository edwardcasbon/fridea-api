// Dependences.
var express = require('express');
var router = express.Router();

// Authenticate and create a token.
router.post('', function(req, res){
    var authenticate = require('../models/authenticate');
    var token = authenticate.createToken(req.query.apikey, req.query.secret, req.authSecret);
    res.json({
        success: true,
        token: token
    });
});

// Return router.
module.exports = router;
