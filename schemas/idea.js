var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var ideaSchema = new mongoose.Schema({
    title: String,
    description: String,
    rating: Number,
    public: Boolean,
    status: Number,
    notes: Array,
    _user: {
        type: Number,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Idea', ideaSchema);
