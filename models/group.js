const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose')


const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 24,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }]
})

const Group = mongoose.model('Group', groupSchema);

const validate = (group) =>{
    const schema = Joi.object({
        user: Joi.objectId().required().label('User'),
        name: Joi.string().min(3).max(24).required().label('Name'),
        users: Joi.array().items(Joi.objectId()).required().min(1).label('Users')
    })
    return schema.validate(group, {
        abortEarly: false
    })
}

module.exports.Group = Group;
module.exports.validate = validate;