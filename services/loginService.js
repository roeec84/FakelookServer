const jwt = require('jsonwebtoken');
const { getUserByUsername, addUser } = require('../services/userService');
const bcrypt = require('bcrypt');
const _ = require('lodash')

const login = async (username, password) => {
    const user = await getUserByUsername(username);
    const { error } = user
    if (error) return { message: 'Invalid username or password' };
    try {
        const pass = await bcrypt.compare(password, user.password)
        if (!pass) return { message: 'Invalid username or password' };
        console.log('login', user);
        const token = generateToken(user);
        return { token: token, user: _.pick(user, ['_id', 'username', 'email', 'firstName', 'lastName', 'address', 'dateOfBirth']) };;
    } catch (error) {
        return { message: 'Invalid username or password' };
    }
}

const register = async (user) => {
    const newUser = await addUser(user);
    const { error } = newUser;
    if (error) return [{ message: error }];
    const token = generateToken(user);
    return { token: token, user: _.pick(newUser, ['_id', 'username', 'email', 'firstName', 'lastName', 'address', 'dateOfBirth']) };
}

const generateToken = (user) => {
    return jwt.sign({
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        dateOfBirth: user.dateOfBirth,
        id: user._id
    },
        process.env.JWT_SECRET,
        {
            expiresIn: "15m"
        });
}

module.exports = {
    login,
    register,
    generateToken
}
