const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
    },
    taggedUsers: {
        type: String,
        required: false,
    },
    tags: {
        type: String,
        required: false
    }
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports.Comment = Comment;