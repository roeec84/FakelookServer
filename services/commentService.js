const commentRepository = require('../repositories/commentRepositroy')
const { validate } = require('../models/comment')

const addComment = async (comment) =>{
    const { error } = validate(comment);
    if(error){
        return {
            error: error.details
        }
    }
    let res = commentRepository.addComment(comment);
    return res;
}

const removeComment = async (id) => {
    let res = await commentRepository.removeComment(id);
    return res;
}

const editComment = async (id, comment) => {
    const { error } = validate(comment);
    if(error){
        return {
            error: error.details
        }
    }
    let res = commentRepository.editComment(id, comment);
    return res;
}

const getPostComments = async (postId) => {
    let res = await commentRepository.getPostComments(postId);
    if(!res || res.length === 0){
        return {
            error: 'No comments found.'
        }
    }
    return res;
}

module.exports = {
    addComment,
    removeComment,
    editComment,
    getPostComments
}