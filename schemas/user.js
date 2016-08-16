var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var userSchema = new mongoose.Schema({
    _id: Number,
    email: String,
    _ideas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Idea'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
