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
    text: {
        type: String,
        minlength: 1,
        maxlength: 100,
        required: true,
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
        text: Joi.string().min(1).max(100).required().label('Text'),
        tags: Joi.array().items(Joi.objectId()).label('Tags')
    })
    return schema.validate(comment, {
        abortEarly: false
    })
}

module.exports.Comment = Comment;
module.exports.validate = validate;