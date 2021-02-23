const { User } = require("../models/user");

const addUser = async (user) => {
    const newUser = new User({
        firstName: 'Roee',
        lastName: 'Cohen',
        username: 'roeecohen',
        email: 'roeec@sela.co.il',
        password: '123456',
        dateOfBirth: Date.now(),
        address: 'TEL AVIV'
    })

    try {
        await newUser.save();
    } catch (error) {
        console.log(error);
    }
    return newUser._id;
}

module.exports.addUser = addUser;