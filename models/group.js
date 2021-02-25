const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 16
    },
    title: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 16
    },
    members: {
        type: String,
        required: true
        //atleast 1 user
    }
})

const Group = mongoose.model('Group', groupSchema);

module.exports.Group = Group;