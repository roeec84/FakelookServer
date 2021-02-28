const Joi = require('joi');
const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 3,
        maxlength: 16,
        required: true,
        unique: true
    },
})

const Tag = mongoose.model('Tag', tagSchema);

const validate = (tag) =>{
    const schema = Joi.object({
        title: Joi.string().min(3).max(16).required().label('Title'),
    })
    return schema.validate(tag, {
        abortEarly: false
    })
}

module.exports.Tag = Tag;
module.exports.validate = validate;