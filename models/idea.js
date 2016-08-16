var IdeaSchema = require('../schemas/idea');

var Idea = {
    create: function(idea) {
        var idea = new IdeaSchema();
        idea.title = 'My first idea';
        idea.save();

        return 'Creating an idea';
    },

    getAllIdeas: function() {
        // @todo Expand this so you can either find all the users' ideas or all
        // public ideas etc.
        return IdeaSchema.find({}).exec();
    }
};

module.exports = Idea;
