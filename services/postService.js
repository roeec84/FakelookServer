const postRepository = require('../repositories/postRepository')
const { validate } = require('../models/post');
const { post } = require('../routes/users');

const addPost = async (post) => {
    const { error } = validate(post);
    if (error) {
        return {
            error: error.details
        }
    }
    let res = await postRepository.addPost(post);
    return res;
}

const removePost = async (id) => {
    let res = await postRepository.removePost(id)
    return res;
}

const editPost = async (id, post) => {
    const { error } = validate(post);
    if(error){
        return {
            error: error.details
        }
    }
    let res = await postRepository.editPost(id, post);
    return res;
}

const getPostsByUser = async (userId) => {
    let res = await postRepository.getPostsByUser(userId);
    if(!res || res.length === 0){
        return {
            error: 'No posts found.'
        }
    }
    return res;
}

const getPostsByRadius = async (lat, long, radius) => {
    let res = await postRepository.getPostsByRadius(lat, long, radius);
    if(!res || res.length === 0){
        return {
            error: 'No posts found.'
        }
    }
    return res;
}

module.exports = {
    addPost,
    removePost,
    editPost,
    getPostsByUser,
    getPostsByRadius
}