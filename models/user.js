var UserSchema = require('../schemas/user');

var User = {
    status: {
        ACTIVE: 0,
        LOCKED: 1,
    },

    createOne: function(user) {
        var user = new UserSchema(user);
        return user.save();
    },

    getAll: function() {
        return UserSchema.find({}).exec();
    },

    getOne: function(id) {
        return UserSchema.findById(id).exec();
    },

    updateOne: function(id, user) {
        return UserSchema.findByIdAndUpdate(id, user).exec();
    },

    deleteOne: function(id) {
        return UserSchema.findById(id).remove().exec();
    },

    isLocked: function(user) {
        return (this.status.LOCKED === user.status) ? true : false;
    }
};

module.exports = User;
