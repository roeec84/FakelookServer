const { User } = require("../models/user");

const addUser = async (user) => {
    const newUser = new User({
        firstName: user.firstName,
        lastName: user.lastName,
        username: username,
        email: user.email,
        password: user.password,
        dateOfBirth: user.dateOfBirth,
        address: user.address
    })
    try {
        const savedUser = await newUser.save();
        if(savedUser)
            return savedUser;
    } catch (error) {
        console.log(error);
    }
    return null;
}

const removeUser = async (id) => {
    try {
        const foundUser = await User.findOneAndRemove({ _id: id })
        if (foundUser)
            return true;
    } catch (error) {
        console.log(error);
    }
    return false;
}

const editUser = async (id, user) => {
    try {
        const editedUser = await User.findOneAndUpdate({ _id: id }, {
            $set: {
                firstName: user.firstName,
                lastName: user.lastName,
                username: username,
                email: user.email,
                password: user.password,
                dateOfBirth: user.dateOfBirth,
                address: user.address
            }
        }, {new: true, useFindAndModify: false})
        return editedUser;
    } catch (error) {
        console.log(error);
    }
}

const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
    }
}

const getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
    }
}

module.exports.addUser = addUser;
module.exports.removeUser = removeUser;
module.exports.editUser = editUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUserById = getUserById;