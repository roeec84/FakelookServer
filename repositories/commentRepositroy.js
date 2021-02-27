const { Comment } = require('../models/comment')

const addComment = async (comment) => {
    const newComment = new Comment({
        post: comment.post,
        user: comment.user,
        text: comment.text,
        tags: comment.tags
    })
    try {
        const savedComment = await newComment.save()
        if(savedComment)
            return savedComment;
    } catch (error) {
        console.log(error);
    }
    return null
}

const removeComment = async (id) => {
    try {
        const foundComment = await Comment.findOneAndRemove({ _id: id })
        if (foundComment)
            return true;
    } catch (error) {
        console.log(error);
    }
    return false;
}

const editComment = async (id, comment) => {
    try {
        const editedComment = await Comment.findOneAndUpdate({ _id: id }, {
            $set: {
                text: comment.text,
                tags: comment.tags
            }
        }, { new: true, useFindAndModify: false })
        return editedComment;
    } catch (error) {
        console.log(error);
    }
}

const getPostComments = async (postId) => {
    try {
        const comments = await Comment.find({post: postId})
        return comments;
    } catch (error) {
        console.log(error);
    }
}

module.exports.addComment = addComment;
module.exports.removeComment = removeComment;
module.exports.editComment = editComment;
module.exports.getPostComments = getPostComments;