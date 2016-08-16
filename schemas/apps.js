var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var appSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: Number,
    apikey: String,
    secret: String
}, {
    timestamps: true
});

module.exports = mongoose.model('App', appSchema);
