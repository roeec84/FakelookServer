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
        minlength: 4,
        maxlength: 16
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports.User = User;