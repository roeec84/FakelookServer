const Joi = require('joi');
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25
    },
    username: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 16
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 250
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }]
})

const User = mongoose.model('User', userSchema);

const validate = (user) =>{
    const schema = Joi.object({
        firstName: Joi.string().min(3).max(25).required().label('First Name'),
        lastName: Joi.string().min(3).max(25).required().label('Last Name'),
        username: Joi.string().min(3).max(25).required().label('Username'),
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().min(6).max(16).required().label('Password'),
        dateOfBirth: Joi.date().required().label('Birthdate'),
        address: Joi.string().required().label('Address')
    })
    return schema.validate(user, {
        abortEarly: false
    })
}

module.exports.User = User;
module.exports.validate = validate;