var IdeaSchema = require('../schemas/idea');

var Idea = {
    status: {
        OPEN: 0,
        COMPLETED: 1,
        ARCHIVED: 2,
        DELETED: 3
    },

    createOne: function(idea) {
        var idea = new IdeaSchema(idea);
        return idea.save();
    },

    getAll: function() {
        return IdeaSchema.find({}).exec();
    },

    getOne: function(id) {
        return IdeaSchema.findById(id).exec();
    },

    updateOne: function(id, idea) {
        return IdeaSchema.findByIdAndUpdate(id, idea).exec();
    },

    deleteOne: function(id) {
        var idea = {
            status: this.status.DELETED
        };

        return this.updateOne(id, idea);
    }
};

module.exports = Idea;
