const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
    }]
})

const Comment = mongoose.model('Comment', commentSchema);

const validate = (comment) =>{
    const schema = Joi.object({
        post: Joi.objectId().required().label('Post'),
        user: Joi.objectId().required().label('User'),
        tags: Joi.any()
    })
    return schema.validate(comment, {
        abortEarly: false
    })
}

module.exports.Comment = Comment;
module.exports.validate = validate;