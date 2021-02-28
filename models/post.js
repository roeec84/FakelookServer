const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        maxlength: 300
    },
    image: {
        type: Buffer,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    taggedUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
})

const Post = mongoose.model('Post', postSchema);

const validate = (post) => {
    const schema = Joi.object({
        user: Joi.objectId().required().label('User'),
        description: Joi.string().max(300).label('Description'),
        image: Joi.any().required().label('Image'), //Change later
        lat: Joi.number().required().label('Latitude'),
        long: Joi.number().required().label('Longitude'),
        date: Joi.date().label('Date'),
        likes: Joi.array().items(Joi.objectId()).label('Likes'),
        tags: Joi.array().items(Joi.objectId()).label('Tags'),
        taggedUsers: Joi.array().items(Joi.objectId()).label('Tagged users'),
    })
    return schema.validate(post, {
        abortEarly: false
    })
}

module.exports.Post = Post;
module.exports.validate = validate;