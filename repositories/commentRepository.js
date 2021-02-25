const { Comment } = require("../models/comment");

const addComment = async (Comment) => {
    const newComment = new Comment({
        text: 'very good',
        taggedUsers: 'roeecohen',
        tags: '',
    })

    try {
        await newComment.save();
    } catch (error) {
        console.log(error);
    }
    return newComment;
}
module.exports.addComment = addComment;