const { Post } = require('../models/post');

const addPost = async (post) => {
    const newPost = new Post({
        userName: 'roeecohen',
        text: '',
        image: '',
        location: '',
        tags: '',
        taggedUsers: '',
        likes: ''
    })

    try {
        await newPost.save();
    } catch (error) {
        console.log(error);
    }
    return newPost;
}

module.exports.addPost = addPost;