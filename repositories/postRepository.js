const { Post } = require('../models/post');

const addPost = async (post) => {
    const newPost = new Post({
        user: post.user,
        description: post.description,
        image: post.image,
        lat: post.lat,
        long: post.long,
        date: post.date,
        likes: [],
        tags: post.tags,
        taggedUsers: post.taggedUsers
    })
    try {
        const savedPost = await newPost.save();
        if(savedPost)
            return savedPost;
    } catch (error) {
        console.log(error);
    }
    return null;
}

const removePost = async (id) => {
    try {
        const foundPost = await Post.findOneAndRemove({ _id: id })
        if (foundPost)
            return true;
    } catch (error) {
        console.log(error);
    }
    return false;
}

const editPost = async (id, post) => {
    try {
        const editedPost = await Post.findOneAndUpdate({ _id: id }, {
            $set: {
                user: post.user,
                description: post.description,
                image: post.image,
                lat: post.lat,
                long: post.long,
                date: post.date,
                likes: post.likes,
                tags: post.tags
            }
        }, { new: true, useFindAndModify: false })
        return editedPost;
    } catch (error) {
        console.log(error);
    }
}

const getPostsByUser = async (userId) => {
    try {
        const posts = await Post.find({user: userId})
        return posts;
    } catch (error) {
        console.log(error);
    }
}

const getPostsByRadius = async (lat, long, radius) => {
    try {
        //Get current position from client
        //Find all posts that are in that area of position by radius
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addPost,
    removePost,
    editPost,
    getPostsByUser,
    getPostsByRadius
}
