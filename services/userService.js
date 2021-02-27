const { validate } = require("../models/user");
const userRepository = require('../repositories/userRepository')

const addUser = async (user) => {
    const { error } = validate(user);
    if (error) {
        return { error: error.details }
    }
    let res = await userRepository.addUser(user)
    return res;
}

const removeUser = async (id) => {
    let res = await userRepository.removeUser(id)
    return res;
}

const editUser = async (id, user) => {
    const { error } = validate(user);
    if (error) {
        return { error: error.details }
    }
    let res = await userRepository.editUser(id, user);
    return res;
}

const getAllUsers = async () => {
    let res = await userRepository.getAllUsers();
    if (!res || res.length === 0) {
        return {
            error: 'No users found.'
        }
    }
    return res;
}

const getUserById = async (id) => {
    let res = await userRepository.getUserById(id);
    if (!res) {
        return {
            error: 'No user found.'
        }
    }
    return res;
}

module.exports = {
    addUser,
    removeUser,
    editUser,
    getAllUsers,
    getUserById
}