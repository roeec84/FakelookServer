const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 16
    },
    text: {
        type: String,
        required: false,
        minlength: 2,
        maxlength: 16
    },
    image: {
        type: URL,
        required: true
    },
    location: {
        type: //location,
        required=true
    },
    tags: {
        type: String,
        required: false
    },
    taggedUsers: {
        type: String,
        required: false
    },
    likes: {
    //Unknown
    }
})

const Post = mongoose.model('Post', postSchema);

module.exports.Post = Post;